import subModule from './subModule'

export default {
  namespaced: true,
  modules: {
    subModule
  },
  state: () => ({
    count: 8
  }),
  mutations: { },
  getters: { },
  actions: { }
}
