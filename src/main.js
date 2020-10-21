import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import VueCurrencyFilter from "vue-currency-filter";
import VueTheMask from "vue-the-mask";
import VAnimateCss from "animate.css";
import Carousel3d from 'vue-carousel-3d';
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader


Vue.use(Carousel3d);

Vue.config.productionTip = false;

Vue.use(VueCurrencyFilter, {
  symbol: "R$",
  thousandsSeparator: ".",
  fractionCount: 2,
  fractionSeparator: ",",
  symbolPosition: "front",
  symbolSpacing: true,
});

Vue.use(VueTheMask, VAnimateCss);

new Vue({
  router,
  store,
  vuetify,
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  render: (h) => h(App),
}).$mount("#app");
