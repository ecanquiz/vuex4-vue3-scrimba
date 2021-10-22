import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    //context object
    increment(context) {
      context.commit("increment");
    },
    //ES2015 argument destructuring
    decrement({ commit }) {
      commit("decrement");
    },
  },
});
