<template>
  <v-tooltip v-model="show" top>
    <template v-slot:activator="{ on }">
      <v-icon class="ma-1" @click.stop="dialog = true" v-on="on"
        >mdi-timetable
      </v-icon>
    </template>
    <span>TKU</span>
    <v-dialog v-model="dialog" min-width="400" max-width="700">
      <v-card class="pa-3">
        <v-card-text>
          <!-- CRUD ANUAL INICIO-->
          <v-data-table
            :headers="headers"
            :items="emis_entrada_tonelada_anos"
            disable-pagination
            hide-default-footer
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>Controle Anual</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog_crud" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                      small
                      >Adicionar</v-btn
                    >
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row align="center" justify="center">
                          <v-col cols="10" sm="6">
                            <label class="pure-material-textfield-outlined">
                              <money
                                v-model="editedItem.volume_tku"
                                v-bind="money"
                              ></money>
                              <span>Valor</span>
                            </label>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close"
                        >Cancel</v-btn
                      >
                      <v-btn color="blue darken-1" text @click="save"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <!--               <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon> -->
              <v-icon color="red" small @click="deleteItem(item)">
                mdi-delete
              </v-icon>
            </template>
            <template v-slot:item.volume_tku="{ item }">
              {{ item.volume_tku | numberFormat }}
            </template>
            <template v-slot:no-data>
              <p class="ma-2">Sem Informações</p>
            </template>
          </v-data-table>
          <!-- CRUD ANUAL FIM -->
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-tooltip>
</template>
<script>
import { mapGetters } from "vuex";
import bigDecimal from "js-big-decimal";
import { Money } from "v-money";
export default {
  name: "TKUAnual",
  components: {
    Money,
  },
  props: ["modal"],
  filters: {
    numberFormat(value) {
      var num = new bigDecimal(value);
      // \.(?!.*\.) pega apenas o ultimo .
      return num.getPrettyValue(3, ".").replace(/\.(?!.*\.)/g, ",");
    },
  },

  watch: {
    dialog_crud(val) {
      val || this.close();
    },
  },

  data() {
    return {
      dialog: false,
      dialog_crud: false,
      show: false,
      headers: [
        {
          text: "Ano",
          value: "ano",
        },
        { text: "Volume TKU", value: "volume_tku" },
        { text: "Ações", value: "actions", sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        ano: 0,
        volume_tku: 0,
      },
      defaultItem: {
        ano: 0,
        volume_tku: 0,
      },
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: "",
        precision: this.decimalPrecision,
        masked: false /* doesn't work with directive */,
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo Item" : "Edição de Item";
    },
    ...mapGetters(["emis_entrada_tonelada_anos"]),
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.emis_entrada_tonelada_anos.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog_crud = true;
    },

    deleteItem(item) {
      confirm("Deseja realmente remover este item?") &&
        this.$store.dispatch("remove_tku_anual", {
          modal: this.modal,
          item: item,
        });
    },

    close() {
      this.dialog_crud = false;
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //Object.assign(this.desserts[this.editedIndex], this.editedItem);
        this.$store.dispatch("edit_tku_anual", {
          index: this.editedIndex,
          item: this.editedItem,
        });
      } else {
        this.editedItem.ano = this.emis_entrada_tonelada_anos.length + 1;
        this.$store.dispatch("add_tku_anual", {
          modal: this.modal,
          item: this.editedItem,
        });
      }
      this.close();
    },
  },
};
</script>
<style scoped>
.pure-material-textfield-outlined {
  --pure-material-safari-helper1: rgb(
    var(--pure-material-primary-rgb, 33, 150, 243)
  );
  position: relative;
  display: inline-block;
  padding-top: 6px;
  font-family: var(
    --pure-material-font,
    "Roboto",
    "Segoe UI",
    BlinkMacSystemFont,
    system-ui,
    -apple-system
  );
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
}

/* Input, Textarea */
.pure-material-textfield-outlined > input,
.pure-material-textfield-outlined > textarea {
  box-sizing: border-box;
  margin: 0;
  border: solid 1px; /* Safari */
  border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  border-top-color: transparent;
  border-radius: 4px;
  padding: 15px 13px 15px;
  width: 100%;
  height: inherit;
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  background-color: transparent;
  box-shadow: none; /* Firefox */
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  caret-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  transition: border 0.2s, box-shadow 0.2s;
}

/* Span */
.pure-material-textfield-outlined > input + span,
.pure-material-textfield-outlined > textarea + span {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  width: 100%;
  max-height: 100%;
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  font-size: 75%;
  line-height: 15px;
  cursor: text;
  transition: color 0.2s, font-size 0.2s, line-height 0.2s;
}

/* Corners */
.pure-material-textfield-outlined > input + span::before,
.pure-material-textfield-outlined > input + span::after,
.pure-material-textfield-outlined > textarea + span::before,
.pure-material-textfield-outlined > textarea + span::after {
  content: "";
  display: block;
  box-sizing: border-box;
  margin-top: 6px;
  border-top: solid 1px;
  border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
  min-width: 10px;
  height: 8px;
  pointer-events: none;
  box-shadow: inset 0 1px transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.pure-material-textfield-outlined > input + span::before,
.pure-material-textfield-outlined > textarea + span::before {
  margin-right: 4px;
  border-left: solid 1px transparent;
  border-radius: 4px 0;
}

.pure-material-textfield-outlined > input + span::after,
.pure-material-textfield-outlined > textarea + span::after {
  flex-grow: 1;
  margin-left: 4px;
  border-right: solid 1px transparent;
  border-radius: 0 4px;
}

/* Hover */
.pure-material-textfield-outlined:hover > input,
.pure-material-textfield-outlined:hover > textarea {
  border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
  border-top-color: transparent;
}

.pure-material-textfield-outlined:hover > input + span::before,
.pure-material-textfield-outlined:hover > textarea + span::before,
.pure-material-textfield-outlined:hover > input + span::after,
.pure-material-textfield-outlined:hover > textarea + span::after {
  border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
}

.pure-material-textfield-outlined:hover > input:not(:focus):placeholder-shown,
.pure-material-textfield-outlined:hover
  > textarea:not(:focus):placeholder-shown {
  border-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.87);
}

/* Placeholder-shown */
.pure-material-textfield-outlined > input:not(:focus):placeholder-shown,
.pure-material-textfield-outlined > textarea:not(:focus):placeholder-shown {
  border-top-color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.6);
}

.pure-material-textfield-outlined > input:not(:focus):placeholder-shown + span,
.pure-material-textfield-outlined
  > textarea:not(:focus):placeholder-shown
  + span {
  font-size: inherit;
  line-height: 68px;
}

.pure-material-textfield-outlined
  > input:not(:focus):placeholder-shown
  + span::before,
.pure-material-textfield-outlined
  > textarea:not(:focus):placeholder-shown
  + span::before,
.pure-material-textfield-outlined
  > input:not(:focus):placeholder-shown
  + span::after,
.pure-material-textfield-outlined
  > textarea:not(:focus):placeholder-shown
  + span::after {
  border-top-color: transparent;
}

/* Focus */
.pure-material-textfield-outlined > input:focus,
.pure-material-textfield-outlined > textarea:focus {
  border-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
  border-top-color: transparent;
  box-shadow: inset 1px 0 var(--pure-material-safari-helper1),
    inset -1px 0 var(--pure-material-safari-helper1),
    inset 0 -1px var(--pure-material-safari-helper1);
  outline: none;
}

.pure-material-textfield-outlined > input:focus + span,
.pure-material-textfield-outlined > textarea:focus + span {
  color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
}

.pure-material-textfield-outlined > input:focus + span::before,
.pure-material-textfield-outlined > input:focus + span::after,
.pure-material-textfield-outlined > textarea:focus + span::before,
.pure-material-textfield-outlined > textarea:focus + span::after {
  border-top-color: var(--pure-material-safari-helper1) !important;
  box-shadow: inset 0 1px var(--pure-material-safari-helper1);
}

/* Disabled */
.pure-material-textfield-outlined > input:disabled,
.pure-material-textfield-outlined > input:disabled + span,
.pure-material-textfield-outlined > textarea:disabled,
.pure-material-textfield-outlined > textarea:disabled + span {
  border-color: rgba(
    var(--pure-material-onsurface-rgb, 0, 0, 0),
    0.38
  ) !important;
  border-top-color: transparent !important;
  color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  pointer-events: none;
}

.pure-material-textfield-outlined > input:disabled + span::before,
.pure-material-textfield-outlined > input:disabled + span::after,
.pure-material-textfield-outlined > textarea:disabled + span::before,
.pure-material-textfield-outlined > textarea:disabled + span::after {
  border-top-color: rgba(
    var(--pure-material-onsurface-rgb, 0, 0, 0),
    0.38
  ) !important;
}

.pure-material-textfield-outlined > input:disabled:placeholder-shown,
.pure-material-textfield-outlined > input:disabled:placeholder-shown + span,
.pure-material-textfield-outlined > textarea:disabled:placeholder-shown,
.pure-material-textfield-outlined > textarea:disabled:placeholder-shown + span {
  border-top-color: rgba(
    var(--pure-material-onsurface-rgb, 0, 0, 0),
    0.38
  ) !important;
}

.pure-material-textfield-outlined
  > input:disabled:placeholder-shown
  + span::before,
.pure-material-textfield-outlined
  > input:disabled:placeholder-shown
  + span::after,
.pure-material-textfield-outlined
  > textarea:disabled:placeholder-shown
  + span::before,
.pure-material-textfield-outlined
  > textarea:disabled:placeholder-shown
  + span::after {
  border-top-color: transparent !important;
}

/* Faster transition in Safari for less noticable fractional font-size issue */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .pure-material-textfield-outlined > input,
    .pure-material-textfield-outlined > input + span,
    .pure-material-textfield-outlined > textarea,
    .pure-material-textfield-outlined > textarea + span,
    .pure-material-textfield-outlined > input + span::before,
    .pure-material-textfield-outlined > input + span::after,
    .pure-material-textfield-outlined > textarea + span::before,
    .pure-material-textfield-outlined > textarea + span::after {
      transition-duration: 0.1s;
    }
  }
}
</style>
