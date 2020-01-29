<template>
  <v-card flat>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Equipamento e Instalações</th>
              <th class="text-left">Valores</th>
              <th class="text-left">Obs</th>
              <th class="text-left">Quantidade</th>
              <th class="text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itens" :key="item.id">
              <td>{{ item.item }}</td>
              <td>{{ item.valor | currency }}</td>
              <td>{{ item.obs }}</td>
              <td>{{ item.quantidade }}</td>
              <td>{{ item.total | currency }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'equipamento-e-instalacoes',
  computed: {
    itens() {
      return this.$store.state.equipamentos_instalacoes
    }
  },
  data() {
    return {}
  }
}
</script>

<style></style>
