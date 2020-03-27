import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueDropdown from "vue-dynamic-dropdown";
Vue.component("vue-dropdown", VueDropdown);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
