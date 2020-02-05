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
              <td>{{ item.valor }}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{{ $store.getters.ctrl_total_tributos }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Tributacao',
  computed: {},
  data() {
    return {
      itens: this.$store.state.tributos,
    }
  },
}
</script>

<style></style>
