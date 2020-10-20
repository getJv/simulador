import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import Emissoes from "../views/Emissoes.vue";

Vue.use(VueRouter);

const routes = [
  /* {
    path: "/",
    name: "Home",
    component: Home,
  }, */
  {
    // Rota temporaria para lançamento adiantado do simulador de emissoes
    path: "/",
    name: "Emissoes",
    component: Emissoes,
  },
  {
    path: "/emissoes",
    name: "Emissoes",
    component: Emissoes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
