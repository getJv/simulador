<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="6">
      <v-card class="mx-auto mt-5" color="green green-ligthen-3" dark max-width="400">
        <v-card-title>
          <span class="title font-weight-light text-uppercase">Total dos Custos Variáveis</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{ cg_hfh_cv_total | currency }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10">
      <v-card>
        <v-card-title>Detalhamento dos custos Variáveis</v-card-title>
        <v-card-text>
          <v-data-table
            disable-pagination
            hide-default-footer
            :headers="headers"
            :items="cg_hfh_custos_variaveis"
          >
            <template v-slot:item.valor="{ item }">
              <span v-if="item.filters.find(item => item == 'currency')">{{ item.valor | currency }}</span>
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
  name: "CustoVariavel",
  computed: {
    ...mapGetters(["cg_hfh_cv_total", "cg_hfh_custos_variaveis"])
  },
  data() {
    return {
      headers: [
        {
          text: "Item",
          align: "start",
          sortable: false,
          value: "nome"
        },
        { text: "Valor", value: "valor" }
      ]
    };
  }
};
</script>

<style></style>
