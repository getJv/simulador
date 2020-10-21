<template>
<v-row align="center" justify="center" style="height: 100vh" class="pa-5">
<v-col cols="12" :md="8" >
  <v-card elevation="5" class="my-7">
    <v-card-title>
      <v-card
        dark
        color="green lighten-1"
        class="mt-n12 py-5 px-6 mr-3 elevation-5"
      >
        <v-icon>mdi-car-shift-pattern</v-icon>
        <small> Carga Geral </small>
      </v-card>
    </v-card-title>
    <v-card-text class="pa-5">
      <div>
        <p class="text-center title font-weight-black">Hidro-Rodo-Hidro</p>
      </div>
      <v-row justify="center" align="center">
        R$
        <span class="ml-3 display-3 font-weight-black">
          {{ getResult[0] }}
        </span>
        <span class="title pt-10"> ,{{ getResult[1] }} </span>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center" align="center">
        <v-col cols="2" v-for="v in cg_hrh_variaveis_de_entrada" :key="v.id">
          <NumberField :formulaName="v.formula" />
        </v-col>
      </v-row>
    </v-card-actions>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <v-row align="center" justify="center">
      <span class="text-center caption">Valor estimado da tarifa</span>
    </v-row>
  </v-card>
</v-col>
</v-row>
</template>

<script>
import NumberField from "@/components/hidroRodoHidro/NumberField";
import { mapGetters } from "vuex";

export default {
  name: "Simulador",

  components: {
    NumberField,
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
      ordem.forEach((item) => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + " - " + item.formula + " Iniciado");
      });
    },
    iniciar_variaveis_de_controle() {
      var ordem = this.cg_hrh_variaveis_de_ctrl.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach((item) => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + ' - ' + item.formula + ' Iniciado')
      });
    },
    iniciar_custos_variaveis() {
      var ordem = this.cg_hrh_custos_variaveis.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach((item) => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + ' - ' + item.formula + ' Iniciado')
      });
    },
    iniciar_custos_fixos() {
      var ordem = this.cg_hrh_custos_fixos.sort((a, b) => a.ordem - b.ordem);
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
    getResult() {
      var valor = this.cg_hrh_getVar(
        "cg_hrh_variaveis_de_ctrl",
        "cg_hrh_ctrl_tarifa"
      ).valor;
      valor = Math.round(valor * 100) / 100;

      return (valor + "").split(".");
    },
    ...mapGetters([
      "cg_hrh_getVar",
      "cg_hrh_variaveis_de_entrada",
      "cg_hrh_variaveis_de_ctrl",
      "cg_hrh_custos_variaveis",
      "cg_hrh_custos_fixos",
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
