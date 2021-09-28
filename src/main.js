import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import VueEasyLightbox from "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.es5.esm.min.js";

import "./styles/app.css";

import "vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css";

axios.defaults.baseURL = "https://auaportfolio.herokuapp.com/";

const app = createApp(App);
app.use(VueEasyLightbox);
app.mount("#app");
