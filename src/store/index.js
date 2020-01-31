import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    custo_fixo: [
      {
        id: 1,
        nome: 'Salarios',
        valor: 0,
      },
      {
        id: 2,
        nome: 'Depreciação das instalações',
        valor: 0,
      },
      {
        id: 3,
        nome: 'Manutenção das Instalções',
        valor: 0,
      },
      {
        id: 4,
        nome: 'Depreciação do maquinário',
        valor: 0,
      },
      {
        id: 5,
        nome: 'Seguros',
        valor: 0,
      },
      {
        id: 6,
        nome: 'Custo de Oportunidade',
        valor: 0,
      },
      {
        id: 7,
        nome: 'Custo Fixo',
        valor: 0,
      },
    ],
    custo_variavel: [
      { id: 1, nome: 'Mão de obra', valor: 0 },
      { id: 2, nome: 'Energia elétrica', valor: 0 },
      { id: 3, nome: 'Manutenção de maquinário', valor: 0 },
      { id: 4, nome: 'Total de custo variável', valor: 0 },
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
    controle: [
      {
        id: 1,
        nome: 'Capacidade estatica',
        valor: 36000,
        currency: false,
      },
      {
        id: 2,
        nome: 'Tombamento médio por hora',
        valor: 0,
        currency: false,
      },
      {
        id: 3,
        nome: 'Disponibilidade por tombador',
        valor: 0.85,
        currency: false,
      },
      {
        id: 4,
        nome: 'Disponibilidade de caminhões no pátio',
        valor: 0.9,
        currency: false,
      },
    ],
     Parei movendo a variavel 5
    /* controle: {
      capacidade_estatica: 36000,
      disponibilidade_por_tombador: 0.85,
      disponibilidade_de_caminhoes_no_patio: 0.9,
      horas_de_funcionamento_diario: 24,
      paradas_para_manutencao_mensal: 0.1,
      meses_de_safra_no_ano: 6,
      carga_na_safra: 1.0,
      carga_na_entre_safra: 0.25,
      consumo_medio: 1.7,
      salario_medio_do_setor: 1293.89,
      encargos_sociais: 0.99,
      beneficios: 0.33,
      periodo_depreciacao_obra_civil: 40,
      fator_manutencao_obra_civil: 0.005,
      fator_manutencao_do_maquinario: 0.015,
      remuneracao_do_capital: 0.1,
      seguros: 0.2 / 100,
      margem_de_lucro: 0,
    }, */
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

    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ],
    totalTvCount: 10,
  },
  getters: {
    ctrl_total_tributos: state => {
      var sum = 0
      state.tributos.forEach(item => {
        sum = sum + item.valor
      })

      return sum
    },
    ctrl_tombamento_medio_por_hora: state => {
      return Math.round(
        state.equipamento_transbordo[4].quantidade *
          40 *
          6 *
          state.controle.disponibilidade_por_tombador *
          state.controle.disponibilidade_de_caminhoes_no_patio,
      )
    },
    ctrl_tempo_medio_de_armazenagem: (state, getters) => {
      return Math.round(365 / getters.ctrl_giro)
    },
    ctrl_horas_de_funcionamento_mensal: state => {
      return (
        state.controle.horas_de_funcionamento_diario *
        30 *
        (1 - state.controle.paradas_para_manutencao_mensal)
      )
    },
    ctrl_giro: (state, getters) => {
      return getters.ctrl_movimentacao / state.controle.capacidade_estatica
    },
    ctrl_movimentacao: (state, getters) => {
      return (
        getters.ctrl_tombamento_medio_por_hora *
          getters.ctrl_horas_de_funcionamento_mensal *
          state.controle.meses_de_safra_no_ano *
          state.controle.carga_na_safra +
        getters.ctrl_tombamento_medio_por_hora *
          getters.ctrl_horas_de_funcionamento_mensal *
          (12 - state.controle.meses_de_safra_no_ano) *
          state.controle.carga_na_entre_safra
      )
    },
    ctrl_tarifa_energia: state => {
      return (
        Math.round(
          state.equipamentos_instalacoes[14].valor *
            state.inflacao.valor *
            2 *
            100,
        ) / 100
      )
    },
    ctrl_numero_funcionarios: (state, getters) => {
      return Math.round(25 + (0.055 * getters.ctrl_movimentacao) / 1000)
    },
    ctrl_instalacoes: state => {
      return (
        500 * state.controle.capacidade_estatica +
        state.equipamentos_instalacoes[11].total +
        state.equipamentos_instalacoes[12].total
      )
    },
    ctrl_tarifa_limpa: (state, getters) => {
      //console.log(getters.cv_total_custo_variavel)
      return (
        (getters.cv_total_custo_variavel + getters.cf_total_custo_fixo) /
        getters.ctrl_movimentacao
      )
    },
    ctrl_lucro: (state, getters) => {
      return state.controle.margem_de_lucro * getters.ctrl_tarifa_limpa
    },
    ctrl_tributos: (state, getters) => {
      return (
        getters.ctrl_total_tributos *
        (getters.ctrl_lucro + getters.ctrl_tarifa_limpa)
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
    // Custo Variável
    cv_energia_eletrica: (state, getters) => {
      /* console.log(getters.ctrl_movimentacao)
      console.log(getters.ctrl_tarifa_energia)
      console.log(state.controle.consumo_medio) */

      return (
        getters.ctrl_movimentacao *
        getters.ctrl_tarifa_energia *
        state.controle.consumo_medio
      )
    },
    cv_manutencao_maquinario: (state, getters) => {
      return (
        state.controle.fator_manutencao_do_maquinario *
        getters.eqt_total_valor_corrigido
      )
    },
    cv_total_custo_variavel: (state, getters) => {
      return (
        state.custo_variavel.mao_de_obra +
        getters.cv_energia_eletrica +
        getters.cv_manutencao_maquinario
      )
    },

    // custo fixo
    cf_salarios: (state, getters) => {
      return (
        getters.ctrl_numero_funcionarios *
        state.controle.salario_medio_do_setor *
        (1 + state.controle.encargos_sociais + state.controle.beneficios) *
        13
      )
    },
    cf_depreciacao_das_instalacoes: (state, getters) => {
      return (
        getters.ctrl_instalacoes / state.controle.periodo_depreciacao_obra_civil
      )
    },
    cf_manutecao_das_instalacoes: (state, getters) => {
      return (
        getters.ctrl_instalacoes * state.controle.fator_manutencao_obra_civil
      )
    },
    cf_depreciacao_maquinario: (state, getters) => {
      return getters.eqt_total_depreciacao
    },
    cf_seguros: (state, getters) => {
      return (
        state.controle.seguros *
        (getters.eqt_total_valor_corrigido + getters.ctrl_instalacoes)
      )
    },
    cf_custo_de_oportunidade: (state, getters) => {
      return (
        state.controle.remuneracao_do_capital *
        (getters.eqt_total_valor_corrigido + getters.ctrl_instalacoes)
      )
    },
    cf_total_custo_fixo: (state, getters) => {
      return (
        getters.cf_salarios +
        getters.cf_depreciacao_das_instalacoes +
        getters.cf_manutecao_das_instalacoes +
        getters.cf_depreciacao_maquinario +
        getters.cf_seguros +
        getters.cf_custo_de_oportunidade
      )
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
    capacidade_estatica(state, value) {
      state.controle.capacidade_estatica = value
    },
    salario_medio_do_setor(state, value) {
      state.controle.salario_medio_do_setor = value
    },
    custo_fixo(state, newItem) {
      var el = state.custo_fixo.find(item => item.id == newItem.id)
      el.valor = newItem.valor
    },
    custo_variavel(state, newItem) {
      var el = state.custo_variavel.find(item => item.id == newItem.id)
      el.valor = newItem.valor
    },
  },
  actions: {
    removeTv(context, amount) {
      if (context.state.totalTvCount >= amount) {
        context.commit('removeTv', amount)
      }
    },
  },
  modules: {},
})
