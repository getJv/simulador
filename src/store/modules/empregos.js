const state = {
  /* emp_variaveis_saida: [
    {
      tipo: "OPEX",
      formula:""
      diretos: 10,
      indiretos: 20,
      efeito_renda: 30,
    },
  ], */
  emp_reais_constante: 26833542,
  emp_fatores: [
    {
      id: 1,
      formula: "setor_1_opex",
      tipo: "OPEX",
      nome: "Setor 1",
      valores: {
        diretos: 33,
        indiretos: 45,
        efeito_renda: 227,
      },
      dependentes: [],
    },
    {
      id: 2,
      formula: "setor_2_opex",
      tipo: "OPEX",
      nome: "Setor 2",
      valores: {
        diretos: 219,
        indiretos: 96,
        efeito_renda: 237,
      },
      dependentes: [],
    },
    {
      id: 3,
      formula: "setor_3_opex",
      tipo: "OPEX",
      nome: "Setor 3",
      valores: {
        diretos: 293,
        indiretos: 63,
        efeito_renda: 288,
      },
      dependentes: [],
    },
    {
      id: 4,
      formula: "setor_4_capex",
      tipo: "CAPEX",
      nome: "Setor 4",
      valores: {
        diretos: 176,
        indiretos: 83,
        efeito_renda: 271,
      },
      dependentes: [],
    },
  ],

  emp_variaveis_de_entrada: [
    {
      id: 1,
      ordem: 1,
      formula: "periodo_da_construcao_capex",
      tipo: "CAPEX",
      icone: "mdi-av-timer",
      nome: "Período da Construção - CAPEX (Meses)",
      valor: 0,
      decimalPrecision: 0,
      filters: [],
      dependentes: [],
    },
    {
      id: 2,
      ordem: 2,
      formula: "investimento_na_construcao_capex",
      tipo: "CAPEX",
      icone: "mdi-currency-usd-circle-outline",
      nome: "Investimento na Construção - CAPEX (R$)",
      valor: 0,
      decimalPrecision: 2,
      filters: [],
      dependentes: [],
    },
    {
      id: 3,
      ordem: 3,
      formula: "periodo_da_operacao_opex",
      tipo: "OPEX",
      icone: "mdi-av-timer",
      nome: "Período da Operacão - OPEX (Meses)",
      valor: 0,
      decimalPrecision: 0,
      filters: [],
      dependentes: [],
    },
    {
      id: 4,
      ordem: 4,
      formula: "investimento_na_operacao_opex",
      tipo: "OPEX",
      icone: "mdi-currency-usd-circle-outline",
      nome: "Investimento na Operação - OPEX (R$)",
      valor: 0,
      decimalPrecision: 2,
      filters: [],
      dependentes: [],
    },
  ],
};
const getters = {
  emp_variaveis_de_entrada: (state) => state.emp_variaveis_de_entrada,
  emp_reais_constante: (state) => state.emp_reais_constante,
  emp_getVar: (state) => (grupo, formula) => {
    return state[grupo].find((item) => item.formula === formula);
  },
  emp_capex_diretos: (state, getters) => {
    var setor4_diretos_capex = getters.emp_getVar(
      "emp_fatores",
      "setor_4_capex"
    ).valores.diretos;

    var periodo_da_construcao_capex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "periodo_da_construcao_capex"
    ).valor;

    var investimento_na_construcao_capex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "investimento_na_construcao_capex"
    ).valor;

    var formula =
      ((investimento_na_construcao_capex / getters.emp_reais_constante) *
        setor4_diretos_capex) /
      periodo_da_construcao_capex;

    return Math.round(formula) || 0;
  },
  emp_capex_indiretos: (state, getters) => {
    var setor4_diretos_capex = getters.emp_getVar(
      "emp_fatores",
      "setor_4_capex"
    ).valores.indiretos;

    var periodo_da_construcao_capex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "periodo_da_construcao_capex"
    ).valor;

    var investimento_na_construcao_capex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "investimento_na_construcao_capex"
    ).valor;

    var formula =
      ((investimento_na_construcao_capex / getters.emp_reais_constante) *
        setor4_diretos_capex) /
      periodo_da_construcao_capex;

    return Math.round(formula) || 0;
  },
  emp_capex_efeito_renda: (state, getters) => {
    var setor4_diretos_capex = getters.emp_getVar(
      "emp_fatores",
      "setor_4_capex"
    ).valores.efeito_renda;

    var periodo_da_construcao_capex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "periodo_da_construcao_capex"
    ).valor;

    var investimento_na_construcao_capex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "investimento_na_construcao_capex"
    ).valor;

    var formula =
      ((investimento_na_construcao_capex / getters.emp_reais_constante) *
        setor4_diretos_capex) /
      periodo_da_construcao_capex;

    return Math.round(formula) || 0;
  },

  emp_opex_diretos: (state, getters) => {
    var setores_opex = state.emp_fatores.filter((item) => item.tipo == "OPEX");

    var media_setor_diretos_opex =
      setores_opex.reduce((acc, item) => acc + item.valores.diretos, 0) /
      setores_opex.length;

    var periodo_da_operacao_opex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "periodo_da_operacao_opex"
    ).valor;

    var investimento_na_operacao_opex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "investimento_na_operacao_opex"
    ).valor;

    var formula =
      ((investimento_na_operacao_opex / getters.emp_reais_constante) *
        media_setor_diretos_opex) /
      periodo_da_operacao_opex;

    return Math.round(formula) || 0;
  },
  emp_opex_indiretos: (state, getters) => {
    var setores_opex = state.emp_fatores.filter((item) => item.tipo == "OPEX");

    var media_setor_diretos_opex =
      setores_opex.reduce((acc, item) => acc + item.valores.indiretos, 0) /
      setores_opex.length;

    var periodo_da_operacao_opex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "periodo_da_operacao_opex"
    ).valor;

    var investimento_na_operacao_opex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "investimento_na_operacao_opex"
    ).valor;

    var formula =
      ((investimento_na_operacao_opex / getters.emp_reais_constante) *
        media_setor_diretos_opex) /
      periodo_da_operacao_opex;

    return Math.round(formula) || 0;
  },
  emp_opex_efeito_renda: (state, getters) => {
    var setores_opex = state.emp_fatores.filter((item) => item.tipo == "OPEX");

    var media_setor_diretos_opex =
      setores_opex.reduce((acc, item) => acc + item.valores.efeito_renda, 0) /
      setores_opex.length;

    var periodo_da_operacao_opex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "periodo_da_operacao_opex"
    ).valor;

    var investimento_na_operacao_opex = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "investimento_na_operacao_opex"
    ).valor;

    var formula =
      ((investimento_na_operacao_opex / getters.emp_reais_constante) *
        media_setor_diretos_opex) /
      periodo_da_operacao_opex;

    return Math.round(formula) || 0;
  },
  emp_result: (state, getters) => {
    return [
      {
        tipo: "OPEX",
        diretos: getters.emp_opex_diretos,
        indiretos: getters.emp_opex_indiretos,
        efeito_renda: getters.emp_opex_efeito_renda,
      },
      {
        tipo: "CAPEX",
        diretos: getters.emp_capex_diretos,
        indiretos: getters.emp_capex_indiretos,
        efeito_renda: getters.emp_capex_efeito_renda,
      },
    ];
  },
};
const actions = {
  periodo_da_construcao_capex: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "periodo_da_construcao_capex"
    );

    obj.valor = newValue || 1;

    commit("emp_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  investimento_na_construcao_capex: (
    { commit, getters, dispatch },
    newValue
  ) => {
    var obj = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "investimento_na_construcao_capex"
    );

    obj.valor = newValue || 1;

    commit("emp_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  investimento_na_operacao_opex: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "investimento_na_operacao_opex"
    );

    obj.valor = newValue || 1;

    commit("emp_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
  periodo_da_operacao_opex: ({ commit, getters, dispatch }, newValue) => {
    var obj = getters.emp_getVar(
      "emp_variaveis_de_entrada",
      "periodo_da_operacao_opex"
    );

    obj.valor = newValue || 1;

    commit("emp_setVariavelDeEntrada", obj);

    obj.dependentes.forEach((action) => {
      dispatch(action);
    });
  },
};
const mutations = {
  emp_setVariavelDeEntrada(state, newItem) {
    var indexOfItem = 0;
    var el = state.emp_variaveis_de_entrada.find((item) => {
      if (item.formula == newItem.formula) {
        return item;
      }
      indexOfItem = indexOfItem + 1;
    });

    this._vm.$set(state.emp_variaveis_de_entrada, indexOfItem, {
      id: el.id,
      ordem: el.ordem,
      icone: el.icone,
      tipo: el.tipo,
      formula: el.formula,
      nome: el.nome,
      valor: newItem.valor,
      decimalPrecision: el.decimalPrecision,
      filters: el.filters,
      dependentes: el.dependentes,
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
