import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "font-awesome/css/font-awesome.css";
import axios from "axios";
let Base64 = require("js-base64").Base64;

Vue.prototype.base64 = Base64;
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
