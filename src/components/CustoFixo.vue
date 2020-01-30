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
      ],
    }
  },
}
</script>

<style></style>
