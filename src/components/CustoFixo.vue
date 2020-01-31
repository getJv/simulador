<template>
  <v-card flat>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itens" :key="item.id">
              <td>{{ item.nome }}</td>
              <td>{{ item.valor | currency }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {},
  mounted() {
    this.itens = this.$store.state.custo_fixo
    this.itens.forEach(campo => {
      var formula = this.formulas.find(f => f.campo_id == campo.id)
      if (formula) {
        campo.valor = formula.valor
      }
      this.total_custo_fixo += campo.valor
    })
    this.$store.commit('custo_fixo', { id: 7, valor: this.total_custo_fixo })
  },

  data() {
    return {
      itens: null,
      total_custo_fixo: 0,
      formulas: [
        {
          campo_id: 1,
          valor:
            this.$store.getters.ctrl_numero_funcionarios *
            this.$store.state.controle.salario_medio_do_setor *
            (1 +
              this.$store.state.controle.encargos_sociais +
              this.$store.state.controle.beneficios) *
            13,
        },
        {
          campo_id: 2,
          valor:
            this.$store.getters.ctrl_instalacoes /
            this.$store.state.controle.periodo_depreciacao_obra_civil,
        },
        {
          campo_id: 3,
          valor:
            this.$store.getters.ctrl_instalacoes *
            this.$store.state.controle.fator_manutencao_obra_civil,
        },
        {
          campo_id: 4,
          valor: this.$store.getters.eqt_total_depreciacao,
        },
        {
          campo_id: 5,
          valor:
            this.$store.state.controle.seguros *
            (this.$store.getters.eqt_total_valor_corrigido +
              this.$store.getters.ctrl_instalacoes),
        },
        {
          campo_id: 6,
          valor:
            this.$store.state.controle.remuneracao_do_capital *
            (this.$store.getters.eqt_total_valor_corrigido +
              this.$store.getters.ctrl_instalacoes),
        },
      ],

      /*
      [
        {
          nome: 'Salarios',
          valor: this.$store.getters.cf_salarios,
        },
        {
          nome: 'Depreciação das instalações',
          valor: this.$store.getters.cf_depreciacao_das_instalacoes,
        },
        {
          nome: 'Manutenção das Instalções',
          valor: this.$store.getters.cf_manutecao_das_instalacoes,
        },
        {
          nome: 'Depreciação do maquinário',
          valor: this.$store.getters.cf_depreciacao_maquinario,
        },
        {
          nome: 'Seguros',
          valor: this.$store.getters.cf_seguros,
        },
        {
          nome: 'Custo de Oportunidade',
          valor: this.$store.getters.cf_custo_de_oportunidade,
        },
        {
          nome: 'Custo Fixo',
          valor: this.$store.getters.cf_total_custo_fixo,
        },
      ]
      */
    }
  },
}
</script>

<style></style>
