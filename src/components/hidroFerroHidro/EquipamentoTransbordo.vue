<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="4">
      <v-card class="mx-auto mt-5" color="green green-ligthen-3" dark max-width="400">
        <v-card-title>
          <span class="title font-weight-light text-uppercase">Custo total do maquinário</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{ cg_hfh_eqt_total_maquinario | currency }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card class="mx-auto mt-5" color="green green-ligthen-3" dark max-width="400">
        <v-card-title>
          <span class="title font-weight-light text-uppercase">Valor total da depreciação</span>
        </v-card-title>

        <v-card-text class="headline font-weight-bold text-center">
          <v-divider class="pa-2"></v-divider>
          {{ cg_hfh_eqt_total_depreciacao | currency }}
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="10">
      <v-card>
        <v-card-title>Detalhamento dos equipamentos de transbordo</v-card-title>
        <v-card-text>
          <v-data-table
            disable-pagination
            hide-default-footer
            :headers="headers"
            :items="cg_hfh_equipamentos_de_transbordo"
          >
            <template v-slot:item.valor="{ item }">
              <span v-if="item.filters.find(item => item == 'currency')">{{ item.valor | currency }}</span>
              <span v-else>{{ item.valor }}</span>
            </template>
            <template v-slot:item.valor_total="{ item }">
              <span
                v-if="item.filters.find(item => item == 'currency')"
              >{{ item.valor_total | currency }}</span>
              <span v-else>{{ item.valor_total }}</span>
            </template>
            <template v-slot:item.depreciacao="{ item }">
              <span
                v-if="item.filters.find(item => item == 'currency')"
              >{{ item.depreciacao | currency }}</span>
              <span v-else>{{ item.depreciacao }}</span>
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
  name: "equipamento-de-transbordo",
  computed: {
    ...mapGetters([
      "cg_hfh_equipamentos_de_transbordo",
      "cg_hfh_eqt_total_maquinario",
      "cg_hfh_eqt_total_depreciacao"
    ])
  },
  data() {
    return {
      headers: [
        { text: "Quant.", value: "quantidade" },
        { text: "Equipamento", value: "nome" },
        { text: "Valor Unit.", value: "valor" },
        { text: "Valor Total", value: "valor_total" },
        { text: "Depreciação", value: "depreciacao" }
      ]
    };
  }
};
</script>

<style></style>
