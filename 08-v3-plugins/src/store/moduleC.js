export default {
  namespaced: true,
  state: () => ({
    count: 5
  }),
  mutations: {
    increment (state) {
      state.count++
    },
    addAmount (state, payload) {      
      state.count = state.count + payload
    }
  },  
  actions: {
    someAction ({ dispatch, commit, getters, rootGetters }) {
      commit('increment');
      commit('increment', null, { root: true });

      let payload = getters.tripleCount + rootGetters.tripleCount + rootGetters['moduleA/tripleCount'];
      dispatch('someOtherAction', payload);
      dispatch('someOtherAction', null, { root: true });
    },
    someOtherAction (ctx, payload) {
      ctx.commit('addAmount', payload)
    }
  },
  getters: {
    tripleCount (state) {
      return state.count * 3
    },
    sumOfAllTripleCounters (state, getters, rootState, rootGetters) {
      return getters.tripleCount + rootGetters.tripleCount + rootGetters['moduleA/tripleCount']
    }
  }
};
