import { createStore, createLogger } from "vuex";
import * as moduleA from "./moduleA";
import * as moduleB from "./moduleB";
import * as moduleC from "./moduleC";

export const state = () => ({
  count: 2,
});

export const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

export const actions = {
  asyncIncrement({ dispatch }) {
    setTimeout(() => {
      dispatch("someOtherAction");
    }, 1000);
  },
  someOtherAction({ commit }) {
    commit("increment");
  },
};

export const getters = {
  tripleCount(state) {
    return state.count * 3;
  },
};

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  plugins: process.env.NODE_ENV !== "production" ? [createLogger()] : [],
  modules: {
    moduleA,
    moduleB,
    moduleC,
  },
  state,
  mutations,
  actions,
  getters,
});
