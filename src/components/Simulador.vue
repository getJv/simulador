<template>
  <v-card elevation="5" class="ma-5">
    <v-toolbar flat color="green darken-3" dark>
      <v-toolbar-title>Simulador de Custos Transbordo</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      ---
      {{
        this.$store.getters.getVariaveisControle('ctrl_capacidade_estatica')
          .valor
      }}
      ---
      <v-row align="center">
        <v-col cols="12">
          <p class="text-center text-uppercase headline">Variáveis básicas</p>
          <v-divider class="mx-4"></v-divider>
        </v-col>
        <v-col cols="12">
          <v-select :items="items" outlined label="Tipo de carga" />
        </v-col>
        <v-col cols="12">
          <v-select :items="items" outlined label="Tipo de Fluxo" />
        </v-col>

        <v-col cols="12">
          <p class="text-center text-uppercase headline">
            <span>Variáveis Customizadas</span>
          </p>
          <v-divider class="mx-4"></v-divider>
        </v-col>
        <v-col cols="12" md="6">
          <input
            type="text"
            id="ctrl_capacidade_estatica"
            label="Capacidade estática (toneladas)"
            :value="ctrl_capacidade_estatica"
            @input="updateValue"
          />
        </v-col>
        <v-col cols="12" md="6">
          <input
            type="text"
            id="ctrl_tarifa_energia"
            label="Tarifa energia (R$/kWh)"
            :value="getVc('ctrl_tarifa_energia').valor"
            @input="updateValue"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Capacidade de tombamento por hora" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined disabled label="Numero de funcionários" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Tempo médio cf_salarios (dias)" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field outlined label="Salário médio (R$)" />
        </v-col>
        <v-col cols="12" class="green darken-2">
          <v-row justify="center" align="center">
            <v-col cols="12" sm="3">
              <v-card>
                <v-card-text>
                  <p class="caption">Tarifa</p>
                  <p class="text-center headline">
                    {{ ctrl_tarifa | currency }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Simulador',
  methods: {
    updateValue(e) {
      this.$store.commit('variaveisControleByFieldName', {
        formula: e.target.id,
        valor: e.target.value,
      })
    },
    recalcula() {
      this.gsa_rodo_ferro_variaveis_de_controle()
      this.gsa_rodo_ferro_custo_variavel()
      this.gsa_rodo_ferro_custo_fixo()
      this.gsa_rodo_ferro_variaveis_de_controle()
    },
    gsa_rodo_ferro_custo_fixo() {
      this.$store.getters.getAllCustosFixos.forEach(item => {
        this.$store.commit('custoFixoByFieldName', {
          formula: item.formula,
          valor: this[item.formula],
        })
      })
    },
    gsa_rodo_ferro_custo_variavel() {
      this.$store.getters.getAllCustosVariaveis.forEach(item => {
        this.$store.commit('custo_variavel', {
          id: item.id,
          valor: this[item.formula],
        })
      })
    },
    gsa_rodo_ferro_variaveis_de_controle() {
      this.$store.getters.getAllVariaveisControle.forEach(item => {
        this.$store.commit('variaveis_de_controle', {
          id: item.id,
          valor: this[item.formula],
        })
      })
    },
  },
  created() {
    //this.recalcula()
  },
  computed: {
    ...mapGetters([
      'getVc',
      'cf_salarios',
      'cf_depreciacao_das_instalacoes',
      'cf_manutecao_das_instalacoes',
      'cf_depreciacao_maquinario',
      'cf_seguros',
      'cf_custo_de_oportunidade',
      'cf_total_custo_fixo',

      'cv_mao_de_obra',
      'cv_energia_eletrica',
      'cv_manutencao_maquinario',
      'cv_total_custo_variavel',

      'ctrl_capacidade_estatica',
      'ctrl_tombamento_medio_por_hora',
      'ctrl_disponibilidade_por_tombador',
      'ctrl_disponibilidade_de_caminhoes_no_patio',
      'ctrl_tempo_medio_de_armazenagem',
      'ctrl_horas_de_funcionamento_diario',
      'ctrl_paradas_para_manutencao_mensal',
      'ctrl_horas_de_funcionamento_mensal',
      'ctrl_meses_de_safra_no_ano',
      'ctrl_carga_na_safra',
      'ctrl_carga_na_entre_safra',
      'ctrl_movimentacao',
      'ctrl_giro',
      'ctrl_tarifa_energia',
      'ctrl_ctrl_consumo_medio',
      'ctrl_numero_funcionarios',
      'ctrl_salario_medio_do_setor',
      'ctrl_encargos_sociais',
      'ctrl_beneficios',
      'ctrl_instalacoes',
      'ctrl_periodo_depreciacao_obra_civil',
      'ctrl_fator_manutencao_obra_civil',
      'ctrl_fator_manutencao_do_maquinario',
      'ctrl_remuneracao_do_capital',
      'ctrl_seguros',
      'ctrl_margem_de_lucro',
      'ctrl_tarifa_limpa',
      'ctrl_lucro',
      'ctrl_tributos',
      'ctrl_tarifa',
    ]),
  },

  data() {
    return {
      items: ['Item 1', 'Item 2', 'Item 3'],
    }
  },
}
</script>

<style></style>
