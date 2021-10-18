export default {
  namespaced: true,
  state: () => ({
  
  }),
  actions: {
    someAction: {
      root: true,
      handler (namespacedContext, payload) { } // -> 'someAction'
    }
  }
};
