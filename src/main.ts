import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { CHECK_AUTH } from "./store/actions.type";

// Ensure we checked auth before each page load.
store.dispatch(CHECK_AUTH);

const app = createApp(App);
app.config.isCustomElement = (tag) => tag.startsWith("ion-");
app.use(router).use(store).mount("#app");
