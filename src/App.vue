<template>
  <v-app>
    <!--     <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
    </v-app-bar> -->
    <v-content>
      <v-row justify="center" align="center" class="ma-2">
        <v-col cols="12" md="8" class="animated fadeInDown fast">
          <v-row justify="start" align="start">
            <v-col cols="12" lg="4">
              <v-card elevation="3">
                <v-card-text>
                  <v-row align="center">
                    <v-col cols="12">
                      <p class="text-center text-uppercase headline">
                        Selecione o Simulador de Transbordo
                      </p>
                      <v-divider class="mx-4"></v-divider>
                    </v-col>

                    <v-col cols="12">
                      <v-list shaped>
                        <v-subheader>Selecione uma opção</v-subheader>
                        <v-list-item-group color="primary">
                          <v-list-item
                            v-for="(item, i) in listaDeSimuladores"
                            :key="i"
                          >
                            <!-- <v-list-item-icon>
                              <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon> -->
                            <v-list-item-content
                              @click="simuladorSelecionado = item"
                            >
                              <v-list-item-title
                                v-text="item"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" lg="8" class="animated fadeIn fast">
              <v-card elevation="3">
                <v-img
                  crop
                  class="white--text align-end"
                  height="250px"
                  :src="carregarImagem"
                >
                  <v-card-title class="myTitle">
                    <span class="normalOpacity"
                      >Simulador de Transbordo -
                      {{ simuladorSelecionado }}</span
                    >
                  </v-card-title>
                </v-img>
                <v-card-text>
                  <component
                    class="animated fadeIn slow"
                    :is="carregarComponente"
                  ></component>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import SimuladorHidroFerroHidro from "@/components/hidroFerroHidro/Simulador";
import SimuladorHidroRodoHidro from "@/components/hidroRodoHidro/Simulador";
import SimuladorRodoFerroRodo from "@/components/rodoFerroRodo/Simulador";
import SimuladorFerroFerro from "@/components/ferroFerro/Simulador";

export default {
  name: "App",
  components: {
    SimuladorHidroFerroHidro,
    SimuladorHidroRodoHidro,
    SimuladorRodoFerroRodo,
    SimuladorFerroFerro,
  },
  computed: {
    listaDeSimuladores() {
      var lista = [];
      this.simuladores.forEach((item) => lista.push(item.nome));

      return lista;
    },
    carregarComponente() {
      return this.simuladores.find(
        (item) => item.nome == this.simuladorSelecionado
      ).component;
    },
    carregarImagem() {
      return this.simuladores.find(
        (item) => item.nome == this.simuladorSelecionado
      ).imagem;
    },
  },
  data() {
    return {
      simuladorSelecionado: "CG - FERRO-FERRO",
      simuladores: [
        {
          nome: "CG - HIDRO-FERRO-HIDRO",
          component: "SimuladorHidroFerroHidro",
          imagem: require("@/assets/hidro-ferro-hidro.jpg"),
        },
        {
          nome: "CG - HIDRO-RODO-HIDRO",
          component: "SimuladorHidroRodoHidro",
          imagem: require("@/assets/hidro-rodo-hidro.png"),
        },
        {
          nome: "CG - RODO-FERRO-RODO",
          component: "SimuladorRodoFerroRodo",
          imagem: require("@/assets/rodo-ferro-rodo.png"),
        },
        {
          nome: "CG - FERRO-FERRO",
          component: "SimuladorFerroFerro",
          imagem: require("@/assets/ferro-ferro.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.myTitle {
  background-color: green;
  opacity: 0.75;
}
.normalOpacity {
  opacity: 1;
}
</style>
