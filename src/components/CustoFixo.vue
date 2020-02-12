<template>
  <div>
    <v-card flat>
      <v-card-text>
        <v-data-table
          hide-default-footer
          :headers="headers"
          :items="itens"
          sort-by="id"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Custos fixos</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on"
                    >Incluir novo item</v-btn
                  >
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.nome"
                            label="Nome do item"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.valor"
                            label="Valor do item"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >Cancelar</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="save"
                      >Incluir</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.valor="{ item }">
            <span v-if="item.currency"> {{ item.valor | currency }} </span>
            <span v-else> {{ item.valor }} </span>
          </template>
          <template v-slot:item.action="{ item }">
            <v-tooltip class="ma-2" right>
              <template v-slot:activator="{ on }">
                <v-icon
                  v-if="item.epl"
                  v-on="on"
                  color="green"
                  @click="aplicarFormula(item)"
                  >mdi-refresh-circle</v-icon
                >
              </template>
              <span>Restaurar valor padrão</span>
            </v-tooltip>

            <v-icon ma-2 class="ma-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon ma-2 class="ma-2" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
          <template v-slot:no-data>
            <p>Nenhum item cadastrado</p>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
    <v-card
      class="mx-auto mb-5"
      color="green green-ligthen-3"
      dark
      max-width="400"
    >
      <v-card-title>
        <span class="title font-weight-light text-uppercase "
          >Total dos Custos Fixos</span
        >
      </v-card-title>

      <v-card-text class="headline font-weight-bold text-center">
        <v-divider class="pa-2"></v-divider>
        {{ cf_total_custo_fixo | currency }}</v-card-text
      >
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CustoFixo',
  mounted() {
    this.itens = this.custo_fixo
  },
  methods: {
    updateValue(e) {
      this.$store.commit('custoFixoByFieldName', {
        formula: e.target.id,
        valor: e.target.value,
      })
    },
    aplicarFormula(item) {
      this.$store.dispatch(item.formula)
    },
    editItem(item) {
      this.editedIndex = this.getAllCustosFixos.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      const index = this.getAllCustosFixos.indexOf(item)
      confirm('Deseja realmente excluir este item?') &&
        this.$store.commit('removeCustoFixo', index)
    },

    close() {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save() {
      if (this.editedIndex > -1) {
        this.$store.commit('custoFixoByFieldName', {
          formula: this.editedItem.formula,
          nome: this.editItem.nome,
          valor: this.editedItem.valor,
        })
      } else {
        this.$store.commit('addCustoFixo', {
          nome: this.editedItem.nome,
          valor: this.editedItem.valor,
        })
      }
      this.close()
    },
  },
  computed: {
    ...mapGetters(['cf_total_custo_fixo', 'custo_fixo']),
    formTitle() {
      return this.editedIndex === -1 ? 'Novo item' : 'Edição de item'
    },
  },
  data() {
    return {
      itens: [],
      dialog: false,
      headers: [
        {
          text: 'Item',
          align: 'left',
          value: 'nome',
        },
        { text: 'Valor', value: 'valor' },
        { text: 'Ações', value: 'action', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        nome: '',
        valor: 0,
      },
      defaultItem: {
        nome: '',
        valor: 0,
      },
      watch: {
        dialog(val) {
          val || this.close()
        },
      },
    }
  },
}
</script>

<style></style>
