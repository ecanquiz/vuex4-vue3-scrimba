export const namespaced = true;

export const state = () => ({
  count: 3,
});

export const mutations = {
  increment(state) {
    state.count++;
  },
};

export const actions = {
  incrementIfOdd({ state, commit }) {
    if (state.count % 2 === 1) {
      commit("increment");
    }
  },
  incrementIfOddOnRootSum({ state, commit, rootState }) {
    if ((state.count + rootState.count) % 2 === 1) {
      commit("increment");
    }
  },
};

export const getters = {
  doubleCount(state) {
    return state.count * 2;
  },
  sumWithRootCount(state, getters, rootState) {
    return state.count + rootState.count;
  },
  tripleCount(state) {
    return state.count * 3;
  },
};
