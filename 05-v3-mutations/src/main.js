import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementBy(state, payload) {
      state.count += payload.value;
    },
  },
});

createApp(App).use(store).mount("#app");
