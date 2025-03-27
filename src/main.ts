import { createApp } from "vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import App from "./App.vue";
import router from "./router";
// import ToastPlugin from 'vue-toast-notification';

// Import BootstrapVue 3
// import BootstrapVue3 from "bootstrap-vue-3";

// Import CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "./css/style.css";
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

// Buat aplikasi Vue
const app = createApp(App);

// Gunakan Plugin
app.use(router);
app.use(VueQueryPlugin);
// app.use(ToastPlugin);
// app.use(BootstrapVue3);

app.mount("#app");
