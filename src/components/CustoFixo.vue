<template>
  <v-card flat>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Item</th>
              <th class="text-left">Valor</th>
              <th class="text-left">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itens" :key="item.id">
              <td>{{ item.nome }}</td>
              <td>{{ item.valor | currency }}</td>
              <td>
                <v-btn @click="teste(item)"></v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CustoFixo',
  methods: {
    teste(item) {
      this.$store.commit('custo_fixo', {
        id: item.id,
        valor: 10,
      })
      this.$store.getters.cf_total_custo_fixo
    },
  },
  mounted() {
    this.itens = this.$store.state.custo_fixo
  },

  data() {
    return {
      itens: null,
    }
  },
}
</script>

<style></style>
