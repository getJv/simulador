/* eslint-disable no-undef */
const state = {
  gsa_rf_equipamentos_de_transbordo: [],
  gsa_rf_tbl_recursos: [],
  gsa_rf_recursos: [
    {
      id: 1,
      ordem: 1,
      nome: "Pátio aberto pavimento bloquete",
      valor: 159.86,
      unidade: "R$/m²",
      formula: "gsa_rf_armazem_fechado",
      filters: ["currency"],
      quantidade: 0,
    },
    {
      id: 2,
      ordem: 2,
      nome: "Estação ou pátio ferroviário coberto",
      valor: 2529.14,
      unidade: "R$/m²",
      filters: ["currency"],
      quantidade: 5000,
    },
    {
      id: 3,
      ordem: 3,
      nome: "Armazem Fechado",
      valor: 749.5,
      formula: "gsa_rf_armazem_fechado",
      unidade: "R$/m²",
      filters: ["currency"],
      quantidade: 23073,
    },
    {
      id: 4,
      ordem: 4,
      nome: "Galpão de Apoio",
      valor: 374.75,
      unidade: "m²",
      filters: ["currency"],
      quantidade: 750,
    },
    {
      id: 5,
      ordem: 5,
      nome: "Edificação administrativa",
      valor: 871.31,
      unidade: "m²",
      filters: ["currency"],
      quantidade: 500,
    },
    {
      id: 6,
      ordem: 6,
      nome: "Acessos rodoviários",
      valor: 1151019.98,
      unidade: "R$/Km",
      filters: ["currency"],
      quantidade: 2,
    },
    {
      id: 7,
      ordem: 7,
      nome: "Acessos ferroviários",
      valor: 5371199.42,
      unidade: "R$/Km",
      filters: ["currency"],
      quantidade: 2,
    },
    {
      id: 8,
      ordem: 8,
      nome: "AMV adicional",
      valor: 250000,
      unidade: "-",
      filters: ["currency"],
      quantidade: 0,
    },
    {
      id: 9,
      ordem: 9,
      nome: "Acesso hidroviário (cais)",
      valor: 3381.92,
      unidade: "R$/m²",
      filters: ["currency"],
      quantidade: 0,
    },
    {
      id: 10,
      ordem: 10,
      nome: "Gates e portarias",
      valor: 374.75,
      unidade: "m²",
      filters: ["currency"],
      quantidade: 1000,
    },
  ],
  gsa_rf_equipamentos: [
    {
      id: 1,
      ordem: 1,
      nome: "Balança Rodoviaria",
      valor: 213160,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.0000005606575,
    },
    {
      id: 2,
      ordem: 2,
      nome: "Balança Rodo-Ferroviária",
      valor: 260000,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.0000005606575,
    },
    {
      id: 3,
      ordem: 3,
      nome: "Tracionador de Vagão",
      valor: 200000,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.0000005606575,
    },

    {
      id: 4,
      ordem: 4,
      nome: "Tombador",
      valor: 600000,
      filters: ["currency"],
      periodo_depreciacao: 20,
      formula: "gsa_rf_tombador",
      fator: 0,
    },

    {
      id: 5,
      ordem: 5,
      nome: "Moega ",
      valor: 420000,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.0000011213151,
    },

    {
      id: 6,
      ordem: 6,
      nome: "Balança Rodoviária",
      valor: 213160,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.00000388521,
    },
    {
      id: 7,
      ordem: 7,
      nome: "Balança Ferroviária",
      valor: 277108,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.0000019426,
    },
    {
      id: 8,
      ordem: 8,
      nome: "Tracionador de Vagão",
      valor: 213160,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.0000019426,
    },
    {
      id: 9,
      ordem: 9,
      nome: "Empilhadeira gás/gasol. 2,5t",
      valor: 50000,
      filters: ["currency"],
      periodo_depreciacao: 10,
      fator: 0.00000777041,
    },
    {
      id: 10,
      ordem: 10,
      nome: "Empilhadeira diesel 7t",
      valor: 127600,
      filters: ["currency"],
      periodo_depreciacao: 10,
      fator: 0.00000388521,
    },
    {
      id: 11,
      ordem: 11,
      nome: "Empilhadeira diesel 16t",
      valor: 271300,
      filters: ["currency"],
      periodo_depreciacao: 10,
      fator: 0.00000388521,
    },
    {
      id: 12,
      ordem: 12,
      nome: "Reachstacker",
      valor: 1500000,
      filters: ["currency"],
      periodo_depreciacao: 10,
      fator: 0.0000019426,
    },
    {
      id: 13,
      ordem: 13,
      nome: "Instalações Elétricas",
      valor: 1625995,
      filters: ["currency"],
      periodo_depreciacao: 25,
      fator: 0.0000009713,
    },
    {
      id: 14,
      ordem: 14,
      nome: "Subestação Principal",
      valor: 2167993,
      filters: ["currency"],
      periodo_depreciacao: 25,
      fator: 0.0000009713,
    },
    {
      id: 15,
      ordem: 15,
      nome: "Sistema de Água",
      valor: 1987327,
      filters: ["currency"],
      periodo_depreciacao: 25,
      fator: 0.0000009713,
    },
  ],
  gsa_rf_variaveis_de_entrada: [
    {
      id: 1,
      ordem: 1,
      formula: "gsa_rf_ve_tombamento_medio_por_hora",
      nome: "Tombamento médio por hora (t)",
      valor: 0,
      filters: [],
      dependentes: [
        "gsa_rf_carregar_equipamentos_de_transbordo",
        /*         "gsa_rf_cf_seguros",
        "gsa_rf_cf_custo_oportunidade", */
        "gsa_rf_ctrl_capacidade_estatica",
        /*         "gsa_rf_ctrl_tarifa_limpa", */
      ],
    },
    {
      id: 2,
      ordem: 2,
      formula: "gsa_rf_ve_tempo_medio_de_armazenagem",
      nome: "Tempo médio de armazenagem (dias)",
      valor: 0,
      filters: [],
      dependentes: [
        "gsa_rf_ctrl_capacidade_estatica",
        "gsa_rf_ctrl_tarifa_limpa",
      ],
    },
    {
      id: 3,
      ordem: 3,
      formula: "gsa_rf_ve_movimentacao",
      nome: "Movimentação (toneladas por ano)",
      valor: 0,
      filters: [],
      dependentes: [
        "gsa_rf_cv_energia_eletrica",
        "gsa_rf_cv_consumo_equipamentos",
        "gsa_rf_carregar_equipamentos_de_transbordo",
        "gsa_rf_cf_depreciacao_maquinario",
        "gsa_rf_cf_seguros",
        "gsa_rf_cf_custo_oportunidade",
        "gsa_rf_ctrl_giro",
        "gsa_rf_ctrl_tarifa_limpa",
      ],
    },
    {
      id: 4,
      ordem: 4,
      formula: "gsa_rf_ve_tarifa_energia",
      nome: "Tarifa de Energia (R$/Kw)",
      valor: 0,
      filters: [],
      dependentes: ["gsa_rf_cv_energia_eletrica", "gsa_rf_ctrl_tarifa_limpa"],
    },
    {
      id: 5,
      ordem: 5,
      formula: "gsa_rf_ve_numero_de_funcionarios",
      nome: "Número de funcionários",
      valor: 0,
      filters: [],
      dependentes: ["gsa_rf_cf_salarios", "gsa_rf_ctrl_tarifa_limpa"],
    },
    {
      id: 6,
      ordem: 6,
      formula: "gsa_rf_ve_salario_medio",
      nome: "Salário médio",
      valor: 0,
      filters: [],
      dependentes: ["gsa_rf_cf_salarios", "gsa_rf_ctrl_tarifa_limpa"],
    },
  ],
  gsa_rf_custos_fixos: [
    {
      id: 1,
      ordem: 1,
      formula: "gsa_rf_cf_salarios",
      nome: "Salários",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 2,
      ordem: 2,
      formula: "gsa_rf_cf_depreciacao_instalacoes",
      nome: "Depreciação das instalações",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 3,
      ordem: 3,
      formula: "gsa_rf_cf_manutencao_instalacoes",
      nome: "Manutenção das instalações",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 4,
      ordem: 4,
      formula: "gsa_rf_cf_depreciacao_maquinario",
      nome: "Depreciação Maquinário",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 5,
      ordem: 5,
      formula: "gsa_rf_cf_seguros",
      nome: "Seguros",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 6,
      ordem: 6,
      formula: "gsa_rf_cf_custo_oportunidade",
      nome: "Custo de Oportunidade",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
  ],
  gsa_rf_custos_variaveis: [
    {
      id: 1,
      formula: "gsa_rf_cv_energia_eletrica",
      nome: "Energia elétrica",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 2,
      formula: "gsa_rf_cv_consumo_equipamentos",
      nome: "Consumo de equipamentos",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 3,
      formula: "gsa_rf_cv_manutencao_maquinario",
      nome: "Manutenção de maquinário",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
  ],
  gsa_rf_variaveis_de_ctrl: [
    {
      id: "",
      ordem: "",
      formula: "gsa_rf_ctrl_carga_na_safra",
      nome: "Carga na safra",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },

    {
      id: "",
      ordem: "",
      formula: "gsa_rf_ctrl_meses_de_safra_ano",
      nome: "Meses de safra no ano",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },

    {
      id: "",
      ordem: "",
      formula: "gsa_rf_ctrl_carga_na_entre_safra",
      nome: "Carga na entre safra",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: "",
      ordem: "",
      formula: "gsa_rf_ctrl_horas_de_funcionamento_mensal",
      nome: "Horas de funcionamento mensal",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },

    {
      id: "",
      ordem: "",
      formula: "gsa_rf_ctrl_paradas_para_manutencao_mensal",
      nome: "Paradas para manutenção (mensal)",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },

    //-----
    {
      id: 1,
      ordem: 1,
      formula: "gsa_rf_ctrl_consumo_energia_eletrica",
      nome: "Consumo de energia elétrica (Kw/t)",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 2,
      ordem: 2,
      formula: "gsa_rf_ctrl_consumo_equipamentos",
      nome: "Consumo de equipamentos (R$/t)",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 3,
      ordem: 3,
      formula: "gsa_rf_ctrl_encargos_sociais",
      nome: "Encargos Sociais",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 4,
      ordem: 4,
      formula: "gsa_rf_ctrl_beneficios",
      nome: "Benefícios",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 5,
      ordem: 5,
      formula: "gsa_rf_ctrl_instalacoes",
      nome: "Instalações",
      valor: 0,
      filters: ["currency"],
      dependentes: [
        "gsa_rf_cf_depreciacao_instalacoes",
        "gsa_rf_cf_manutencao_instalacoes",
        "gsa_rf_cf_depreciacao_maquinario",
        "gsa_rf_cf_seguros",
        "gsa_rf_cf_custo_oportunidade",
      ],
    },
    {
      id: 6,
      ordem: 6,
      formula: "gsa_rf_ctrl_periodo_depreciacao_obra_civil",
      nome: "Periodo de depreciação da obra civil",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 7,
      ordem: 7,
      formula: "gsa_rf_ctrl_fator_manutencao_obra_civil",
      nome: "Fator de manutenção da obra civil",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 8,
      ordem: 8,
      formula: "gsa_rf_ctrl_remuneracao_do_capital",
      nome: "Remuneração do capital",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 9,
      ordem: 9,
      formula: "gsa_rf_ctrl_seguros",
      nome: "Seguros",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 10,
      ordem: 10,
      formula: "gsa_rf_ctrl_giro",
      nome: "Giro",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 11,
      ordem: 11,
      formula: "gsa_rf_ctrl_capacidade_estatica",
      nome: "Capacidade Estática",
      valor: 0,
      filters: ["point"],

      dependentes: [
        "gsa_rf_carregar_tbl_de_recursos",
        "gsa_rf_ctrl_giro",
        "gsa_rf_ctrl_instalacoes",
      ],
    },
    {
      id: 12,
      ordem: 12,
      formula: "gsa_rf_ctrl_margem_de_lucro",
      nome: "margem de lucro",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 13,
      ordem: 13,
      formula: "gsa_rf_ctrl_tarifa_limpa",
      nome: "Tarifa Limpa",
      valor: 0,
      filters: ["currency"],
      dependentes: [
        "gsa_rf_ctrl_lucro",
        "gsa_rf_ctrl_tributos",
        "gsa_rf_ctrl_tarifa",
      ],
    },
    {
      id: 14,
      ordem: 14,
      formula: "gsa_rf_ctrl_lucro",
      nome: "Lucro",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 15,
      ordem: 15,
      formula: "gsa_rf_ctrl_tributos",
      nome: "Tributos",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 16,
      ordem: 16,
      formula: "gsa_rf_ctrl_tarifa",
      nome: "Tarifa",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 17,
      ordem: 17,
      formula: "gsa_rf_ctrl_disponibilidade_dos_equipamentos",
      nome: "Disponibilidade dos equipamentos",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 18,
      ordem: 18,
      formula: "gsa_rf_ctrl_disponibilidade_de_vagoes_no_patio",
      nome: "Disponibilidade de vagões no pátio",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 19,
      ordem: 19,
      formula: "gsa_rf_ctrl_horas_funcionamento_diario",
      nome: "Horas de Funcionamento diário",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    /* {
      id: 20,
      ordem: 20,
      formula: "gsa_rf_ctrl_parada_para_manutencao",
      nome: "Paradas para manutenção (mensal)",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    }, */
    {
      id: 21,
      ordem: 21,
      formula: "gsa_rf_ctrl_fator_manutencao_do_maquinario",
      nome: "Fator de manutenção do maquinario",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
  ],
};
const getters = {
  gsa_rf_armazem_fechado: (state, getters) => (item) => {
    var capacidade_estatica = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_capacidade_estatica"
    ).valor;

    item.quantidade = Math.round(2 * (capacidade_estatica / 3));
    item.total = item.quantidade * item.valor;

    return item;
  },
  gsa_rf_calcular_quantidade_e_depreciacao: (state, getters) => (item) => {
    if (!item.formula) {
      //Calculo da quantidade
      var movimentacao = getters.gsa_rf_getVar(
        "gsa_rf_variaveis_de_entrada",
        "gsa_rf_ve_movimentacao"
      ).valor;
      item.quantidade = Math.round(movimentacao * item.fator);
      item.valor_total = item.quantidade * item.valor;
      item.depreciacao = item.valor_total / item.periodo_depreciacao || 0;
      return item;
    } else {
      return getters[item.formula](item);
    }
  },
  gsa_rf_calcular_total_e_quantidade_recursos: (state, getters) => (item) => {
    if (!item.formula) {
      item.total = item.quantidade * item.valor;
      return item;
    } else {
      return getters[item.formula](item);
    }
  },
  gsa_rf_eqt_total_maquinario: (state, getters) => {
    var total = 0;
    getters.gsa_rf_equipamentos_de_transbordo.forEach(
      (item) => (total += item.valor_total)
    );
    return total;
  },
  gsa_rf_rec_total_unitario_valores: (state, getters) => {
    var total = 0;

    getters.gsa_rf_tbl_recursos.forEach((item) => (total += item.valor));
    return total;
  },
  gsa_rf_rec_total_recursos: (state, getters) => {
    var total = 0;

    getters.gsa_rf_tbl_recursos.forEach((item) => {
      total += item.total;
    });

    return total;
  },
  gsa_rf_eqt_total_depreciacao: (state, getters) => {
    var total = 0;
    getters.gsa_rf_equipamentos_de_transbordo.forEach(
      (item) => (total += item.depreciacao)
    );
    return total;
  },
  gsa_rf_equipamentos_de_transbordo: (state) =>
    state.gsa_rf_equipamentos_de_transbordo,
  gsa_rf_equipamentos: (state) => state.gsa_rf_equipamentos,
  gsa_rf_recursos: (state) => state.gsa_rf_recursos,
  gsa_rf_tbl_recursos: (state) => state.gsa_rf_tbl_recursos,
  gsa_rf_variaveis_de_entrada: (state) => state.gsa_rf_variaveis_de_entrada,
  gsa_rf_variaveis_de_ctrl: (state) => state.gsa_rf_variaveis_de_ctrl,
  gsa_rf_custos_variaveis: (state) => state.gsa_rf_custos_variaveis,
  gsa_rf_custos_fixos: (state) => state.gsa_rf_custos_fixos,
  gsa_rf_cv_total: (state, getters) => {
    var total = 0;
    getters.gsa_rf_custos_variaveis.forEach((item) => {
      total += item.valor;
    });
    return total;
  },
  gsa_rf_cf_total: (state, getters) => {
    var total = 0;
    getters.gsa_rf_custos_fixos.forEach((item) => {
      total += item.valor;
    });
    return total;
  },
  gsa_rf_getVar: (state) => (grupo, formula) => {
    return state[grupo].find((item) => item.formula === formula);
  },
};
const mutations = {
  gsa_rf_setVariavelDeEntrada(state, newItem) {
    var indexOfItem = 0;
    var el = state.gsa_rf_variaveis_de_entrada.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });
    this._vm.$set(state.gsa_rf_variaveis_de_entrada, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
  gsa_rf_setCustosVariaveis(state, newItem) {
    var indexOfItem = 0;
    var el = state.gsa_rf_custos_variaveis.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });
    this._vm.$set(state.gsa_rf_custos_variaveis, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
  gsa_rf_setVariaveisControle(state, newItem) {
    var indexOfItem = 0;
    var el = state.gsa_rf_variaveis_de_ctrl.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });
    this._vm.$set(state.gsa_rf_variaveis_de_ctrl, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
  gsa_rf_setCustosFixos(state, newItem) {
    var indexOfItem = 0;
    var el = state.gsa_rf_custos_fixos.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });
    this._vm.$set(state.gsa_rf_custos_fixos, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
  gsa_rf_setEquipamentosDeTransbordo(state, newItem) {
    state.gsa_rf_equipamentos_de_transbordo = newItem;
  },
  gsa_rf_setTblRecursos(state, newItem) {
    state.gsa_rf_tbl_recursos = newItem;
  },
};
const actions = {
  gsa_rf_ve_tombamento_medio_por_hora: (
    { commit, getters, dispatch },
    newValue
  ) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_tombamento_medio_por_hora"
    );

    obj.valor = newValue || 551;

    commit("gsa_rf_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ve_tempo_medio_de_armazenagem: (
    { commit, getters, dispatch },
    newValue
  ) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_tempo_medio_de_armazenagem"
    );

    obj.valor = newValue || 7;

    commit("gsa_rf_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ve_movimentacao: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_movimentacao"
    );

    obj.valor = Number(newValue) || 2677860;

    commit("gsa_rf_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ve_tarifa_energia: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_tarifa_energia"
    );

    obj.valor = newValue || 0.6202956;

    commit("gsa_rf_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ve_numero_de_funcionarios: (
    { commit, getters, dispatch },
    newValue
  ) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_numero_de_funcionarios"
    );

    obj.valor = newValue || 172;

    commit("gsa_rf_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ve_salario_medio: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_salario_medio"
    );

    obj.valor = newValue || 1293.89;

    commit("gsa_rf_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_cv_energia_eletrica: ({ commit, getters, dispatch }) => {
    var movimentacao = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_movimentacao"
    ).valor;
    var consumo_energia_eletrica = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_consumo_energia_eletrica"
    ).valor;

    var tarifa_energia = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_tarifa_energia"
    ).valor;

    var formula = movimentacao * consumo_energia_eletrica * tarifa_energia;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_custos_variaveis",
      "gsa_rf_cv_energia_eletrica"
    );

    obj.valor = Number(formula) || 207553;

    commit("gsa_rf_setCustosVariaveis", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_cv_consumo_equipamentos: ({ commit, getters, dispatch }) => {
    var movimentacao = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_movimentacao"
    ).valor;

    var consumo_equipamentos = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_consumo_equipamentos"
    ).valor;
    var formula = movimentacao * consumo_equipamentos;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_custos_variaveis",
      "gsa_rf_cv_consumo_equipamentos"
    );

    obj.valor = Number(formula) || 751969;
    commit("gsa_rf_setCustosVariaveis", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_cv_manutencao_maquinario: ({ commit, getters, dispatch }) => {
    /*  var fator_de_manutencao_maquinario = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_fator_manutencao_do_maquinario"
    ).valor;

    var formula = 0
      fator_de_manutencao_maquinario * getters.gsa_rf_eqt_total_maquinario; */

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_custos_variaveis",
      "gsa_rf_cv_manutencao_maquinario"
    );

    obj.valor = /* formula || */ 233164;

    commit("gsa_rf_setCustosVariaveis", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_carga_na_safra: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_carga_na_safra"
    );

    obj.valor = 1;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_meses_de_safra_ano: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_meses_de_safra_ano"
    );

    obj.valor = 6;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_carga_na_entre_safra: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_carga_na_entre_safra"
    );

    obj.valor = 0.25;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_consumo_energia_eletrica: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_consumo_energia_eletrica"
    );

    obj.valor = 0.65;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_consumo_equipamentos: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_consumo_equipamentos"
    );

    obj.valor = 0.7519687;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_encargos_sociais: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_encargos_sociais"
    );

    obj.valor = 99 / 100;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_beneficios: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_beneficios"
    );

    obj.valor = Math.round((1 / 3) * 10000) / 10000;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_instalacoes: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_instalacoes"
    );

    obj.valor = getters.gsa_rf_rec_total_recursos || 62775936;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_periodo_depreciacao_obra_civil: ({
    commit,
    getters,
    dispatch,
  }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_periodo_depreciacao_obra_civil"
    );

    obj.valor = 40;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_fator_manutencao_obra_civil: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_fator_manutencao_obra_civil"
    );

    obj.valor = 0.5 / 100;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_fator_manutencao_do_maquinario: ({
    commit,
    getters,
    dispatch,
  }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_fator_manutencao_do_maquinario"
    );

    obj.valor = 1.5 / 100;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_disponibilidade_de_vagoes_no_patio: ({
    commit,
    getters,
    dispatch,
  }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_disponibilidade_de_vagoes_no_patio"
    );

    obj.valor = 65 / 100;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_remuneracao_do_capital: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_remuneracao_do_capital"
    );

    obj.valor = 10 / 100;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_seguros: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_seguros"
    );

    obj.valor = 0.25 / 100;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_giro: ({ commit, getters, dispatch }) => {
    var movimentacao = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_movimentacao"
    ).valor;

    var capacidade_estatica = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_capacidade_estatica"
    ).valor;

    var formula = movimentacao / capacidade_estatica;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_giro"
    );

    obj.valor = Math.round(Number(formula)) || 18;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_capacidade_estatica: ({ commit, getters, dispatch }) => {
    var carga_na_safra = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_carga_na_safra"
    ).valor;

    var meses_de_safra_ano = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_meses_de_safra_ano"
    ).valor;

    var carga_na_entre_safra = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_carga_na_entre_safra"
    ).valor;

    var horas_de_funcionamento_mensal = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_horas_de_funcionamento_mensal"
    ).valor;

    var tombamento_medio_por_hora = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_tombamento_medio_por_hora"
    ).valor;

    var tempo_medio_de_armazenagem = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_tempo_medio_de_armazenagem"
    ).valor;

    var formula =
      ((carga_na_safra * meses_de_safra_ano) / 12 +
        (carga_na_entre_safra * (12 - meses_de_safra_ano)) / 12) *
      horas_de_funcionamento_mensal *
      12 *
      tombamento_medio_por_hora *
      (tempo_medio_de_armazenagem / 360);

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_capacidade_estatica"
    );
    obj.valor = Math.round(formula) || 52070;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_horas_de_funcionamento_mensal: ({
    commit,
    getters,
    dispatch,
  }) => {
    var paradas_para_manutencao_mensal = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_paradas_para_manutencao_mensal"
    ).valor;

    var horas_funcionamento_diario = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_horas_funcionamento_diario"
    ).valor;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_horas_de_funcionamento_mensal"
    );

    var formula =
      horas_funcionamento_diario * 30 * (1 - paradas_para_manutencao_mensal);

    obj.valor = Math.round(formula) || 648;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_paradas_para_manutencao_mensal: ({
    commit,
    getters,
    dispatch,
  }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_paradas_para_manutencao_mensal"
    );
    obj.valor = 10 / 100;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_horas_funcionamento_diario: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_horas_funcionamento_diario"
    );
    obj.valor = 24;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_ctrl_margem_de_lucro: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_margem_de_lucro"
    );
    obj.valor = 0;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_tarifa_limpa: ({ commit, getters, dispatch }) => {
    var movimentacao = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_movimentacao"
    ).valor;

    var formula =
      (getters.gsa_rf_cf_total + getters.gsa_rf_cv_total) / movimentacao;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_tarifa_limpa"
    );

    obj.valor = Math.round(Number(formula) * 100) / 100 || 24.45;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_lucro: ({ commit, getters, dispatch }) => {
    var margem_de_lucro = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_margem_de_lucro"
    ).valor;
    var tarifa_limpa = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_tarifa_limpa"
    ).valor;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_lucro"
    );
    obj.valor = margem_de_lucro * tarifa_limpa || 0;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_tributos: ({ commit, getters, dispatch }) => {
    var tarifa_limpa = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_tarifa_limpa"
    ).valor;
    var lucro = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_lucro"
    ).valor;

    var total_tributacao = 15.5 / 100;

    var formula = total_tributacao * (tarifa_limpa + lucro);

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_tributos"
    );
    obj.valor = Number(formula) || 3.78;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_tarifa: ({ commit, getters, dispatch }) => {
    var tarifa_limpa = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_tarifa_limpa"
    ).valor;
    var lucro = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_lucro"
    ).valor;
    var tributos = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_tributos"
    ).valor;

    var formula = tarifa_limpa + lucro + tributos;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_tarifa"
    );

    obj.valor = Number(formula) || 28.22;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_ctrl_disponibilidade_dos_equipamentos: ({
    commit,
    getters,
    dispatch,
  }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_disponibilidade_dos_equipamentos"
    );
    obj.valor = 90 / 100;

    commit("gsa_rf_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },

  gsa_rf_carregar_equipamentos_de_transbordo: ({ commit, getters }) => {
    var lista = [];
    getters.gsa_rf_equipamentos.forEach((item) => {
      lista.push(getters.gsa_rf_calcular_quantidade_e_depreciacao(item));
    });
    commit("gsa_rf_setEquipamentosDeTransbordo", lista);
  },
  gsa_rf_carregar_tbl_de_recursos: ({ commit, getters }) => {
    var lista = [];

    getters.gsa_rf_recursos.forEach((item) => {
      lista.push(getters.gsa_rf_calcular_total_e_quantidade_recursos(item));
    });
    commit("gsa_rf_setTblRecursos", lista);
  },
  gsa_rf_cf_salarios: ({ commit, getters, dispatch }) => {
    var num_funcionarios = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_numero_de_funcionarios"
    ).valor;

    var salario_medio = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_entrada",
      "gsa_rf_ve_salario_medio"
    ).valor;

    var encargos_sociais = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_encargos_sociais"
    ).valor;

    var beneficios = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_beneficios"
    ).valor;

    var formula =
      num_funcionarios *
      salario_medio *
      (1 + encargos_sociais + beneficios) *
      13;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_custos_fixos",
      "gsa_rf_cf_salarios"
    );

    obj.valor = Number(formula) || 9039435;

    commit("gsa_rf_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_cf_depreciacao_instalacoes: ({ commit, getters, dispatch }) => {
    var instalacoes = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_instalacoes"
    ).valor;

    var periodo_depreciacao_obra_civil = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_periodo_depreciacao_obra_civil"
    ).valor;

    var formula = instalacoes / periodo_depreciacao_obra_civil;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_custos_fixos",
      "gsa_rf_cf_depreciacao_instalacoes"
    );

    obj.valor = Number(formula) || 1626233;

    commit("gsa_rf_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_cf_manutencao_instalacoes: ({ commit, getters, dispatch }) => {
    var instalacoes = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_instalacoes"
    ).valor;

    var fator_manutencao_obra_civil = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_fator_manutencao_obra_civil"
    ).valor;

    var formula = instalacoes * fator_manutencao_obra_civil;

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_custos_fixos",
      "gsa_rf_cf_manutencao_instalacoes"
    );

    obj.valor = Number(formula) || 325247;

    commit("gsa_rf_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_cf_depreciacao_maquinario: ({ commit, getters, dispatch }) => {
    var obj = getters.gsa_rf_getVar(
      "gsa_rf_custos_fixos",
      "gsa_rf_cf_depreciacao_maquinario"
    );

    obj.valor = getters.gsa_rf_eqt_total_depreciacao || 2032243;

    commit("gsa_rf_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_cf_seguros: ({ commit, getters, dispatch }) => {
    var instalacoes = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_instalacoes"
    ).valor;

    var seguros = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_seguros"
    ).valor;

    var formula = seguros * (getters.gsa_rf_eqt_total_maquinario + instalacoes);

    var obj = getters.gsa_rf_getVar("gsa_rf_custos_fixos", "gsa_rf_cf_seguros");

    obj.valor = Number(formula) || 249640;

    commit("gsa_rf_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  gsa_rf_cf_custo_oportunidade: ({ commit, getters, dispatch }) => {
    var instalacoes = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_instalacoes"
    ).valor;

    var remuneracao_do_capital = getters.gsa_rf_getVar(
      "gsa_rf_variaveis_de_ctrl",
      "gsa_rf_ctrl_remuneracao_do_capital"
    ).valor;

    var formula =
      remuneracao_do_capital *
      (getters.gsa_rf_eqt_total_maquinario + instalacoes);

    var obj = getters.gsa_rf_getVar(
      "gsa_rf_custos_fixos",
      "gsa_rf_cf_custo_oportunidade"
    );
    obj.valor = Number(formula) || 325247;

    commit("gsa_rf_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
