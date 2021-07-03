import { createApp } from "vue";

import Highcharts from "highcharts";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./assets/sass/index.sass";

// import Vue from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

createApp(App)
  .use(store)
  .use(router)
  .use(Highcharts)

  .mount("#app");
