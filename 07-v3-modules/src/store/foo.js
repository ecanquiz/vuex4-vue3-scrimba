export default {
  namespaced: true,
  state: () => ({ }),
  getters: {
    // `getters` is localized to this module's getters
    // you can use rootGetters via 4th argument of getters
    someGetter (state, getters, rootState, rootGetters) {
      getters.someOtherGetter // -> 'foo/someOtherGetter'
      rootGetters.someOtherGetter // -> 'someOtherGetter'
      rootGetters['bar/someOtherGetter'] // -> 'bar/someOtherGetter'
    },
    someOtherGetter: state => { }
  },

  actions: {
    // dispatch and commit are also localized for this module
    // they will accept `root` option for the root dispatch/commit
    someAction ({ dispatch, commit, getters, rootGetters }) {
      getters.someGetter // -> 'foo/someGetter'
      rootGetters.someGetter // -> 'someGetter'
      rootGetters['bar/someGetter'] // -> 'bar/someGetter'

      dispatch('someOtherAction') // -> 'foo/someOtherAction'
      dispatch('someOtherAction', null, { root: true }) // -> 'someOtherAction'

      commit('someMutation') // -> 'foo/someMutation'
      commit('someMutation', null, { root: true }) // -> 'someMutation'
    },
    someOtherAction (ctx, payload) { }
  }
};
