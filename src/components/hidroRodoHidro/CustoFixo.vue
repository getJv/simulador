<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <v-card
        class="mx-auto mt-5"
        color="green green-ligthen-3"
        dark
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light text-uppercase"
            >Total dos custos fixos</span
          >
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{ cg_hrh_cf_total | currency }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10">
      <v-card>
        <v-card-title>Detalhamento dos custos fixos</v-card-title>
        <v-card-text>
          <v-data-table
            disable-pagination
            hide-default-footer
            :headers="headers"
            :items="cg_hrh_custos_fixos"
          >
            <template v-slot:item.valor="{ item }">
              <span v-if="item.filters.find(item => item == 'currency')">{{
                item.valor | currency
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
  name: "CustoFixo",
  computed: {
    ...mapGetters(["cg_hrh_cf_total", "cg_hrh_custos_fixos"])
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
