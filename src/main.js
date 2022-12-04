import { createApp } from "vue";
import { createPinia } from "pinia";
import urql from "@urql/vue";

import App from "./App.vue";
import router from "./router";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, fa } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@fortawesome/fontawesome-free/css/all.css";

const pinia = createPinia();

const backendURL = import.meta.env.VITE_BACKEND_URL;

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
});

import "./assets/main.css";

const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.use(router);
app.use(urql, {
  url: backendURL,
  fetchOptions: () => {
    const token = "";
    return {
      headers: { Authorization: token ? `Bearer ${token}` : "" },
    };
  },
});

app.mount("#app");
