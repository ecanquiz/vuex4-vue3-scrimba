import { createStore } from "vuex";

export default createStore({
  state: {
    message: "Hello Vuex"
  },
  mutations: {
    updateMessage(state, message) {
      state.message = message;
    }
  }
});
