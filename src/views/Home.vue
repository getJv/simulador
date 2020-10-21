<template>
<div
  class="local-body pt-1"
  :style="`backgroundImage: url(${backgroundUrl}); height: 100vh`"
>
    
        <carousel-3d
            :border="0"
            height="900"
            width="700"
            :controls-visible="true"
        >
        
          <slide 
            v-for="(simulador,index) in simuladores"
            :key="simulador.component"
            :index="index"
          >
          
             <component :is="simulador.component" />
          
            
          </slide>
         
        </carousel-3d>
    
  </div>
</template>

<script>
import backgroundUrl from "@/assets/pexels-marcin-jozwiak-3634730-opaco.jpg";
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
      backgroundUrl,
      simuladores: [
        {
          nome: "Sim - Emissões",
          component: "SimuladorEmissoes",
          md: "6",
          lg: "6",
          xl: "5",
        },
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
        
      ],
    };
  },
};
</script>

<style>
.carousel-3d-slide{
  background-color: transparent !important; 
}
.local-body {
  height: 100%;
  width: 100%;
  background-repeat: repeat-y;
  margin: 0;
}
</style>
