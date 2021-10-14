import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state: {
    count: 0,
  },
});

createApp(App).use(store).mount("#app");
