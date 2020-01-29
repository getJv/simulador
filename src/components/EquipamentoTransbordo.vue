<template>
  <v-card flat>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Quantidade</th>
              <th class="text-left">Item</th>
              <th class="text-left">Valor</th>
              <th class="text-left">Valor Corrigido</th>
              <th class="text-center">Período da depreciação</th>
              <th class="text-left">Depreciação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itens" :key="item.id">
              <td>{{ item.quantidade }}</td>
              <td>{{ item.item }}</td>
              <td>{{ item.valor | currency }}</td>
              <td>{{ item.valor_corrigido | currency }}</td>
              <td>{{ item.periodo_depreciacao }}</td>
              <td>{{ item.valor | currency }}</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{{ $store.getters.eqt_total_valor_corrigido | currency }}</td>
              <td></td>
              <td>{{ $store.getters.eqt_total_depreciacao | currency }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'equipamento-de-transbordo',
  computed: {
    itens() {
      return this.$store.state.equipamento_transbordo
    }
  },
  data() {
    return {}
  }
}
</script>

<style></style>
