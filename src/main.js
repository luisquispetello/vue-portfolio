import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import { createHead } from "@vueuse/head";
import VueGtag from "vue-gtag";


const head = createHead();
const app = createApp(App);
app.use(head);
app.use(router);
app.use(MotionPlugin);
app.use(
  VueGtag,
  {
    appName: "My portfolio",
    pageTrackerScreenviewEnabled: true,
    config: { id: process.env.VUE_APP_GTAG },
  },
  router
);
app.mount("#app");
