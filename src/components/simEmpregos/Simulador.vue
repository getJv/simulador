<template>
  <v-card v-if="emp_result" elevation="5" class="my-7">
    <v-card-title>
      <v-card dark color="orange darken-5" class="mt-n12 py-5 px-6 mr-3 elevation-5">
        <v-icon class="mr-3">mdi-account-group</v-icon>
        <small>Empregos</small>
      </v-card>
    </v-card-title>
    <v-card-text class="pa-5">
      <div>
        <p class="text-center title font-weight-black">Simulador de empregos</p>
      </div>
      <v-row justify="center" align="center">
        <v-radio-group v-model="tipo" row>
          <v-radio label="Todos" value="todos"></v-radio>
          <v-radio label="CAPEX" value="CAPEX"></v-radio>
          <v-radio label="OPEX" value="OPEX"></v-radio>
        </v-radio-group>
        <v-data-table
          :headers="headers"
          :items="getItems"
          hide-default-footer
          class="pa-2 elevation-1"
        >
          <template
            v-slot:item.total="{ item }"
          >{{item.diretos + item.indiretos + item.efeito_renda }}</template>
          <template v-if="tipo == 'todos'" v-slot:body.append>
            <tr>
              <td>Total</td>
              <td>{{getItems.reduce((acc,item) => acc += item.diretos,0)}}</td>
              <td>{{getItems.reduce((acc,item) => acc += item.indiretos,0)}}</td>
              <td>{{getItems.reduce((acc,item) => acc += item.efeito_renda,0)}}</td>
              <td>
                {{
                emp_result.reduce((acc,item) => acc += item.diretos,0) +
                emp_result.reduce((acc,item) => acc += item.indiretos,0) +
                emp_result.reduce((acc,item) => acc += item.efeito_renda,0)
                }}
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center" align="center">
        <v-col cols="2" v-for="v in getVariaveisDeEntrada" :key="v.id">
          <NumberField :decimalPrecision="v.decimalPrecision" :formulaName="v.formula" />
        </v-col>
      </v-row>
    </v-card-actions>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <v-row align="center" justify="center">
      <span class="text-center caption">Quantidade estimada de pessoas</span>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import NumberField from "@/components/simEmpregos/NumberField";

export default {
  name: "SimuladorEmpregos",
  components: {
    NumberField
  },
  methods: {
    iniciar_variaveis_de_entrada() {
      var ordem = this.emp_variaveis_de_entrada.sort(
        (a, b) => a.ordem - b.ordem
      );
      ordem.forEach(item => {
        this.$store.dispatch(item.formula);
        //console.log(item.ordem + " - " + item.formula + " Iniciado");
      });
    }
  },
  mounted() {
    this.iniciar_variaveis_de_entrada();
  },
  computed: {
    getItems() {
      if (this.tipo == "CAPEX") {
        return this.emp_result.filter(item => item.tipo == "CAPEX");
      } else if (this.tipo == "OPEX") {
        return this.emp_result.filter(item => item.tipo == "OPEX");
      } else {
        return this.emp_result;
      }
    },
    getVariaveisDeEntrada() {
      if (this.tipo != "todos") {
        return this.emp_variaveis_de_entrada.filter(
          item => item.tipo == this.tipo
        );
      } else {
        return this.emp_variaveis_de_entrada;
      }
    },

    ...mapGetters(["emp_variaveis_de_entrada", "emp_result"])
  },

  data() {
    return {
      dialog: false,
      tipo: "todos",

      headers: [
        {
          text: "Investimento",
          sortable: false,
          value: "tipo"
        },
        {
          text: "Diretos",
          sortable: false,
          value: "diretos"
        },
        { text: "Indiretos", value: "indiretos" },
        { text: "Efeito Renda", value: "efeito_renda" },
        { text: "Total", value: "total" }
      ]
    };
  }
};
</script>
