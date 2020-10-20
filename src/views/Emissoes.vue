<template>
  <v-row
    class="local-body py-8"
    :style="{ backgroundImage: `url(${backgroundUrl})` }"
    align="center"
    justify="space-around"
    ><v-col cols="12" class="pb-10 pt-12"></v-col>
    <v-col cols="12" sm="8" md="8" lg="6" class="pb-10 pt-12">
      <simuladorEmissoes />
    </v-col>
  </v-row>
</template>

<script>
import SimuladorEmissoes from "@/components/simEmissoes/Simulador";
import backgroundUrl from "@/assets/pexels-marcin-jozwiak-3634730-opaco.jpg";
export default {
  name: "Emissoes",

  components: {
    SimuladorEmissoes,
  },
  data() {
    return {
      backgroundUrl,
    };
  },
};
</script>
<style scoped>
.local-body {
  height: 100%;
  width: 100%;
  background-repeat: repeat-y;
  margin: 0;
}
</style>
