<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="6">
      <v-card
        class="mx-auto mt-5"
        color="green green-ligthen-3"
        dark
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light text-uppercase"
            >Total do valor unitário dos recursos</span
          >
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{ cg_hrh_rec_total_unitario_valores | currency }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6">
      <v-card
        class="mx-auto mt-5"
        color="green green-ligthen-3"
        dark
        max-width="400"
      >
        <v-card-title>
          <span class="title font-weight-light text-uppercase"
            >Total do valor dos recursos</span
          >
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{ cg_hrh_rec_total_recursos | currency }}
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
            :items="cg_hrh_tbl_recursos"
          >
            <template v-slot:item.valor="{ item }">
              <span v-if="item.filters.find(item => item == 'currency')">{{
                item.valor | currency
              }}</span>
              <span v-else>{{ item.valor }}</span>
            </template>
            <template v-slot:item.total="{ item }">
              <span v-if="item.filters.find(item => item == 'currency')">{{
                item.total | currency
              }}</span>
              <span v-else>{{ item.total }}</span>
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
    ...mapGetters([
      "cg_hrh_rec_total_unitario_valores",
      "cg_hrh_rec_total_recursos",
      "cg_hrh_tbl_recursos"
    ])
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
        { text: "Valor", value: "valor" },
        { text: "Unidade", value: "unidade" },
        { text: "Quantidade", value: "quantidade" },
        { text: "Total", value: "total" }
      ]
    };
  }
};
</script>

<style></style>
