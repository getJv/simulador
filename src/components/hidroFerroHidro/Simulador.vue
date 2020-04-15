<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="6"
      ><v-card outlined>
        <v-card-text>
          <v-row justify="center" align="center">
            <v-col cols="12" md="3">
              <NumberField
                v-for="v in cg_hfh_variaveis_de_entrada"
                :key="v.id"
                :formulaName="v.formula"
              />
            </v-col>
            <v-col cols="12" md="9">
              <p class="text-center subtitle-2">Tarifa</p>
              <p class="text-center display-3 font-weight-black">
                {{
                  cg_hfh_getVar(
                    "cg_hfh_variaveis_de_ctrl",
                    "cg_hfh_ctrl_tarifa"
                  ).valor | currency
                }}
              </p>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-dialog v-model="dialog" width="1500">
            <template v-slot:activator="{ on }">
              <v-btn outlined small block class="text-center" v-on="on"
                >Ver Detalhamento</v-btn
              >
            </template>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title
                >Detalhamento da simulação</v-card-title
              >

              <v-card-text>
                <Tabs />
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false"
                  >Fechar</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-actions>
      </v-card></v-col
    >
  </v-row>
</template>

<script>
import Tabs from "@/components/hidroFerroHidro/Tabs";
import NumberField from "@/components/hidroFerroHidro/NumberField";
import { mapGetters } from "vuex";

export default {
  name: "Simulador",
  components: {
    Tabs,
    NumberField,
  },
  methods: {
    /*     updateValue(e) {
      console.log(this[e.target.id]);
      if (this[e.target.id] != !e.target.value)
        this.$store.dispatch(e.target.id, e.target.value.replace(",", "."));
    }, */
    recalcula() {
      this.iniciar_variaveis_de_entrada();
      this.iniciar_variaveis_de_controle();
      this.iniciar_custos_variaveis();
      this.iniciar_custos_fixos();
      this.iniciar_variaveis_de_controle();
    },
    iniciar_variaveis_de_entrada() {
      var ordem = this.cg_hfh_variaveis_de_entrada.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach((item) => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + " - " + item.formula + " Iniciado");
      });
    },
    iniciar_variaveis_de_controle() {
      var ordem = this.cg_hfh_variaveis_de_ctrl.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach((item) => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + ' - ' + item.formula + ' Iniciado')
      });
    },
    iniciar_custos_variaveis() {
      var ordem = this.cg_hfh_custos_variaveis.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach((item) => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + ' - ' + item.formula + ' Iniciado')
      });
    },
    iniciar_custos_fixos() {
      var ordem = this.cg_hfh_custos_fixos.sort((a, b) => a.ordem - b.ordem);
      ordem.forEach((item) => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + ' - ' + item.formula + ' Iniciado')
      });
    },
  },
  mounted() {
    this.recalcula();
  },
  computed: {
    ...mapGetters([
      "cg_hfh_getVar",
      "cg_hfh_variaveis_de_entrada",
      "cg_hfh_variaveis_de_ctrl",
      "cg_hfh_custos_variaveis",
      "cg_hfh_custos_fixos",
    ]),
  },

  data() {
    return {
      dialog: false,

      rules: [
        (value) => {
          const pattern = /^[0-9]*(,{1})?([0-9]*)?$/;
          return pattern.test(value) || "Formato inválido";
        },
      ],
    };
  },
};
</script>
