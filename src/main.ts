import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueAxios from "vue-axios";
import axios from "axios";

import { CHECK_AUTH } from "./store/actions.type";

// Ensure we checked auth before each page load.
store.dispatch(CHECK_AUTH);

createApp(App).use(router).use(store).use(VueAxios, axios).mount("#app");
