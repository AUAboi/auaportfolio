import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import "./styles/app.css";

axios.defaults.baseURL = "//localhost:5000/";

const app = createApp(App);

app.mount("#app");
