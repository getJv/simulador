import Vue from "vue";
import Vuex from "vuex";
import CgHidroFerroHidro from "./modules/cgHidroFerroHidro";
import CgHidroRodoHidro from "./modules/cgHidroRodoHidro";
import CgRodoFerroRodo from "./modules/cgRodoFerroRodo";
import CgFerroFerro from "./modules/cgFerroFerro";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    CgHidroFerroHidro,
    CgHidroRodoHidro,
    CgRodoFerroRodo,
    CgFerroFerro
  }
});
