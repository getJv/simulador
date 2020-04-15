<template>
  <v-tabs class="ma-2">
    <v-tab>Custo Variável</v-tab>
    <v-tab>Custo Fixo</v-tab>
    <v-tab>Equipamentos</v-tab>
    <v-tab>Recursos</v-tab>
    <v-tab>Variáveis de controle</v-tab>
    <v-tab-item>
      <CustoVariavel />
    </v-tab-item>
    <v-tab-item>
      <CustoFixo />
    </v-tab-item>
    <v-tab-item>
      <EquipamentoTransbordo />
    </v-tab-item>
    <v-tab-item>
      <Recursos />
    </v-tab-item>
    <v-tab-item>
      <VariaveisControle />
    </v-tab-item>
  </v-tabs>
</template>

<script>
import CustoFixo from "@/components/ferroFerro/CustoFixo";
import CustoVariavel from "@/components/ferroFerro/CustoVariavel";
import EquipamentoTransbordo from "@/components/ferroFerro/EquipamentoTransbordo";
import VariaveisControle from "@/components/ferroFerro/VariaveisControle";
import Recursos from "@/components/ferroFerro/Recursos";
export default {
  name: "tabs",
  components: {
    CustoFixo,
    CustoVariavel,
    EquipamentoTransbordo,
    VariaveisControle,
    Recursos
  }
};
</script>

<style></style>
