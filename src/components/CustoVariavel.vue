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
  data() {
    return {
      itens: [
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
      ],
    }
  },
}
</script>

<style></style>
