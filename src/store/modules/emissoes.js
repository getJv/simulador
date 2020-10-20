const bigDecimal = require("js-big-decimal");
const calculaEmissao = (lista, itemKey) => {
  return new bigDecimal(lista.find((item) => item.fator == itemKey).valor);
};

const state = {
  /* Pre carregados */
  emis_const_gwp_ar5: [
    {
      gas: "co2",
      valor: 1,
    },
    {
      gas: "ch4",
      valor: 28,
    },
    {
      gas: "n2o",
      valor: 265,
    },
  ],
  emis_const_fatores: [
    {
      id: 1,
      nome: "fator_de_emissao_co2_fossil",
      metrica: "(tCO2/m³)",
      valor: 2.23622347104,
    },
    {
      id: 2,
      nome: "fator_de_emissao_co",
      metrica: "(tCO/m³)",
      valor: 0.0088935503184,
    },
    {
      id: 3,
      nome: "fator_de_emissao_ch4",
      metrica: "(tCH4/m³)",
      valor: 0.00014588234712,
    },
    {
      id: 4,
      nome: "fator_de_emissao_nox",
      metrica: "(tNOx/m³)",
      valor: 0.0435537898992,
    },
    {
      id: 5,
      nome: "fator_de_emissao_n2o",
      metrica: "(tN2O/m³)",
      valor: 0.00100535786208,
    },
    {
      id: 6,
      nome: "fator_de_emissao_covnm",
      metrica: "(tCOVNM/m³)",
      valor: 0.003866761008,
    },
    {
      id: 7,
      nome: "fator_de_emissao_mp",
      metrica: "(tMP/m³)",
      valor: 0.00121824,
    },
    {
      id: 8,
      nome: "fator_de_emissao_sox",
      metrica: "(tSOx/m³)",
      valor: 0.0000030456,
    },
  ],
  emis_entrada_consumo_especifico: [
    {
      nome: "Transporte Ferroviário (Consumo L/1000TKU)",
      icone: "mdi-tram",
      decimalPrecision: 13,
      formula: "transporte_ferroviario",
      valor: 7.2,
    },
    {
      nome: "Transporte Rodoviário (Consumo L/1000TKU)",
      icone: "mdi-train-car",
      decimalPrecision: 13,
      formula: "transporte_rodoviario",
      valor: 21.05,
    },
    {
      nome: "Transporte Hidroviário (Consumo L/1000TKU)",
      icone: "mdi-water-boiler",
      decimalPrecision: 13,
      formula: "transporte_hidroviario",
      valor: 4.6,
    },
    {
      nome: "Transporte Cabotagem (Consumo L/1000TKU)",
      formula: "transporte_cabotagem",
      icone: "mdi-ship-wheel",
      decimalPrecision: 13,
      valor: 3.2,
    },
  ],
  emis_entrada_tonelada_anos: [
    {
      ano: 1,
      volume_tku: 9547024439.93977,
    },
    {
      ano: 2,
      volume_tku: 10645596852.9347,
    },
  ],
  /* Calculados após seleção do usuario*/
  emis_fatores_calculados: null,
  emis_emissao_anual_calculada: null,
  emis_loading: false,
};
const getters = {
  emis_loading: (state) => state.emis_loading,
  emis_entrada_consumo_especifico: (state) =>
    state.emis_entrada_consumo_especifico,
  emis_fatores_calculados: (state) => state.emis_fatores_calculados,
  emis_entrada_tonelada_anos: (state) => state.emis_entrada_tonelada_anos,
  emis_emissao_anual_calculada: (state) => state.emis_emissao_anual_calculada,
  /* Apenas busco o consumo informado para cada modal. pode ser alterado pelo usuário  */
  emis_consumo_especifico_calculado: (state) => (modo) => {
    /* ex de modos: transporte_ferroviario */

    return (
      state.emis_entrada_consumo_especifico.find((item) => item.formula == modo)
        .valor / 1000 || 0
    );
  },
  /* Apenas busco o fator constante para cada gas. independe do modal  */
  emis_const_fator: (state) => (nomeFator) => {
    /* ex de modos: fator_de_emissao_co2_fossil */
    return (
      state.emis_const_fatores.find((item) => item.nome == nomeFator).valor || 0
    );
  },

  emis_co2_fossil_total: (state) => {
    var co2_fossil_total = state.emis_emissao_anual_calculada.reduce(
      (acc, item) => acc.add(item.co2_fossil),
      new bigDecimal(0)
    );

    return co2_fossil_total.round(2).getPrettyValue(3, ",");
  },
  emis_co2e_total: (state) => {
    var co2e_total = state.emis_emissao_anual_calculada.reduce(
      (acc, item) => acc.add(item.co2e),
      new bigDecimal(0)
    );

    return co2e_total.round(2).getPrettyValue(3, ",");
  },
  emis_gco2_tku_total: (state) => {
    var gco2_tku_total = state.emis_emissao_anual_calculada.reduce(
      (acc, item) => acc.add(item.gco2_tku),
      new bigDecimal(0)
    );

    return gco2_tku_total.round(2).getPrettyValue(3, ",");
  },
};
const actions = {
  emis_simulador: ({ commit, dispatch }, modal) => {
    commit("emis_set_loading", true);
    dispatch("emis_calcular_fatores_coeficientes", modal);
    commit("emis_set_loading", false);
  },

  /* Etapa 1 - Dado um modal e seu consumo especifico calcula o fator de cada gas*/
  emis_calcular_fatores_coeficientes: (
    { commit, getters, dispatch },
    modal
  ) => {
    var fatores_coeficientes = [];
    var consumo_especifico_tku = getters.emis_consumo_especifico_calculado(
      modal
    );
    /* passo por cada fator da lista e calculo seu valor derivado */
    state.emis_const_fatores.forEach((item) => {
      var num = new bigDecimal(
        (consumo_especifico_tku / 1000) * getters.emis_const_fator(item.nome)
      );

      fatores_coeficientes.push({
        fator: item.nome,
        valor: num.round(13).getPrettyValue(),
      });
    });

    // acrescento calculo do coefiente complexo fator_de_emissao_co2e o ultimo da lista.

    var fator_emissao_co2_fossil =
      fatores_coeficientes.find(
        (item) => item.fator == "fator_de_emissao_co2_fossil"
      ).valor || 0;

    var fator_emissao_ch4 =
      fatores_coeficientes.find((item) => item.fator == "fator_de_emissao_ch4")
        .valor || 0;

    var fator_emissao_n2o =
      fatores_coeficientes.find((item) => item.fator == "fator_de_emissao_n2o")
        .valor || 0;

    var co2 = state.emis_const_gwp_ar5.find((item) => item.gas == "co2").valor;
    var ch4 = state.emis_const_gwp_ar5.find((item) => item.gas == "ch4").valor;
    var n2o = state.emis_const_gwp_ar5.find((item) => item.gas == "n2o").valor;

    var num = new bigDecimal(
      co2 * fator_emissao_co2_fossil +
        ch4 * fator_emissao_ch4 +
        n2o * fator_emissao_n2o
    );

    fatores_coeficientes.push({
      fator: "fator_de_emissao_co2e",
      valor: num.round(13).getPrettyValue(),
    });

    commit("emis_set_fatores_calculados", fatores_coeficientes);

    dispatch("emis_calculo_anual");
  },
  /* Etapa 2 - para cada ano/tku informado calculamos a emissão de cada gas */
  emis_calculo_anual: ({ commit, getters }) => {
    var emissao_por_ano = [];
    var coeficientes = getters.emis_fatores_calculados;
    /* iteramos todos os anos informados */
    state.emis_entrada_tonelada_anos.forEach((item) => {
      var volume_tku = new bigDecimal(item.volume_tku);
      /* para cada ano realizamos o calculo da emissão */
      var co2_fossil = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_co2_fossil")
      );
      var co = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_co")
      );

      var ch4 = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_ch4")
      );
      var nox = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_nox")
      );
      var n2o = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_n2o")
      );
      var covnm = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_covnm")
      );
      var mp = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_mp")
      );
      var sox = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_sox")
      );
      var co2e = volume_tku.multiply(
        calculaEmissao(coeficientes, "fator_de_emissao_co2e")
      );

      var co2e_ajuste = new bigDecimal(1000000);
      var gco2_tku = co2e.multiply(co2e_ajuste).divide(volume_tku);

      /* criamos o objeto com todo o calculo para cada gas */
      emissao_por_ano.push({
        ano: item.ano,
        volume_tku: volume_tku,
        co2_fossil: co2_fossil,
        co: co,
        ch4: ch4,
        nox: nox,
        n2o: n2o,
        covnm: covnm,
        mp: mp,
        sox: sox,
        co2e: co2e,
        gco2_tku: gco2_tku,
      });
    });

    commit("emis_set_emissao_anual_calculada", emissao_por_ano);
  },

  transporte_ferroviario: ({ commit, dispatch }, newValue) => {
    commit("emp_set_transporte_ferroviario_consumo", newValue);
    dispatch("emis_simulador", "transporte_ferroviario");
  },
  transporte_rodoviario: ({ commit, dispatch }, newValue) => {
    commit("emp_set_transporte_rodoviario_consumo", newValue);
    dispatch("emis_simulador", "transporte_rodoviario");
  },
  transporte_hidroviario: ({ commit, dispatch }, newValue) => {
    commit("emp_set_transporte_hidroviario_consumo", newValue);
    dispatch("emis_simulador", "transporte_hidroviario");
  },
  transporte_cabotagem: ({ commit, dispatch }, newValue) => {
    commit("emp_set_transporte_cabotagem_consumo", newValue);
    dispatch("emis_simulador", "transporte_cabotagem");
  },
  add_tku_anual: ({ commit, dispatch }, newItem) => {
    commit("add_tku_anual", newItem.item);
    dispatch("emis_simulador", newItem.modal);
  },
  remove_tku_anual: ({ commit, dispatch }, newItem) => {
    commit("remove_tku_anual", newItem.item);
    dispatch("emis_simulador", newItem.modal);
  },
};
const mutations = {
  emis_set_loading(state, newValue) {
    state.emis_loading = newValue;
  },
  emis_set_fatores_calculados(state, newValue) {
    state.emis_fatores_calculados = newValue;
  },
  emis_set_emissao_anual_calculada(state, newValue) {
    state.emis_emissao_anual_calculada = newValue;
  },
  emp_set_transporte_ferroviario_consumo(state, newValue) {
    var indexOfItem = 0;
    var el = state.emis_entrada_consumo_especifico.find((item) => {
      if (item.formula == "transporte_ferroviario") {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });

    this._vm.$set(state.emis_entrada_consumo_especifico, indexOfItem, {
      nome: el.nome,
      icone: el.icone,
      decimalPrecision: el.decimalPrecision,
      formula: el.formula,
      valor: newValue,
    });
  },
  add_tku_anual(state, newValue) {
    state.emis_entrada_tonelada_anos.push(newValue);
  },
  remove_tku_anual(state, item) {
    const index = state.emis_entrada_tonelada_anos.indexOf(item);
    state.emis_entrada_tonelada_anos.splice(index, 1);
  },
  emp_set_transporte_rodoviario_consumo(state, newValue) {
    var indexOfItem = 0;
    var el = state.emis_entrada_consumo_especifico.find((item) => {
      if (item.formula == "transporte_rodoviario") {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });

    this._vm.$set(state.emis_entrada_consumo_especifico, indexOfItem, {
      nome: el.nome,
      icone: el.icone,
      decimalPrecision: el.decimalPrecision,
      formula: el.formula,
      valor: newValue,
    });
  },
  emp_set_transporte_hidroviario_consumo(state, newValue) {
    var indexOfItem = 0;
    var el = state.emis_entrada_consumo_especifico.find((item) => {
      if (item.formula == "transporte_hidroviario") {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });

    this._vm.$set(state.emis_entrada_consumo_especifico, indexOfItem, {
      nome: el.nome,
      icone: el.icone,
      decimalPrecision: el.decimalPrecision,
      formula: el.formula,
      valor: newValue,
    });
  },
  emp_set_transporte_cabotagem_consumo(state, newValue) {
    var indexOfItem = 0;
    var el = state.emis_entrada_consumo_especifico.find((item) => {
      if (item.formula == "transporte_cabotagem") {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });

    this._vm.$set(state.emis_entrada_consumo_especifico, indexOfItem, {
      nome: el.nome,
      icone: el.icone,
      decimalPrecision: el.decimalPrecision,
      formula: el.formula,
      valor: newValue,
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
