import { createStore } from "vuex";

export const store = createStore({
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
