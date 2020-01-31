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
  computed: {},
  mounted() {
    this.itens = this.$store.state.custo_variavel
    this.itens.forEach(campo => {
      var formula = this.formulas.find(f => f.campo_id == campo.id)
      if (formula) {
        campo.valor = formula.valor
      }
      this.total_custo_variavel += campo.valor
    })
    this.$store.commit('custo_variavel', {
      id: 4,
      valor: this.total_custo_variavel,
    })
  },
  data() {
    return {
      itens: null,
      total_custo_variavel: 0,
      formulas: [
        {
          campo_id: 2,
          valor:
            this.$store.getters.ctrl_movimentacao *
            this.$store.getters.ctrl_tarifa_energia *
            this.$store.state.controle.consumo_medio,
        },
        {
          campo_id: 3,
          valor:
            this.$store.state.controle.fator_manutencao_do_maquinario *
            this.$store.getters.eqt_total_valor_corrigido,
        },
      ],
      /* [
        {
          nome: 'Mão de Obra',
          valor: this.$store.state.custo_variavel.mao_de_obra,
        },
        {
          nome: 'Energia Eletrica',
          valor: this.$store.getters.cv_energia_eletrica,
        },
        {
          nome: 'Manutenção de maquinário',
          valor: this.$store.getters.cv_manutencao_maquinario,
        },
        {
          nome: 'Custo Variável',
          valor: this.$store.getters.cv_total_custo_variavel,
        },
      ], */
    }
  },
}
</script>

<style></style>
