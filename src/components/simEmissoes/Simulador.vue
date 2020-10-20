<template>
  <v-card
    v-if="$store.getters.emis_emissao_anual_calculada"
    elevation="5"
    class="my-7"
  >
    <v-card-title>
      <v-card
        dark
        color="amber darken-2"
        class="mt-n12 py-5 px-6 mr-3 elevation-5"
      >
        <v-icon class="mr-3">mdi-smoke-detector</v-icon>
        <small>Simulador de emissão de gases</small>
      </v-card>
    </v-card-title>
    <v-card-text class="pa-5">
      <!-- <div>
        <p class="text-center title font-weight-black">Simulador de Emissões</p>
      </div>-->
      <v-row justify="center" align="center">
        <v-tabs centered>
          <v-tab @click="modal = 'transporte_ferroviario'">
            <v-icon left>mdi-tram</v-icon>Ferroviário
          </v-tab>
          <v-tab @click="modal = 'transporte_rodoviario'">
            <v-icon left>mdi-train-car</v-icon>Rodoviário
          </v-tab>
          <v-tab @click="modal = 'transporte_hidroviario'">
            <v-icon left>mdi-water-boiler</v-icon>Hidroviário
          </v-tab>
          <v-tab @click="modal = 'transporte_cabotagem'">
            <v-icon left>mdi-ship-wheel</v-icon>Cabotagem
          </v-tab>

          <v-tab-item
            v-for="item in $store.getters.emis_entrada_consumo_especifico"
            :key="item.formula"
          >
            <v-card flat>
              <v-card-text>
                <v-row justify="center" align="center">
                  <v-col cols="10">
                    <v-card flat>
                      <v-card-text>
                        <center>
                          <span class="display-3 font-weight-black">
                            {{
                              $store.getters.emis_co2_fossil_total
                                | letterNumber
                            }}
                          </span>
                          <v-spacer></v-spacer>
                          <span class="text-center caption"
                            >CO2 FÓSSIL (t)</span
                          >
                        </center>
                      </v-card-text>
                    </v-card>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="10">
                    <v-card flat>
                      <v-card-text>
                        <center>
                          <span class="display-3 font-weight-black">{{
                            $store.getters.emis_co2e_total | letterNumber
                          }}</span>
                          <v-spacer></v-spacer>
                          <span class="text-center caption"
                            >CO2e FÓSSIL (t)</span
                          >
                        </center>
                      </v-card-text>
                    </v-card>
                    <v-divider></v-divider>
                  </v-col>
                  <v-col cols="10">
                    <v-card flat>
                      <v-card-text>
                        <center>
                          <span class="display-3 font-weight-black">
                            {{
                              $store.getters.emis_gco2_tku_total | letterNumber
                            }}
                          </span>
                          <v-spacer></v-spacer>
                          <span class="text-center caption"
                            >Total de emissões (gCO2/TKU)</span
                          >
                        </center>
                      </v-card-text>
                    </v-card>
                    <v-divider></v-divider>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center" align="center">
        <span
          v-for="v in $store.getters.emis_entrada_consumo_especifico"
          :key="v.formula"
        >
          <v-col cols="1" v-if="v.formula == modal">
            <NumberField
              :decimalPrecision="v.decimalPrecision"
              :formulaName="v.formula"
            />
          </v-col>
        </span>
        <v-col cols="1">
          <TkuAnual :modal="modal" />
        </v-col>
        <v-col cols="12">
          <v-row align="center" justify="center">
            <text-description />
          </v-row>
        </v-col>
      </v-row>
    </v-card-actions>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <v-row align="center" justify="center">
      <span class="text-center caption"
        >Use os icones acima para alterar o valores</span
      >
    </v-row>
  </v-card>
</template>

<script>
//import { mapGetters } from "vuex";
import NumberField from "@/components/simEmissoes/NumberField";
import TextDescription from "@/components/simEmissoes/TextDescription";
import TkuAnual from "@/components/simEmissoes/TkuAnual";
//const bigDecimal = require("js-big-decimal");
export default {
  name: "SimuladorEmissoes",
  components: {
    NumberField,
    TkuAnual,
    TextDescription,
  },

  watch: {
    modal(value) {
      this.$store.dispatch("emis_simulador", value);
    },
  },
  mounted() {
    this.$store.dispatch("emis_simulador", this.modal);
  },
  computed: {},
  filters: {
    letterNumber(value) {
      var num = value;
      num = num.split(".");
      var inteiro = num[0].replace(/,/g, ".");

      //var decimal = num[1];
      if (inteiro.length < 6) {
        return inteiro;
      } else if (inteiro.length < 8) {
        var milhar = inteiro.split(".");
        return milhar[0] + "K";
      } else if (inteiro.length < 12) {
        var milhao = inteiro.split(".");
        return milhao[0] + "M";
      } else if (inteiro.length < 16) {
        var bilhao = bilhao.split(".");
        return milhao[0] + "B";
      }
      {
        return inteiro;
      }
    },
  },

  data() {
    return {
      dialog: false,
      modal: "transporte_ferroviario",
      dados: null,
    };
  },
};
</script>
