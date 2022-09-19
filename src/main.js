import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import VueGtag from "vue-gtag";

const app = createApp(App);
app.use(router);
app.use(MotionPlugin);
app.use(
  VueGtag,
  {
    appName: "My portfolio",
    pageTrackerScreenviewEnabled: true,
    config: { id: "G-7X8SJCVBFY" },
  },
  router
);
app.mount("#app");
