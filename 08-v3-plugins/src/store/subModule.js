export const namespaced = true;

export const state = () => ({
  count: 4,
});

export const mutations = {
  increment(state) {
    state.count++;
  },
};

export const actions = {
  asyncIncrement({ commit }) {
    setTimeout(() => {
      commit("increment");
    }, 1000);
  },
};

export const getters = {
  doubleCount(state) {
    return state.count * 2;
  },
};
