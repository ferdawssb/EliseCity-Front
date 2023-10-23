import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-toast-notification/dist/theme-sugar.css";
import VueToast from "vue-toast-notification";

const app = createApp(App);
app.use(VueToast, {
  position: "top-right", // Position de la notification
});

app.use(router);

app.mount("#app");
