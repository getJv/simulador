import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    custo_fixo: [
      {
        id: 1,
        formula: 'cf_salarios',
        nome: 'Salarios',
        valor: 0,
        epl: true,
        currency: true,
      },
      {
        id: 2,
        formula: 'cf_depreciacao_das_instalacoes',
        nome: 'Depreciação das instalações',
        valor: 0,
        epl: true,
        currency: true,
      },
      {
        id: 3,
        formula: 'cf_manutecao_das_instalacoes',
        nome: 'Manutenção das Instalções',
        valor: 0,
        epl: true,
        currency: true,
      },
      {
        id: 4,
        formula: 'cf_depreciacao_maquinario',
        nome: 'Depreciação do maquinário',
        valor: 0,
        epl: true,
        currency: true,
      },
      {
        id: 5,
        formula: 'cf_seguros',
        nome: 'Seguros',
        valor: 0,
        epl: true,
        currency: true,
      },
      {
        id: 6,
        formula: 'cf_custo_de_oportunidade',
        nome: 'Custo de Oportunidade',
        valor: 0,
        epl: true,
        currency: true,
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
      },
      {
        id: 2,
        formula: 'cv_energia_eletrica',
        nome: 'Energia elétrica',
        valor: 0,
        epl: true,
        currency: true,
      },
      {
        id: 3,
        formula: 'cv_manutencao_maquinario',
        nome: 'Manutenção de maquinário',
        valor: 0,
        epl: true,
        currency: true,
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
        formula: 'ctrl_capacidade_estatica',
        nome: 'Capacidade estatica',
        valor: 36000,
        currency: false,
      },
      {
        id: 2,
        formula: 'ctrl_tombamento_medio_por_hora',
        nome: 'Tombamento médio por hora',
        valor: 0,
        currency: false,
      },
      {
        id: 3,
        formula: 'ctrl_disponibilidade_por_tombador',
        nome: 'Disponibilidade por tombador',
        valor: 0.85,
        currency: false,
      },
      {
        id: 4,
        formula: 'ctrl_disponibilidade_de_caminhoes_no_patio',
        nome: 'Disponibilidade de caminhões no pátio',
        valor: 0.9,
        currency: false,
      },
      {
        id: 5,
        formula: 'ctrl_tempo_medio_de_armazenagem',
        nome: 'Tempo médio de armazenagem',
        valor: 0.9,
        currency: false,
      },
      {
        id: 6,
        formula: 'ctrl_horas_de_funcionamento_diario',
        nome: 'Horas de funcionamento diário',
        valor: 24,
        currency: false,
      },
      {
        id: 7,
        formula: 'ctrl_paradas_para_manutencao_mensal',
        nome: 'Paradas para manutenção (mensal)',
        valor: 0.1,
        currency: false,
      },
      {
        id: 8,
        formula: 'ctrl_horas_de_funcionamento_mensal',
        nome: 'Horas de funcionamento mensal',
        valor: 0,
        currency: false,
      },
      {
        id: 9,
        formula: 'ctrl_meses_de_safra_no_ano',
        nome: 'Meses de safra no ano',
        valor: 6,
        currency: false,
      },
      {
        id: 10,
        formula: 'ctrl_carga_na_safra',
        nome: 'Carga na entressafra',
        valor: 1.0,
        currency: false,
      },
      {
        id: 11,
        formula: 'ctrl_carga_na_entre_safra',
        nome: 'Carga na entre safra',
        valor: 0.25,
        currency: false,
      },
      {
        id: 12,
        formula: 'ctrl_giro',
        nome: 'Giro',
        valor: 0,
        currency: false,
      },
      {
        id: 13,
        formula: 'ctrl_movimentacao',
        nome: 'Movimentação',
        valor: 0,
        currency: false,
      },
      {
        id: 14,
        formula: 'ctrl_tarifa_energia',
        nome: 'Tarifa de energia',
        valor: 0,
        currency: false,
      },
      {
        id: 15,
        formula: 'ctrl_consumo_medio',
        nome: 'Consumo médio',
        valor: 0,
        currency: false,
      },
      {
        id: 16,
        formula: 'ctrl_numero_funcionarios',
        nome: 'Número de funcionários',
        valor: 0,
        currency: false,
      },
      {
        id: 17,
        formula: 'ctrl_salario_medio_do_setor',
        nome: 'Salário médio do setor',
        valor: 0,
        currency: true,
      },
      {
        id: 18,
        formula: 'ctrl_encargos_sociais',
        nome: 'Encargos Sociais',
        valor: 0.99,
        currency: false,
      },
      {
        id: 19,
        formula: 'ctrl_beneficios',
        nome: 'Beneficios',
        valor: 0.33,
        currency: false,
      },
      {
        id: 20,
        formula: 'ctrl_instalacoes',
        nome: 'Instalações',
        valor: 0,
        currency: true,
      },
      {
        id: 21,
        formula: 'ctrl_periodo_depreciacao_obra_civil',
        nome: 'Período de Depreciação Obra Civil',
        valor: 0,
        currency: false,
      },
      {
        id: 22,
        formula: 'ctrl_fator_manutencao_obra_civil',
        nome: 'Fator de Manutenção da Obra Civil',
        valor: 0,
        currency: false,
      },
      {
        id: 23,
        formula: 'ctrl_fator_manutencao_do_maquinario',
        nome: 'Fator de Manutenção do maquinário',
        valor: 0,
        currency: false,
      },
      {
        id: 24,
        formula: 'ctrl_remuneracao_do_capital',
        nome: 'Remuneração do capital',
        valor: 0.1,
        currency: false,
      },
      {
        id: 25,
        formula: 'ctrl_seguros',
        nome: 'Seguros',
        valor: 0,
        currency: false,
      },
      {
        id: 26,
        formula: 'ctrl_margem_de_lucro',
        nome: 'Margem de lucro',
        valor: 0,
        currency: false,
      },
      {
        id: 27,
        formula: 'ctrl_tarifa_limpa',
        nome: 'Tarifa Limpa',
        valor: 0,
        currency: false,
      },
      {
        id: 28,
        formula: 'ctrl_lucro',
        nome: 'Lucro',
        valor: 0,
        currency: false,
      },
      {
        id: 29,
        formula: 'ctrl_tributos',
        nome: 'Tributos',
        valor: 0,
        currency: false,
      },
      {
        id: 30,
        formula: 'ctrl_tarifa',
        nome: 'Tarifa',
        valor: 0,
        currency: false,
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
    arredonda: () => valor => {
      return Math.round(valor * 100) / 100
    },

    custo_fixo: state => {
      return fieldName => {
        //console.log('from store: ' + fieldName)
        return state.custo_fixo.find(item => item.formula === fieldName)
      }
    },

    getAllCustosFixos: state => {
      return state.custo_fixo
    },
    getAllCustosVariaveis: state => {
      return state.custo_variavel
    },
    getAllVariaveisControle: state => {
      return state.variaveis_de_controle
    },
    // custo fixo
    cf_salarios: (state, getters) => {
      return getters.arredonda(
        getters.getVc('ctrl_numero_funcionarios').valor *
          getters.getVc('ctrl_salario_medio_do_setor').valor *
          (1 +
            getters.getVc('ctrl_encargos_sociais').valor +
            getters.getVc('ctrl_beneficios').valor) *
          13,
      )
    },
    cf_depreciacao_das_instalacoes: (state, getters) => {
      return getters.arredonda(
        getters.getVc('ctrl_instalacoes').valor /
          getters.getVc('ctrl_periodo_depreciacao_obra_civil').valor,
      )
    },
    cf_manutecao_das_instalacoes: (state, getters) => {
      return getters.arredonda(
        getters.getVc('ctrl_instalacoes').valor *
          getters.getVc('ctrl_fator_manutencao_obra_civil').valor,
      )
    },
    cf_depreciacao_maquinario: (state, getters) => {
      return getters.arredonda(getters.eqt_total_depreciacao)
    },
    cf_seguros: (state, getters) => {
      return getters.arredonda(
        getters.getVc('ctrl_seguros').valor *
          (getters.eqt_total_valor_corrigido +
            getters.getVc('ctrl_instalacoes').valor),
      )
    },
    cf_custo_de_oportunidade: (state, getters) => {
      return getters.arredonda(
        getters.getVc('ctrl_remuneracao_do_capital').valor *
          (getters.eqt_total_valor_corrigido +
            getters.getVc('ctrl_instalacoes').valor),
      )
    },
    cf_total_custo_fixo: (state, getters) => {
      var total = 0
      state.custo_fixo.forEach(item => {
        total += Number(item.valor)
      })

      return getters.arredonda(total)
    },

    // Custo Variável
    cv_mao_de_obra: () => {
      return 0
    },
    cv_energia_eletrica: (state, getters) => {
      return (
        getters.getVc('ctrl_movimentacao').valor *
        getters.getVc('ctrl_tarifa_energia').valor *
        getters.ctrl_consumo_medio
      )
    },
    cv_manutencao_maquinario: (state, getters) => {
      return (
        getters.getVc('ctrl_fator_manutencao_do_maquinario').valor *
        getters.eqt_total_valor_corrigido
      )
    },
    cv_total_custo_variavel: (state, getters) => {
      var total = 0
      state.custo_variavel.forEach(item => {
        total += Number(item.valor)
      })

      return getters.arredonda(total)
    },

    //Variaveis de controle

    ctrl_capacidade_estatica: (state, getters) => {
      return getters.getVc('ctrl_capacidade_estatica').valor
    },
    ctrl_tombamento_medio_por_hora: (state, getters) => {
      return Math.round(
        state.equipamento_transbordo[4].quantidade *
          40 *
          6 *
          getters.getVc('ctrl_disponibilidade_por_tombador').valor *
          getters.getVc('ctrl_disponibilidade_de_caminhoes_no_patio').valor,
      )
    },

    ctrl_disponibilidade_por_tombador: () => {
      return 0.85
    },
    ctrl_disponibilidade_de_caminhoes_no_patio: () => {
      return 0.9
    },

    ctrl_tempo_medio_de_armazenagem: (state, getters) => {
      return Math.round(365 / getters.getVc('ctrl_giro').valor)
    },
    ctrl_horas_de_funcionamento_diario: () => {
      return 24
    },
    ctrl_paradas_para_manutencao_mensal: () => {
      return 0.1
    },

    ctrl_horas_de_funcionamento_mensal: (state, getters) => {
      return (
        getters.getVc('ctrl_horas_de_funcionamento_diario').valor *
        30 *
        (1 - getters.getVc('ctrl_paradas_para_manutencao_mensal').valor)
      )
    },

    ctrl_meses_de_safra_no_ano: () => {
      return 6
    },
    ctrl_carga_na_safra: () => {
      return 1.0
    },
    ctrl_carga_na_entre_safra: () => {
      return 0.25
    },
    ctrl_giro: (state, getters) => {
      return (
        getters.getVc('ctrl_movimentacao').valor /
        getters.getVc('ctrl_capacidade_estatica').valor
      )
    },

    ctrl_movimentacao: (state, getters) => {
      var tt =
        getters.getVc('ctrl_tombamento_medio_por_hora').valor *
          getters.getVc('ctrl_horas_de_funcionamento_mensal').valor *
          getters.getVc('ctrl_meses_de_safra_no_ano').valor *
          getters.getVc('ctrl_carga_na_safra').valor +
        getters.getVc('ctrl_tombamento_medio_por_hora').valor *
          getters.getVc('ctrl_horas_de_funcionamento_mensal').valor *
          (12 - getters.getVc('ctrl_meses_de_safra_no_ano').valor) *
          getters.getVc('ctrl_carga_na_entre_safra').valor

      return tt
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

    ctrl_consumo_medio: () => {
      return Number(1.7)
    },

    ctrl_numero_funcionarios: (state, getters) => {
      return Math.round(
        25 + (0.055 * getters.getVc('ctrl_movimentacao').valor) / 1000,
      )
    },

    ctrl_salario_medio_do_setor: () => {
      return 1293.89
    },
    ctrl_encargos_sociais: () => {
      return 0.99
    },
    ctrl_beneficios: () => {
      return 0.33
    },
    ctrl_instalacoes: (state, getters) => {
      return (
        500 * getters.getVc('ctrl_capacidade_estatica').valor +
        state.equipamentos_instalacoes[11].total +
        state.equipamentos_instalacoes[12].total
      )
    },

    ctrl_periodo_depreciacao_obra_civil: () => {
      return 40
    },
    ctrl_fator_manutencao_obra_civil: () => {
      return 0.005
    },
    ctrl_fator_manutencao_do_maquinario: () => {
      return 0.015
    },
    ctrl_remuneracao_do_capital: () => {
      return 0.1
    },
    ctrl_seguros: () => {
      return 0.002
    },
    ctrl_margem_de_lucro: () => {
      return 0
    },

    ctrl_tarifa_limpa: (state, getters) => {
      return (
        Math.round(
          ((getters.cv_total_custo_variavel + getters.cf_total_custo_fixo) /
            getters.getVc('ctrl_movimentacao').valor) *
            100,
        ) / 100
      )
    },

    ctrl_lucro: (state, getters) => {
      return (
        getters.getVc('ctrl_margem_de_lucro').valor *
        getters.getVc('ctrl_tarifa_limpa').valor
      )
    },

    ctrl_tributos: (state, getters) => {
      return (
        Math.round(
          getters.ctrl_total_tributos *
            (getters.getVc('ctrl_lucro').valor +
              getters.getVc('ctrl_tarifa_limpa').valor) *
            1000,
        ) / 1000
      )
    },

    ctrl_tarifa: (state, getters) => {
      return (
        Math.round(
          (getters.getVc('ctrl_tributos').valor +
            getters.getVc('ctrl_lucro').valor +
            getters.getVc('ctrl_tarifa_limpa').valor) *
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
    getVc: state => formula => {
      return state.variaveis_de_controle.find(item => {
        if (item.formula == formula) return item
      })
    },
    getCv: state => formula => {
      return state.custo_variavel.find(item => {
        if (item.formula == formula) return item
      })
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

    //Não tratado ainda
    custo_variavel(state, newItem) {
      var el = state.custo_variavel.find(item => item.id == newItem.id)
      el.valor = newItem.valor || 0
    },
    variaveis_de_controle(state, newItem) {
      var el = state.variaveis_de_controle.find(item => item.id == newItem.id)
      el.valor = newItem.valor || 0
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
