<template>
  <v-row class="ma-5" justify="start" align="start">
    <v-col cols="12" class="animated fadeIn fast">
      <v-row align="start" justify="space-around">
        <v-col
          v-for="simulador in simuladores"
          :key="simulador.component"
          cols="12"
          :md="simulador.md"
          :lg="simulador.lg"
          :xl="simulador.xl"
        >
          <component :is="simulador.component" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import SimuladorHidroFerroHidro from "@/components/hidroFerroHidro/Simulador";
import SimuladorHidroRodoHidro from "@/components/hidroRodoHidro/Simulador";
import SimuladorRodoFerroRodo from "@/components/rodoFerroRodo/Simulador";
import SimuladorFerroFerro from "@/components/ferroFerro/Simulador";
import SimuladorEmpregos from "@/components/simEmpregos/Simulador";
import SimuladorEmissoes from "@/components/simEmissoes/Simulador";
export default {
  name: "Home",
  components: {
    SimuladorHidroFerroHidro,
    SimuladorHidroRodoHidro,
    SimuladorRodoFerroRodo,
    SimuladorFerroFerro,
    SimuladorEmpregos,
    SimuladorEmissoes,
  },
  data() {
    return {
      simuladores: [
        {
          nome: "CG - HIDRO-FERRO-HIDRO",
          component: "SimuladorHidroFerroHidro",
          md: "6",
          lg: "4",
          xl: "3",
        },
        {
          nome: "CG - HIDRO-RODO-HIDRO",
          component: "SimuladorHidroRodoHidro",
          md: "6",
          lg: "4",
          xl: "3",
        },
        {
          nome: "CG - RODO-FERRO-RODO",
          component: "SimuladorRodoFerroRodo",
          md: "6",
          lg: "4",
          xl: "3",
        },
        {
          nome: "CG - FERRO-FERRO",
          component: "SimuladorFerroFerro",
          md: "6",
          lg: "4",
          xl: "3",
        },
        {
          nome: "Sim - Empregos",
          component: "SimuladorEmpregos",
          md: "6",
          lg: "6",
          xl: "5",
        },
        {
          nome: "Sim - Emissões",
          component: "SimuladorEmissoes",
          md: "6",
          lg: "6",
          xl: "5",
        },
      ],
    };
  },
};
</script>
