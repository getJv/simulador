<template>
  <v-card flat>
    <v-card-text>
      {{ custo_fixo }}
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
              <td>
                <v-text-field
                  :ref="item.formula"
                  :id="item.formula"
                  :value="custo_fixo(item.formula).valor"
                  @input="updateMessage"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CustoFixo',
  methods: {
    updateMessage() {
      console.log(this.$refs)
    },
  },
  computed: {
    //https://vuex.vuejs.org/guide/forms.html
    ...mapGetters(['custo_fixo']),
    /* custo_fixo: {
      get() {
        return this.$store.getters.custo_fixo
      },
      set(value) {""
        this.$store.commit('custo_fixo', value)
      },
    }, */
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
