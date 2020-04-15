/* eslint-disable no-undef */
const state = {
  cg_hfh_equipamentos_de_transbordo: [],
  cg_hfh_tbl_recursos: [],
  cg_hfh_recursos: [
    {
      id: 1,
      ordem: 1,
      nome: "Pátio aberto pavimento bloquete",
      valor: 159.86,
      unidade: "R$/m²",
      formula: "cg_hfh_armazem_fechado",
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
      formula: "cg_hfh_armazem_fechado",
      unidade: "R$/m²",
      filters: ["currency"],
      quantidade: 0,
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
      quantidade: 1,
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
      quantidade: 5000,
    },
    {
      id: 10,
      ordem: 10,
      nome: "Gates e portarias",
      valor: 374.75,
      unidade: "m²",
      filters: ["currency"],
      quantidade: 400,
    },
  ],
  cg_hfh_equipamentos: [
    {
      id: 1,
      ordem: 1,
      nome: "Ponte rolante",
      valor: 12000000,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.00000114312,
    },
    {
      id: 2,
      ordem: 2,
      nome: "Acessórios para ponte rolante",
      valor: 2560000,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.00000114312,
    },
    {
      id: 3,
      ordem: 3,
      nome: "Porteineres Panamax",
      valor: 8581234,
      filters: ["currency"],
      periodo_depreciacao: 0,
      fator: 0,
    },
    {
      id: 4,
      ordem: 4,
      nome: "Transteineres",
      valor: 5735986,
      filters: ["currency"],
      periodo_depreciacao: 0,
      fator: 0,
    },
    {
      id: 5,
      ordem: 5,
      nome: "Guindaste 40t",
      formula: "cg_hfh_guindaste_40t",
      valor: 2000000,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 2.0,
    },
    {
      id: 6,
      ordem: 6,
      nome: "Balança Rodoviária",
      valor: 213160,
      filters: ["currency"],
      periodo_depreciacao: 0,
      fator: 0,
    },
    {
      id: 7,
      ordem: 7,
      nome: "Balança Ferroviária",
      valor: 277108,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.00000228624,
    },
    {
      id: 8,
      ordem: 8,
      nome: "Tracionador de Vagão",
      valor: 213160,
      filters: ["currency"],
      periodo_depreciacao: 20,
      fator: 0.00000228624,
    },
    {
      id: 9,
      ordem: 9,
      nome: "Empilhadeira gás/gasol. 2,5t",
      valor: 50000,
      filters: ["currency"],
      periodo_depreciacao: 10,
      fator: 0.00000914495,
    },
    {
      id: 10,
      ordem: 10,
      nome: "Empilhadeira diesel 7t",
      valor: 127600,
      filters: ["currency"],
      periodo_depreciacao: 10,
      fator: 0.00000457247,
    },
    {
      id: 11,
      ordem: 11,
      nome: "Empilhadeira diesel 16t",
      valor: 271300,
      filters: ["currency"],
      periodo_depreciacao: 10,
      fator: 0.00000457247,
    },
    {
      id: 12,
      ordem: 12,
      nome: "Reachstacker",
      valor: 1500000,
      filters: ["currency"],
      periodo_depreciacao: 10,
      fator: 0.00000228624,
    },
    {
      id: 13,
      ordem: 13,
      nome: "Instalações Elétricas",
      valor: 1625995,
      filters: ["currency"],
      periodo_depreciacao: 25,
      fator: 0.00000114312,
    },
    {
      id: 14,
      ordem: 14,
      nome: "Subestação Principal",
      valor: 2167993,
      filters: ["currency"],
      periodo_depreciacao: 25,
      fator: 0.00000114312,
    },
    {
      id: 15,
      ordem: 15,
      nome: "Sistema de Água",
      valor: 1987327,
      filters: ["currency"],
      periodo_depreciacao: 25,
      fator: 0.00000114312,
    },
  ],
  cg_hfh_variaveis_de_entrada: [
    {
      id: 1,
      ordem: 1,
      formula: "cg_hfh_ve_transbordo_medio_por_hora",
      nome: "Transbordo médio por Hora (t/h)",
      valor: 0,
      filters: [],
      icone: "mdi-dump-truck",
      dependentes: [
        "cg_hfh_carregar_equipamentos_de_transbordo",
        "cg_hfh_cf_seguros",
        "cg_hfh_cf_custo_oportunidade",
        "cg_hfh_ctrl_capacidade_estatica",
        "cg_hfh_ctrl_tarifa_limpa",
      ],
    },
    {
      id: 2,
      ordem: 2,
      formula: "cg_hfh_ve_tempo_medio_de_armazenagem",
      nome: "Tempo médio de armazenagem (dias)",
      valor: 0,
      filters: [],
      icone: "mdi-warehouse",
      dependentes: [
        "cg_hfh_ctrl_capacidade_estatica",
        "cg_hfh_ctrl_tarifa_limpa",
      ],
    },
    {
      id: 3,
      ordem: 3,
      formula: "cg_hfh_ve_movimentacao",
      nome: "Movimentação (toneladas por ano)",
      valor: 0,
      filters: [],
      icone: "mdi-weight-kilogram",
      dependentes: [
        "cg_hfh_cv_energia_eletrica",
        "cg_hfh_cv_consumo_equipamentos",
        "cg_hfh_carregar_equipamentos_de_transbordo",
        "cg_hfh_cf_depreciacao_maquinario",
        "cg_hfh_cf_seguros",
        "cg_hfh_cf_custo_oportunidade",
        "cg_hfh_ctrl_giro",
        "cg_hfh_ctrl_tarifa_limpa",
      ],
    },
    {
      id: 4,
      ordem: 4,
      formula: "cg_hfh_ve_tarifa_energia",
      nome: "Tarifa de Energia (R$/Kw)",
      valor: 0,
      icone: "mdi-currency-usd-circle-outline",
      filters: [],
      dependentes: ["cg_hfh_cv_energia_eletrica", "cg_hfh_ctrl_tarifa_limpa"],
    },
    {
      id: 5,
      ordem: 5,
      formula: "cg_hfh_ve_numero_de_funcionarios",
      nome: "Número de funcionários",
      icone: "mdi-account-group",
      valor: 0,
      filters: [],
      dependentes: ["cg_hfh_cf_salarios", "cg_hfh_ctrl_tarifa_limpa"],
    },
    {
      id: 6,
      ordem: 6,
      formula: "cg_hfh_ve_salario_medio",
      nome: "Salário médio",
      valor: 0,
      filters: [],
      icone: "mdi-account-cash-outline",
      dependentes: ["cg_hfh_cf_salarios", "cg_hfh_ctrl_tarifa_limpa"],
    },
  ],
  cg_hfh_custos_fixos: [
    {
      id: 1,
      ordem: 1,
      formula: "cg_hfh_cf_salarios",
      nome: "Salários",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 2,
      ordem: 2,
      formula: "cg_hfh_cf_depreciacao_instalacoes",
      nome: "Depreciação das instalações",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 3,
      ordem: 3,
      formula: "cg_hfh_cf_manutencao_instalacoes",
      nome: "Manutenção das instalações",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 4,
      ordem: 4,
      formula: "cg_hfh_cf_depreciacao_maquinario",
      nome: "Depreciação Maquinário",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 5,
      ordem: 5,
      formula: "cg_hfh_cf_seguros",
      nome: "Seguros",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 6,
      ordem: 6,
      formula: "cg_hfh_cf_custo_oportunidade",
      nome: "Custo de Oportunidade",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
  ],
  cg_hfh_custos_variaveis: [
    {
      id: 1,
      formula: "cg_hfh_cv_energia_eletrica",
      nome: "Energia elétrica",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 2,
      formula: "cg_hfh_cv_consumo_equipamentos",
      nome: "Consumo de equipamentos",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 3,
      formula: "cg_hfh_cv_manutencao_maquinario",
      nome: "Manutenção de maquinário",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
  ],
  cg_hfh_variaveis_de_ctrl: [
    {
      id: 1,
      ordem: 1,
      formula: "cg_hfh_ctrl_consumo_energia_eletrica",
      nome: "Consumo de energia elétrica (Kw/t)",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 2,
      ordem: 2,
      formula: "cg_hfh_ctrl_consumo_equipamentos",
      nome: "Consumo de equipamentos (R$/t)",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 3,
      ordem: 3,
      formula: "cg_hfh_ctrl_encargos_sociais",
      nome: "Encargos Sociais",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 4,
      ordem: 4,
      formula: "cg_hfh_ctrl_beneficios",
      nome: "Benefícios",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 5,
      ordem: 5,
      formula: "cg_hfh_ctrl_instalacoes",
      nome: "Instalações",
      valor: 0,
      filters: ["currency"],
      dependentes: [
        "cg_hfh_cf_depreciacao_instalacoes",
        "cg_hfh_cf_manutencao_instalacoes",
        "cg_hfh_cf_depreciacao_maquinario",
        "cg_hfh_cf_seguros",
        "cg_hfh_cf_custo_oportunidade",
      ],
    },
    {
      id: 6,
      ordem: 6,
      formula: "cg_hfh_ctrl_periodo_depreciacao_obra_civil",
      nome: "Periodo de depreciação da obra civil",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 7,
      ordem: 7,
      formula: "cg_hfh_ctrl_fator_manutencao_obra_civil",
      nome: "Fator de manutenção do maquinário",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 8,
      ordem: 8,
      formula: "cg_hfh_ctrl_remuneracao_do_capital",
      nome: "Remuneração do capital",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 9,
      ordem: 9,
      formula: "cg_hfh_ctrl_seguros",
      nome: "Seguros",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 10,
      ordem: 10,
      formula: "cg_hfh_ctrl_giro",
      nome: "Giro",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 11,
      ordem: 11,
      formula: "cg_hfh_ctrl_capacidade_estatica",
      nome: "Capacidade Estática",
      valor: 0,
      filters: ["point"],

      dependentes: [
        "cg_hfh_carregar_tbl_de_recursos",
        "cg_hfh_ctrl_giro",
        "cg_hfh_ctrl_instalacoes",
      ],
    },
    {
      id: 12,
      ordem: 12,
      formula: "cg_hfh_ctrl_margem_de_lucro",
      nome: "margem de lucro",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 13,
      ordem: 13,
      formula: "cg_hfh_ctrl_tarifa_limpa",
      nome: "Tarifa Limpa",
      valor: 0,
      filters: ["currency"],
      dependentes: [
        "cg_hfh_ctrl_lucro",
        "cg_hfh_ctrl_tributos",
        "cg_hfh_ctrl_tarifa",
      ],
    },
    {
      id: 14,
      ordem: 14,
      formula: "cg_hfh_ctrl_lucro",
      nome: "Lucro",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 15,
      ordem: 15,
      formula: "cg_hfh_ctrl_tributos",
      nome: "Tributos",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 16,
      ordem: 16,
      formula: "cg_hfh_ctrl_tarifa",
      nome: "Tarifa",
      valor: 0,
      filters: ["currency"],
      dependentes: [],
    },
    {
      id: 17,
      ordem: 17,
      formula: "cg_hfh_ctrl_disponibilidade_dos_equipamentos",
      nome: "Disponibilidade dos equipamentos",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 18,
      ordem: 18,
      formula: "cg_hfh_ctrl_disponibilidade_de_barcarcas_no_cais",
      nome: "Disponibilidade de barcaças no cais",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
    {
      id: 19,
      ordem: 19,
      formula: "cg_hfh_ctrl_horas_funcionamento_diario",
      nome: "Horas de Funcionamento diário",
      valor: 0,
      filters: ["point"],
      dependentes: [],
    },
    {
      id: 20,
      ordem: 20,
      formula: "cg_hfh_ctrl_parada_para_manutencao",
      nome: "Paradas para manutenção (mensal)",
      valor: 0,
      filters: ["percent"],
      dependentes: [],
    },
  ],
};
const getters = {
  cg_hfh_guindaste_40t: (state, getters) => (item) => {
    var ve_transbordo_medio_por_hora = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_transbordo_medio_por_hora"
    ).valor;

    item.fator = ve_transbordo_medio_por_hora / 112.5;

    item.quantidade = Math.round(item.fator);
    item.valor_total = item.quantidade * item.valor;
    item.depreciacao = item.valor_total / item.periodo_depreciacao || 0;
    return item;
  },
  cg_hfh_armazem_fechado: (state, getters) => (item) => {
    var capacidade_estatica = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_capacidade_estatica"
    ).valor;

    item.quantidade = Math.round(2 * (capacidade_estatica / 3));
    item.total = item.quantidade * item.valor;

    return item;
  },
  cg_hfh_calcular_quantidade_e_depreciacao: (state, getters) => (item) => {
    if (!item.formula) {
      //Calculo da quantidade
      var movimentacao = getters.cg_hfh_getVar(
        "cg_hfh_variaveis_de_entrada",
        "cg_hfh_ve_movimentacao"
      ).valor;
      item.quantidade = Math.round(movimentacao * item.fator);
      item.valor_total = item.quantidade * item.valor;
      item.depreciacao = item.valor_total / item.periodo_depreciacao || 0;
      return item;
    } else {
      return getters[item.formula](item);
    }
  },
  cg_hfh_calcular_total_e_quantidade_recursos: (state, getters) => (item) => {
    if (!item.formula) {
      item.total = item.quantidade * item.valor;
      return item;
    } else {
      return getters[item.formula](item);
    }
  },
  cg_hfh_eqt_total_maquinario: (state, getters) => {
    var total = 0;
    getters.cg_hfh_equipamentos_de_transbordo.forEach(
      (item) => (total += item.valor_total)
    );
    return total;
  },
  cg_hfh_rec_total_unitario_valores: (state, getters) => {
    var total = 0;

    getters.cg_hfh_tbl_recursos.forEach((item) => (total += item.valor));
    return total;
  },
  cg_hfh_rec_total_recursos: (state, getters) => {
    var total = 0;

    getters.cg_hfh_tbl_recursos.forEach((item) => {
      total += item.total;
    });

    return total;
  },
  cg_hfh_eqt_total_depreciacao: (state, getters) => {
    var total = 0;
    getters.cg_hfh_equipamentos_de_transbordo.forEach(
      (item) => (total += item.depreciacao)
    );
    return total;
  },
  cg_hfh_equipamentos_de_transbordo: (state) =>
    state.cg_hfh_equipamentos_de_transbordo,
  cg_hfh_equipamentos: (state) => state.cg_hfh_equipamentos,
  cg_hfh_recursos: (state) => state.cg_hfh_recursos,
  cg_hfh_tbl_recursos: (state) => state.cg_hfh_tbl_recursos,
  cg_hfh_variaveis_de_entrada: (state) => state.cg_hfh_variaveis_de_entrada,
  cg_hfh_variaveis_de_ctrl: (state) => state.cg_hfh_variaveis_de_ctrl,
  cg_hfh_custos_variaveis: (state) => state.cg_hfh_custos_variaveis,
  cg_hfh_custos_fixos: (state) => state.cg_hfh_custos_fixos,
  cg_hfh_cv_total: (state, getters) => {
    var total = 0;
    getters.cg_hfh_custos_variaveis.forEach((item) => {
      total += item.valor;
    });
    return total;
  },
  cg_hfh_cf_total: (state, getters) => {
    var total = 0;
    getters.cg_hfh_custos_fixos.forEach((item) => {
      total += item.valor;
    });
    return total;
  },
  cg_hfh_getVar: (state) => (grupo, formula) => {
    return state[grupo].find((item) => item.formula === formula);
  },
};
const mutations = {
  cg_hfh_setVariavelDeEntrada(state, newItem) {
    var indexOfItem = 0;
    var el = state.cg_hfh_variaveis_de_entrada.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });
    this._vm.$set(state.cg_hfh_variaveis_de_entrada, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
  cg_hfh_setCustosVariaveis(state, newItem) {
    var indexOfItem = 0;
    var el = state.cg_hfh_custos_variaveis.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });
    this._vm.$set(state.cg_hfh_custos_variaveis, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
  cg_hfh_setVariaveisControle(state, newItem) {
    var indexOfItem = 0;
    var el = state.cg_hfh_variaveis_de_ctrl.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });
    this._vm.$set(state.cg_hfh_variaveis_de_ctrl, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
  cg_hfh_setCustosFixos(state, newItem) {
    var indexOfItem = 0;
    var el = state.cg_hfh_custos_fixos.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });
    this._vm.$set(state.cg_hfh_custos_fixos, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
  cg_hfh_setEquipamentosDeTransbordo(state, newItem) {
    state.cg_hfh_equipamentos_de_transbordo = newItem;
  },
  cg_hfh_setTblRecursos(state, newItem) {
    state.cg_hfh_tbl_recursos = newItem;
  },
};
const actions = {
  cg_hfh_ve_transbordo_medio_por_hora: (
    { commit, getters, dispatch },
    newValue
  ) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_transbordo_medio_por_hora"
    );

    obj.valor = newValue || 225;

    commit("cg_hfh_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ve_tempo_medio_de_armazenagem: (
    { commit, getters, dispatch },
    newValue
  ) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_tempo_medio_de_armazenagem"
    );

    obj.valor = newValue || 15.43;

    commit("cg_hfh_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ve_movimentacao: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_movimentacao"
    );

    obj.valor = Number(newValue) || 874800;

    commit("cg_hfh_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ve_tarifa_energia: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_tarifa_energia"
    );

    obj.valor = newValue || 0.3101478;

    commit("cg_hfh_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ve_numero_de_funcionarios: (
    { commit, getters, dispatch },
    newValue
  ) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_numero_de_funcionarios"
    );

    obj.valor = newValue || 200;

    commit("cg_hfh_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ve_salario_medio: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_salario_medio"
    );

    obj.valor = newValue || 1496.43;

    commit("cg_hfh_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_cv_energia_eletrica: ({ commit, getters, dispatch }) => {
    var movimentacao = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_movimentacao"
    ).valor;
    var consumo_energia_eletrica = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_consumo_energia_eletrica"
    ).valor;

    var tarifa_energia = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_tarifa_energia"
    ).valor;

    var formula = movimentacao * consumo_energia_eletrica * tarifa_energia;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_custos_variaveis",
      "cg_hfh_cv_energia_eletrica"
    );

    obj.valor = Number(formula) || 201596.0;

    commit("cg_hfh_setCustosVariaveis", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_cv_consumo_equipamentos: ({ commit, getters, dispatch }) => {
    var movimentacao = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_movimentacao"
    ).valor;

    var consumo_equipamentos = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_consumo_equipamentos"
    ).valor;
    var formula = movimentacao * consumo_equipamentos;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_custos_variaveis",
      "cg_hfh_cv_consumo_equipamentos"
    );

    obj.valor = Number(formula) || 751969;
    commit("cg_hfh_setCustosVariaveis", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_cv_manutencao_maquinario: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_custos_variaveis",
      "cg_hfh_cv_manutencao_maquinario"
    );

    obj.valor = 233164.3648;

    commit("cg_hfh_setCustosVariaveis", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_consumo_energia_eletrica: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_consumo_energia_eletrica"
    );

    obj.valor = 0.65;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_consumo_equipamentos: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_consumo_equipamentos"
    );

    obj.valor = 0.7519687;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_encargos_sociais: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_encargos_sociais"
    );

    obj.valor = 99 / 100;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_beneficios: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_beneficios"
    );

    obj.valor = Math.round((1 / 3) * 100) / 100;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_instalacoes: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_instalacoes"
    );

    obj.valor = getters.cg_hfh_rec_total_recursos || 62775936;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_periodo_depreciacao_obra_civil: ({
    commit,
    getters,
    dispatch,
  }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_periodo_depreciacao_obra_civil"
    );

    obj.valor = 40;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_fator_manutencao_obra_civil: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_fator_manutencao_obra_civil"
    );

    obj.valor = 0.5 / 100;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_remuneracao_do_capital: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_remuneracao_do_capital"
    );

    obj.valor = 10 / 100;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_seguros: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_seguros"
    );

    obj.valor = 0.25 / 100;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_giro: ({ commit, getters, dispatch }) => {
    var movimentacao = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_movimentacao"
    ).valor;

    var capacidade_estatica = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_capacidade_estatica"
    ).valor;

    var formula = movimentacao / capacidade_estatica;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_giro"
    );

    obj.valor = Math.round(Number(formula)) || 18;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_capacidade_estatica: ({ commit, getters, dispatch }) => {
    var transbordo_medio_por_hora = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_transbordo_medio_por_hora"
    ).valor;

    var disponibilidade_dos_equipamentos = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_disponibilidade_dos_equipamentos"
    ).valor;

    var disponibilidade_de_barcarcas_no_cais = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_disponibilidade_de_barcarcas_no_cais"
    ).valor;

    var tempo_medio_de_armazenagem = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_tempo_medio_de_armazenagem"
    ).valor;

    var horas_funcionamento_diario = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_horas_funcionamento_diario"
    ).valor;

    var parada_para_manutencao = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_parada_para_manutencao"
    ).valor;

    var formula =
      transbordo_medio_por_hora *
      disponibilidade_dos_equipamentos *
      disponibilidade_de_barcarcas_no_cais *
      tempo_medio_de_armazenagem *
      horas_funcionamento_diario *
      (1 - parada_para_manutencao);

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_capacidade_estatica"
    );
    obj.valor = Math.round(formula) || 33750;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_margem_de_lucro: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_margem_de_lucro"
    );
    obj.valor = 0;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_tarifa_limpa: ({ commit, getters, dispatch }) => {
    var movimentacao = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_movimentacao"
    ).valor;

    var formula =
      (getters.cg_hfh_cf_total + getters.cg_hfh_cv_total) / movimentacao;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_tarifa_limpa"
    );

    obj.valor = Math.round(Number(formula) * 100) / 100 || 24.45;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_lucro: ({ commit, getters, dispatch }) => {
    var margem_de_lucro = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_margem_de_lucro"
    ).valor;
    var tarifa_limpa = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_tarifa_limpa"
    ).valor;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_lucro"
    );
    obj.valor = margem_de_lucro * tarifa_limpa || 0;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_tributos: ({ commit, getters, dispatch }) => {
    var tarifa_limpa = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_tarifa_limpa"
    ).valor;
    var lucro = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_lucro"
    ).valor;

    var total_tributacao = 15.5 / 100;

    var formula = total_tributacao * (tarifa_limpa + lucro);

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_tributos"
    );
    obj.valor = Number(formula) || 3.78;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_tarifa: ({ commit, getters, dispatch }) => {
    var tarifa_limpa = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_tarifa_limpa"
    ).valor;
    var lucro = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_lucro"
    ).valor;
    var tributos = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_tributos"
    ).valor;

    var formula = tarifa_limpa + lucro + tributos;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_tarifa"
    );

    obj.valor = Number(formula) || 28.22;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_disponibilidade_dos_equipamentos: ({
    commit,
    getters,
    dispatch,
  }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_disponibilidade_dos_equipamentos"
    );
    obj.valor = 90 / 100;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_disponibilidade_de_barcarcas_no_cais: ({
    commit,
    getters,
    dispatch,
  }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_disponibilidade_de_barcarcas_no_cais"
    );
    obj.valor = 50 / 100;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_horas_funcionamento_diario: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_horas_funcionamento_diario"
    );
    obj.valor = 24;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_ctrl_parada_para_manutencao: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_parada_para_manutencao"
    );
    obj.valor = 10 / 100;

    commit("cg_hfh_setVariaveisControle", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_carregar_equipamentos_de_transbordo: ({ commit, getters }) => {
    var lista = [];
    getters.cg_hfh_equipamentos.forEach((item) => {
      lista.push(getters.cg_hfh_calcular_quantidade_e_depreciacao(item));
    });
    commit("cg_hfh_setEquipamentosDeTransbordo", lista);
  },
  cg_hfh_carregar_tbl_de_recursos: ({ commit, getters }) => {
    var lista = [];

    getters.cg_hfh_recursos.forEach((item) => {
      lista.push(getters.cg_hfh_calcular_total_e_quantidade_recursos(item));
    });
    commit("cg_hfh_setTblRecursos", lista);
  },
  cg_hfh_cf_salarios: ({ commit, getters, dispatch }) => {
    var num_funcionarios = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_numero_de_funcionarios"
    ).valor;

    var salario_medio = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_ve_salario_medio"
    ).valor;

    var encargos_sociais = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_encargos_sociais"
    ).valor;

    var beneficios = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_beneficios"
    ).valor;

    var formula =
      num_funcionarios *
      salario_medio *
      (1 + encargos_sociais + beneficios) *
      13;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_custos_fixos",
      "cg_hfh_cf_salarios"
    );

    obj.valor = Number(formula) || 9039435;

    commit("cg_hfh_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_cf_depreciacao_instalacoes: ({ commit, getters, dispatch }) => {
    var instalacoes = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_instalacoes"
    ).valor;

    var periodo_depreciacao_obra_civil = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_periodo_depreciacao_obra_civil"
    ).valor;

    var formula = instalacoes / periodo_depreciacao_obra_civil;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_custos_fixos",
      "cg_hfh_cf_depreciacao_instalacoes"
    );

    obj.valor = Number(formula) || 1626233;

    commit("cg_hfh_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_cf_manutencao_instalacoes: ({ commit, getters, dispatch }) => {
    var instalacoes = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_instalacoes"
    ).valor;

    var fator_manutencao_obra_civil = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_fator_manutencao_obra_civil"
    ).valor;

    var formula = instalacoes * fator_manutencao_obra_civil;

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_custos_fixos",
      "cg_hfh_cf_manutencao_instalacoes"
    );

    obj.valor = Number(formula) || 325247;

    commit("cg_hfh_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_cf_depreciacao_maquinario: ({ commit, getters, dispatch }) => {
    var obj = getters.cg_hfh_getVar(
      "cg_hfh_custos_fixos",
      "cg_hfh_cf_depreciacao_maquinario"
    );

    obj.valor = getters.cg_hfh_eqt_total_depreciacao || 2032243;

    commit("cg_hfh_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_cf_seguros: ({ commit, getters, dispatch }) => {
    var instalacoes = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_instalacoes"
    ).valor;

    var seguros = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_seguros"
    ).valor;

    var formula = seguros * (getters.cg_hfh_eqt_total_maquinario + instalacoes);

    var obj = getters.cg_hfh_getVar("cg_hfh_custos_fixos", "cg_hfh_cf_seguros");

    obj.valor = Number(formula) || 249640;

    commit("cg_hfh_setCustosFixos", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  cg_hfh_cf_custo_oportunidade: ({ commit, getters, dispatch }) => {
    var instalacoes = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_instalacoes"
    ).valor;

    var remuneracao_do_capital = getters.cg_hfh_getVar(
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_ctrl_remuneracao_do_capital"
    ).valor;

    var formula =
      remuneracao_do_capital *
      (getters.cg_hfh_eqt_total_maquinario + instalacoes);

    var obj = getters.cg_hfh_getVar(
      "cg_hfh_custos_fixos",
      "cg_hfh_cf_custo_oportunidade"
    );
    obj.valor = Number(formula) || 325247;

    commit("cg_hfh_setCustosFixos", obj);

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
