import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    debug: true,
    custo_fixo: [
      {
        id: 1,
        formula: 'cf_salarios',
        nome: 'Salarios',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
      {
        id: 2,
        formula: 'cf_depreciacao_das_instalacoes',
        nome: 'Depreciação das instalações',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
      {
        id: 3,
        formula: 'cf_manutecao_das_instalacoes',
        nome: 'Manutenção das Instalções',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
      {
        id: 4,
        formula: 'cf_depreciacao_maquinario',
        nome: 'Depreciação do maquinário',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
      {
        id: 5,
        formula: 'cf_seguros',
        nome: 'Seguros',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
      {
        id: 6,
        formula: 'cf_custo_de_oportunidade',
        nome: 'Custo de Oportunidade',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
    ],
    custo_variavel: [
      {
        id: 1,
        formula: 'cv_mao_de_obra',
        nome: 'Mão de obra',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
      {
        id: 2,
        formula: 'cv_energia_eletrica',
        nome: 'Energia elétrica',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
      {
        id: 3,
        formula: 'cv_manutencao_maquinario',
        nome: 'Manutenção de maquinário',
        valor: 0,
        epl: true,
        currency: true,
        dependentes: [],
      },
    ],

    equipamento_transbordo: [
      {
        id: 1,
        quantidade: 1,
        item: 'Balança rodoviária',
        valor: 213160,
        valor_corrigido: 227186,
        periodo_depreciacao: 20,
        depreciacao: 11359,
      },
      {
        id: 2,
        quantidade: 1,
        item: 'Balança Rodo Ferroviária',
        valor: 260000,
        valor_corrigido: 277108,
        periodo_depreciacao: 20,
        depreciacao: 13855,
      },
      {
        id: 3,
        quantidade: 1,
        item: 'Tracionador de Vagão',
        valor: 200000,
        valor_corrigido: 213160,
        periodo_depreciacao: 20,
        depreciacao: 10658,
      },
      {
        id: 4,
        quantidade: 2,
        item: 'Tombador',
        valor: 600000,
        valor_corrigido: 639480,
        periodo_depreciacao: 20,
        depreciacao: 31974,
        dependentes: ['ctrl_tombamento_medio_por_hora'],
      },
      {
        id: 5,
        quantidade: 2,
        item: 'Moega',
        valor: 280000,
        valor_corrigido: 298424,
        periodo_depreciacao: 20,
        depreciacao: 14921,
      },
      {
        id: 6,
        quantidade: 1,
        item: 'Tulha',
        valor: 280000,
        valor_corrigido: 298424,
        periodo_depreciacao: 20,
        depreciacao: 14921,
      },
      {
        id: 7,
        quantidade: 3,
        item: 'Silo Pulmão',
        valor: 202500,
        valor_corrigido: 215825,
        periodo_depreciacao: 25,
        depreciacao: 8633,
      },
      {
        id: 8,
        quantidade: 36000,
        item: 'Silos (em t Cap. Estática)',
        valor: 4860000,
        valor_corrigido: 5179788,
        periodo_depreciacao: 25,
        depreciacao: 207192,
      },
      {
        id: 9,
        quantidade: 200,
        item: 'Transportadores (em m)',
        valor: 945000,
        valor_corrigido: 1007181,
        periodo_depreciacao: 20,
        depreciacao: 50359,
      },
      {
        id: 10,
        quantidade: 50,
        item: 'Transportadores de Corrente (em m)',
        valor: 540000,
        valor_corrigido: 575532,
        periodo_depreciacao: 20,
        depreciacao: 28777,
      },
      {
        id: 11,
        quantidade: 200,
        item: 'EleVadores (em m)',
        valor: 2295000,
        valor_corrigido: 2446011,
        periodo_depreciacao: 20,
        depreciacao: 122301,
      },
    ],

    variaveis_de_controle: [
      {
        id: 1,
        ordem: 1,
        formula: 'ctrl_capacidade_estatica',
        nome: 'Capacidade estatica (toneladas)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_instalacoes', 'ctrl_giro'],
      },
      {
        id: 2,
        ordem: 19,
        formula: 'ctrl_tombamento_medio_por_hora',
        nome: 'Tombamento médio por hora (toneladas)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_movimentacao'],
      },
      {
        id: 3,
        ordem: 2,
        formula: 'ctrl_disponibilidade_por_tombador',
        nome: 'Disponibilidade por tombador',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_tombamento_medio_por_hora'],
      },
      {
        id: 4,
        ordem: 3,
        formula: 'ctrl_disponibilidade_de_caminhoes_no_patio',
        nome: 'Disponibilidade de caminhões no pátio',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_tombamento_medio_por_hora'],
      },
      {
        id: 5,
        ordem: 23,
        formula: 'ctrl_tempo_medio_de_armazenagem',
        nome: 'Tempo médio de armazenagem (dias)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: [],
      },
      {
        id: 6,
        ordem: 4,
        formula: 'ctrl_horas_de_funcionamento_diario',
        nome: 'Horas de funcionamento diário (horas)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_horas_de_funcionamento_mensal'],
      },
      {
        id: 7,
        ordem: 5,
        formula: 'ctrl_paradas_para_manutencao_mensal',
        nome: 'Paradas para manutenção (mensal)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_horas_de_funcionamento_mensal'],
      },
      {
        id: 8,
        ordem: 20,
        formula: 'ctrl_horas_de_funcionamento_mensal',
        nome: 'Horas de funcionamento mensal',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_movimentacao'],
      },
      {
        id: 9,
        ordem: 6,
        formula: 'ctrl_meses_de_safra_no_ano',
        nome: 'Meses de safra no ano (meses)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_movimentacao'],
      },
      {
        id: 10,
        ordem: 7,
        formula: 'ctrl_carga_na_safra',
        nome: 'Carga na safra',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_movimentacao'],
      },
      {
        id: 11,
        ordem: 8,
        formula: 'ctrl_carga_na_entre_safra',
        nome: 'Carga na entre safra',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_movimentacao'],
      },
      {
        id: 12,
        ordem: 22,
        formula: 'ctrl_giro',
        nome: 'Giro (adimensional)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['ctrl_tempo_medio_de_armazenagem'],
      },
      {
        id: 13,
        ordem: 21,
        formula: 'ctrl_movimentacao',
        nome: 'Movimentação (toneladas/ano)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: [
          'ctrl_giro',
          'ctrl_numero_funcionarios',
          'cv_energia_eletrica',
        ],
      },
      {
        id: 14,
        ordem: 24,
        formula: 'ctrl_tarifa_energia',
        nome: 'Tarifa de energia (R$/kWh)',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cv_energia_eletrica'],
      },
      {
        id: 15,
        ordem: 9,
        formula: 'ctrl_consumo_medio',
        nome: 'Consumo médio',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cv_energia_eletrica'],
      },
      {
        id: 16,
        ordem: 25,
        formula: 'ctrl_numero_funcionarios',
        nome: 'Número de funcionários',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cf_salarios'],
      },
      {
        id: 17,
        ordem: 10,
        formula: 'ctrl_salario_medio_do_setor',
        nome: 'Salário médio do setor',
        valor: 0,
        currency: true,
        epl: true,
        dependentes: ['cf_salarios'],
      },
      {
        id: 18,
        ordem: 11,
        formula: 'ctrl_encargos_sociais',
        nome: 'Encargos Sociais',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cf_salarios'],
      },
      {
        id: 19,
        ordem: 12,
        formula: 'ctrl_beneficios',
        nome: 'Beneficios',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cf_salarios'],
      },
      {
        id: 20,
        ordem: 26,
        formula: 'ctrl_instalacoes',
        nome: 'Instalações',
        valor: 0,
        currency: true,
        epl: true,
        dependentes: [
          'cf_depreciacao_das_instalacoes',
          'cf_manutecao_das_instalacoes',

          'cf_seguros',
          'cf_custo_de_oportunidade',
        ],
      },
      {
        id: 21,
        ordem: 13,
        formula: 'ctrl_periodo_depreciacao_obra_civil',
        nome: 'Período de Depreciação Obra Civil',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cf_depreciacao_das_instalacoes'],
      },
      {
        id: 22,
        ordem: 14,
        formula: 'ctrl_fator_manutencao_obra_civil',
        nome: 'Fator de Manutenção da Obra Civil',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cf_manutecao_das_instalacoes'],
      },
      {
        id: 23,
        ordem: 15,
        formula: 'ctrl_fator_manutencao_do_maquinario',
        nome: 'Fator de Manutenção do maquinário',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cv_manutencao_maquinario'],
      },
      {
        id: 24,
        ordem: 16,
        formula: 'ctrl_remuneracao_do_capital',
        nome: 'Remuneração do capital',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cf_custo_de_oportunidade'],
      },
      {
        id: 25,
        ordem: 17,
        formula: 'ctrl_seguros',
        nome: 'Seguros',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: ['cf_seguros'],
      },
      {
        id: 26,
        ordem: 18,
        formula: 'ctrl_margem_de_lucro',
        nome: 'Margem de lucro',
        valor: 0,
        currency: false,
        epl: true,
        dependentes: [],
      },
    ],

    inflacao: {
      periodo: 'jun/13 - jun/14',
      valor: 1.0658,
    },

    equipamentos_instalacoes: [
      {
        id: 1,
        item: 'Balança Rodoviária',
        valor: 200000,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 2,
        item: 'Balança Rodoferroviária',
        valor: 260000,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 3,
        item: 'Tracionador de vagão',
        valor: 200000,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 4,
        item: 'Tombador de caminhão',
        valor: 300000,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 5,
        item: 'Moega',
        valor: 140000,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 6,
        item: 'Silo pulmão',
        valor: 67500,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 7,
        item: 'Silo',
        valor: 135,
        obs: 'R$/ton',
        quantidade: 0,
        total: 0,
      },
      {
        id: 8,
        item: 'Transportador',
        valor: 4725,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 9,
        item: 'Transportador de corrente',
        valor: 10800,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 10,
        item: 'Elevador',
        valor: 11475,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 11,
        item: 'Instalações(obras civis)',
        valor: 500,
        obs: 'R$/ton',
        quantidade: 0,
        total: 0,
      },
      {
        id: 12,
        item: 'Acessos rodoviários',
        valor: 1151019.98,
        obs: 'R$/km',
        quantidade: 1,
        total: 1151019.98,
      },
      {
        id: 13,
        item: 'Acessos ferroviários',
        valor: 5371199.42,
        obs: 'R$/km',
        quantidade: 3,
        total: 16113598.26,
      },
      {
        id: 14,
        item: 'Sugadores',
        valor: 800000,
        obs: '',
        quantidade: 0,
        total: 0,
      },
      {
        id: 15,
        item: 'Energia',
        valor: 0.29,
        obs: 'R$/kw',
        quantidade: 0,
        total: 0,
      },
      {
        id: 16,
        item: 'Cap. méd tombador/hora',
        valor: 240,
        obs: '',
        quantidade: 0,
        total: 0,
      },
    ],

    tributos: [
      {
        nome: 'pis',
        valor: 0.03,
      },
      {
        nome: 'cofins',
        valor: 0.0065,
      },
      {
        nome: 'csll',
        valor: 0.018,
      },
      {
        nome: 'ir',
        valor: 0.05,
      },
      {
        nome: 'iss',
        valor: 0.05,
      },
    ],
  },
  getters: {
    log: state => text => {
      if (state.debug) console.log(text)
    },
    arredonda: () => valor => {
      return Math.round(valor * 100) / 100
    },

    custo_fixo: state => state.custo_fixo,
    custo_variavel: state => state.custo_variavel,
    variaveis_de_controle: state => state.variaveis_de_controle,

    cf_total_custo_fixo: (state, getters) => {
      var total = 0
      state.custo_fixo.forEach(item => {
        total += Number(item.valor)
      })

      return getters.arredonda(total)
    },

    cv_total_custo_variavel: (state, getters) => {
      var total = 0
      state.custo_variavel.forEach(item => {
        total += Number(item.valor)
      })

      return getters.arredonda(total)
    },

    getVariaveisControle: state => fieldName => {
      return state.variaveis_de_controle.find(
        item => item.formula === fieldName,
      )
    },
    getCustoFixo: state => fieldName => {
      return state.custo_fixo.find(item => item.formula === fieldName)
    },
    getCustoVariavel: state => fieldName => {
      return state.custo_variavel.find(item => item.formula === fieldName)
    },

    ctrl_tarifa_limpa: (state, getters) => {
      return (
        Math.round(
          ((getters.cv_total_custo_variavel + getters.cf_total_custo_fixo) /
            getters.getVariaveisControle('ctrl_movimentacao').valor) *
            100,
        ) / 100
      )
    },

    ctrl_lucro: (state, getters) => {
      return (
        getters.getVariaveisControle('ctrl_margem_de_lucro').valor *
        getters.ctrl_tarifa_limpa
      )
    },

    ctrl_tributos: (state, getters) => {
      return (
        Math.round(
          getters.ctrl_total_tributos *
            (getters.ctrl_lucro + getters.ctrl_tarifa_limpa) *
            1000,
        ) / 1000
      )
    },

    ctrl_tarifa: (state, getters) => {
      return (
        Math.round(
          (getters.ctrl_tributos +
            getters.ctrl_lucro +
            getters.ctrl_tarifa_limpa) *
            100,
        ) / 100
      )
    },

    ctrl_total_tributos: state => {
      var sum = 0
      state.tributos.forEach(item => {
        sum = sum + item.valor
      })

      return sum
    },

    eqt_total_valor_corrigido: state => {
      var sum = 0
      state.equipamento_transbordo.forEach(item => {
        sum = sum + item.valor_corrigido
      })

      return sum * (1 + 1 / 3)
    },
    eqt_total_depreciacao: state => {
      var sum = 0
      state.equipamento_transbordo.forEach(item => {
        sum = sum + item.depreciacao
      })

      return sum
    },
  },
  mutations: {
    addCustoFixo(state, newItem) {
      state.custo_fixo.push({
        id: state.custo_fixo.length + 1,
        formula: newItem.nome.toLowerCase().replace(' ', '-'),
        nome: newItem.nome,
        valor: newItem.valor,
        currency: false,
      })
    },

    removeCustoFixo(state, index) {
      state.custo_fixo.splice(index, 1)
    },

    custoFixoByFieldName(state, newItem) {
      var indexOfItem = 0
      var el = state.custo_fixo.find(item => {
        if (item.formula == newItem.formula) {
          return item
        }
        indexOfItem = indexOfItem + 1
      })

      Vue.set(state.custo_fixo, indexOfItem, {
        id: el.id,
        formula: el.formula || el.nome.toLowerCase().replace(' ', '-'),
        nome: el.nome,
        valor: newItem.valor,
        epl: el.epl || false,
        currency: el.currency,
        dependentes: el.dependentes,
      })
    },
    custoVariavelByFieldName(state, newItem) {
      var indexOfItem = 0
      var el = state.custo_variavel.find(item => {
        if (item.formula == newItem.formula) {
          return item
        }
        indexOfItem = indexOfItem + 1
      })

      Vue.set(state.custo_variavel, indexOfItem, {
        id: el.id,
        formula: el.formula || el.nome.toLowerCase().replace(' ', '-'),
        nome: el.nome,
        valor: newItem.valor,
        epl: el.epl || false,
        currency: el.currency,
        dependentes: el.dependentes,
      })
    },
    removeCustoVariavel(state, index) {
      state.custo_variavel.splice(index, 1)
    },

    addCustoVariavel(state, newItem) {
      state.custo_variavel.push({
        id: state.custo_variavel.length + 1,
        formula: newItem.nome.toLowerCase().replace(' ', '-'),
        nome: newItem.nome,
        valor: newItem.valor,
        currency: false,
      })
    },

    variaveisControleByFieldName(state, newItem) {
      var indexOfItem = 0
      var el = state.variaveis_de_controle.find(item => {
        if (item.formula == newItem.formula) {
          return item
        }
        indexOfItem = indexOfItem + 1
      })

      Vue.set(state.variaveis_de_controle, indexOfItem, {
        id: el.id,
        ordem: el.ordem,
        formula: el.formula || el.nome.toLowerCase().replace(' ', '-'),
        nome: el.nome,
        valor: newItem.valor,
        epl: el.epl || false,
        currency: el.currency,
        dependentes: el.dependentes,
      })
    },

    /* VERIFICAR SE PODE APAGAR
    //Não tratado ainda
    custo_variavel(state, newItem) {
      var el = state.custo_variavel.find(item => item.id == newItem.id)
      el.valor = newItem.valor || 0
    },
    variaveis_de_controle(state, newItem) {
      var el = state.variaveis_de_controle.find(item => item.id == newItem.id)
      el.valor = newItem.valor || 0
    }, */
  },
  actions: {
    ctrl_capacidade_estatica: ({ commit, getters, dispatch }, newValue) => {
      var obj = getters.getVariaveisControle('ctrl_capacidade_estatica')
      if (newValue) {
        obj.valor = newValue
      } else {
        obj.valor = 36000
      }
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_tombamento_medio_por_hora: ({ commit, state, getters, dispatch }) => {
      var result = Math.round(
        state.equipamento_transbordo[4].quantidade *
          40 *
          6 *
          getters.getVariaveisControle('ctrl_disponibilidade_por_tombador')
            .valor *
          getters.getVariaveisControle(
            'ctrl_disponibilidade_de_caminhoes_no_patio',
          ).valor,
      )

      var obj = getters.getVariaveisControle('ctrl_tombamento_medio_por_hora')
      obj.valor = result
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_disponibilidade_por_tombador: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle(
        'ctrl_disponibilidade_por_tombador',
      )
      obj.valor = 0.85
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_disponibilidade_de_caminhoes_no_patio: ({
      commit,
      getters,
      dispatch,
    }) => {
      var obj = getters.getVariaveisControle(
        'ctrl_disponibilidade_de_caminhoes_no_patio',
      )
      obj.valor = 0.9
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_tempo_medio_de_armazenagem: ({ commit, getters }) => {
      var obj = getters.getVariaveisControle('ctrl_tempo_medio_de_armazenagem')
      obj.valor = Math.round(
        365 / getters.getVariaveisControle('ctrl_giro').valor,
      )
      commit('variaveisControleByFieldName', obj)
    },
    ctrl_horas_de_funcionamento_diario: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle(
        'ctrl_horas_de_funcionamento_diario',
      )
      obj.valor = 24
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_paradas_para_manutencao_mensal: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle(
        'ctrl_paradas_para_manutencao_mensal',
      )
      obj.valor = 0.1
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_horas_de_funcionamento_mensal: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle(
        'ctrl_horas_de_funcionamento_mensal',
      )
      obj.valor =
        getters.getVariaveisControle('ctrl_horas_de_funcionamento_diario')
          .valor *
        30 *
        (1 -
          getters.getVariaveisControle('ctrl_paradas_para_manutencao_mensal')
            .valor)
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_meses_de_safra_no_ano: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_meses_de_safra_no_ano')
      obj.valor = 6
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_carga_na_safra: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_carga_na_safra')
      obj.valor = 1.0
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_carga_na_entre_safra: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_carga_na_entre_safra')
      obj.valor = 0.25
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_giro: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_giro')
      obj.valor = getters.arredonda(
        getters.getVariaveisControle('ctrl_movimentacao').valor /
          getters.getVariaveisControle('ctrl_capacidade_estatica').valor,
      )
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_movimentacao: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_movimentacao')
      obj.valor =
        getters.getVariaveisControle('ctrl_tombamento_medio_por_hora').valor *
          getters.getVariaveisControle('ctrl_horas_de_funcionamento_mensal')
            .valor *
          getters.getVariaveisControle('ctrl_meses_de_safra_no_ano').valor *
          getters.getVariaveisControle('ctrl_carga_na_safra').valor +
        getters.getVariaveisControle('ctrl_tombamento_medio_por_hora').valor *
          getters.getVariaveisControle('ctrl_horas_de_funcionamento_mensal')
            .valor *
          (12 -
            getters.getVariaveisControle('ctrl_meses_de_safra_no_ano').valor) *
          getters.getVariaveisControle('ctrl_carga_na_entre_safra').valor

      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_tarifa_energia: ({ commit, getters, state, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_tarifa_energia')
      obj.valor =
        Math.round(
          state.equipamentos_instalacoes[14].valor *
            state.inflacao.valor *
            2 *
            100,
        ) / 100
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_consumo_medio: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_consumo_medio')
      obj.valor = 1.7
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_numero_funcionarios: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_numero_funcionarios')
      obj.valor = Math.round(
        25 +
          (0.055 * getters.getVariaveisControle('ctrl_movimentacao').valor) /
            1000,
      )
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_salario_medio_do_setor: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_salario_medio_do_setor')
      obj.valor = 1293.89
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_encargos_sociais: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_encargos_sociais')
      obj.valor = 0.99
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_beneficios: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_beneficios')
      obj.valor = 0.33
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_instalacoes: ({ commit, getters, state, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_instalacoes')
      obj.valor =
        500 * getters.getVariaveisControle('ctrl_capacidade_estatica').valor +
        state.equipamentos_instalacoes[11].total +
        state.equipamentos_instalacoes[12].total
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_periodo_depreciacao_obra_civil: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle(
        'ctrl_periodo_depreciacao_obra_civil',
      )
      obj.valor = 40
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_fator_manutencao_obra_civil: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_fator_manutencao_obra_civil')
      obj.valor = 0.005
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_fator_manutencao_do_maquinario: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle(
        'ctrl_fator_manutencao_do_maquinario',
      )
      obj.valor = 0.015
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_remuneracao_do_capital: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_remuneracao_do_capital')
      obj.valor = 0.1
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_seguros: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_seguros')
      obj.valor = 0.002
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    ctrl_margem_de_lucro: ({ commit, getters, dispatch }) => {
      var obj = getters.getVariaveisControle('ctrl_margem_de_lucro')
      obj.valor = 0
      commit('variaveisControleByFieldName', obj)
      obj.dependentes.forEach(action => {
        dispatch(action)
      })
    },
    cf_salarios: ({ commit, getters }) => {
      var obj = getters.getCustoFixo('cf_salarios')
      obj.valor = getters.arredonda(
        getters.getVariaveisControle('ctrl_numero_funcionarios').valor *
          getters.getVariaveisControle('ctrl_salario_medio_do_setor').valor *
          (1 +
            getters.getVariaveisControle('ctrl_encargos_sociais').valor +
            getters.getVariaveisControle('ctrl_beneficios').valor) *
          13,
      )
      commit('custoFixoByFieldName', obj)
    },
    cf_depreciacao_das_instalacoes: ({ commit, getters }) => {
      var obj = getters.getCustoFixo('cf_depreciacao_das_instalacoes')
      obj.valor = getters.arredonda(
        getters.getVariaveisControle('ctrl_instalacoes').valor /
          getters.getVariaveisControle('ctrl_periodo_depreciacao_obra_civil')
            .valor,
      )

      commit('custoFixoByFieldName', obj)
    },
    cf_manutecao_das_instalacoes: ({ commit, getters }) => {
      var obj = getters.getCustoFixo('cf_manutecao_das_instalacoes')
      obj.valor = getters.arredonda(
        getters.getVariaveisControle('ctrl_instalacoes').valor *
          getters.getVariaveisControle('ctrl_fator_manutencao_obra_civil')
            .valor,
      )

      commit('custoFixoByFieldName', obj)
    },

    cf_depreciacao_maquinario: ({ commit, getters }) => {
      var obj = getters.getCustoFixo('cf_depreciacao_maquinario')
      obj.valor = getters.arredonda(getters.eqt_total_depreciacao)

      commit('custoFixoByFieldName', obj)
    },
    cf_seguros: ({ commit, getters }) => {
      var obj = getters.getCustoFixo('cf_seguros')
      obj.valor = getters.arredonda(
        getters.getVariaveisControle('ctrl_seguros').valor *
          (getters.eqt_total_valor_corrigido +
            getters.getVariaveisControle('ctrl_instalacoes').valor),
      )

      commit('custoFixoByFieldName', obj)
    },
    cf_custo_de_oportunidade: ({ commit, getters }) => {
      var obj = getters.getCustoFixo('cf_custo_de_oportunidade')

      obj.valor = getters.arredonda(
        getters.getVariaveisControle('ctrl_remuneracao_do_capital').valor *
          (getters.eqt_total_valor_corrigido +
            getters.getVariaveisControle('ctrl_instalacoes').valor),
      )

      commit('custoFixoByFieldName', obj)
    },
    cv_mao_de_obra: ({ commit, getters }) => {
      var obj = getters.getCustoVariavel('cv_mao_de_obra')

      obj.valor = 0

      commit('custoVariavelByFieldName', obj)
    },
    cv_energia_eletrica: ({ commit, getters }) => {
      var obj = getters.getCustoVariavel('cv_energia_eletrica')

      obj.valor =
        getters.getVariaveisControle('ctrl_movimentacao').valor *
        getters.getVariaveisControle('ctrl_tarifa_energia').valor *
        getters.getVariaveisControle('ctrl_consumo_medio').valor

      commit('custoVariavelByFieldName', obj)
    },
    cv_manutencao_maquinario: ({ commit, getters }) => {
      var obj = getters.getCustoVariavel('cv_manutencao_maquinario')

      obj.valor =
        getters.getVariaveisControle('ctrl_fator_manutencao_do_maquinario')
          .valor * getters.eqt_total_valor_corrigido

      commit('custoVariavelByFieldName', obj)
    },
  },
  modules: {},
})
