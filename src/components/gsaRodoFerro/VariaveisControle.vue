<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="3">
      <v-card
        class="mx-auto mb-5"
        color="green green-ligthen-3"
        dark
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light text-uppercase"
            >Tarifa Limpa</span
          >
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{
            gsa_rf_getVar(
              "gsa_rf_variaveis_de_ctrl",
              "gsa_rf_ctrl_tarifa_limpa"
            ).valor | currency
          }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3">
      <v-card
        class="mx-auto mb-5"
        color="green green-ligthen-3"
        dark
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light text-uppercase">Lucro</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{
            gsa_rf_getVar("gsa_rf_variaveis_de_ctrl", "gsa_rf_ctrl_lucro")
              .valor | currency
          }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="3">
      <v-card
        class="mx-auto mb-5"
        color="green green-ligthen-3"
        dark
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light text-uppercase">Tributos</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{
            gsa_rf_getVar("gsa_rf_variaveis_de_ctrl", "gsa_rf_ctrl_tributos")
              .valor | currency
          }}
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="10">
      <v-card>
        <v-card-title>Detalhamento das variáveis de controle</v-card-title>
        <v-card-text>
          <v-data-table
            disable-pagination
            hide-default-footer
            :headers="headers"
            :items="gsa_rf_variaveis_de_ctrl"
          >
            <template v-slot:item.valor="{ item }">
              <span v-if="item.filters.find((item) => item == 'currency')">{{
                item.valor | currency
              }}</span>
              <span
                v-else-if="item.filters.find((item) => item == 'percent')"
                >{{ item.valor | percent }}</span
              >
              <span v-else-if="item.filters.find((item) => item == 'point')">{{
                item.valor | point
              }}</span>
              <span v-else>{{ item.valor }}</span>
            </template>
            <template v-slot:no-data>
              <p>Nenhum item cadastrado</p>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "VariaveisControle",

  computed: {
    ...mapGetters(["gsa_rf_getVar", "gsa_rf_variaveis_de_ctrl"]),
  },
  filters: {
    percent: function(value) {
      if (!value || value == 0) return "0%";
      value = value * 100;
      value = value.toString().replace(".", ",");
      return value + "%";
    },
    point: function(value) {
      if (!value || value == 0) return 0;
      value = value.toString().replace(".", ",");
      return value;
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Item",
          align: "left",
          value: "nome",
        },
        { text: "Valor", value: "valor" },
      ],
    };
  },
};
</script>

<style></style>
