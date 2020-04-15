<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <p class="text-center text-uppercase headline">
        <span>Variáveis de entrada</span>
      </p>
      <v-divider class="mx-4"></v-divider>
    </v-col>
    <v-col cols="12" sm="4" v-for="v in cg_hrh_variaveis_de_entrada" :key="v.id">
      <v-text-field
        outlined
        :id="v.formula"
        :label="v.nome"
        :value="v.valor"
        @input.native="updateValue"
      />
    </v-col>
    <v-col cols="12" class="green darken-2">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-text>
              <p class="subtitle">Tarifa</p>
              <p class="text-center headline">
                {{
                cg_hrh_getVar(
                "cg_hrh_variaveis_de_ctrl",
                "cg_hrh_ctrl_tarifa"
                ).valor | currency
                }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-dialog v-model="dialog" width="1500">
                <template v-slot:activator="{ on }">
                  <v-btn outlined block class="text-center" v-on="on">Ver Detalhamento</v-btn>
                </template>

                <v-card>
                  <v-card-title
                    class="headline grey lighten-2"
                    primary-title
                  >Detalhamento da simulação</v-card-title>

                  <v-card-text>
                    <Tabs />
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">Fechar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Tabs from "@/components/hidroRodoHidro/Tabs";
import { mapGetters } from "vuex";

export default {
  name: "Simulador",
  components: {
    Tabs
  },
  methods: {
    updateValue(e) {
      this.$store.dispatch(e.target.id, e.target.value);
    },
    recalcula() {
      this.iniciar_variaveis_de_entrada();
      this.iniciar_variaveis_de_controle();
      this.iniciar_custos_variaveis();
      this.iniciar_custos_fixos();
      this.iniciar_variaveis_de_controle();
    },
    iniciar_variaveis_de_entrada() {
      var ordem = this.cg_hrh_variaveis_de_entrada.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach(item => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + " - " + item.formula + " Iniciado");
      });
    },
    iniciar_variaveis_de_controle() {
      var ordem = this.cg_hrh_variaveis_de_ctrl.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach(item => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + ' - ' + item.formula + ' Iniciado')
      });
    },
    iniciar_custos_variaveis() {
      var ordem = this.cg_hrh_custos_variaveis.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach(item => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + ' - ' + item.formula + ' Iniciado')
      });
    },
    iniciar_custos_fixos() {
      var ordem = this.cg_hrh_custos_fixos.sort((a, b) => a.ordem - b.ordem);
      ordem.forEach(item => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + ' - ' + item.formula + ' Iniciado')
      });
    }
  },
  mounted() {
    this.recalcula();
  },
  computed: {
    ...mapGetters([
      "cg_hrh_getVar",
      "cg_hrh_variaveis_de_entrada",
      "cg_hrh_variaveis_de_ctrl",
      "cg_hrh_custos_variaveis",
      "cg_hrh_custos_fixos"
    ])
  },

  data() {
    return {
      dialog: false,

      rules: [
        value => {
          const pattern = /^[0-9]*(,{1})?([0-9]*)?$/;
          return pattern.test(value) || "Formato inválido";
        }
      ]
    };
  }
};
</script>
