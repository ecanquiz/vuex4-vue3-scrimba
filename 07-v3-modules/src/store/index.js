import { createStore } from 'vuex'
import moduleA from './moduleA'
import moduleB from './moduleB'
import account from './account'
import foo from './foo'

export default createStore({
  modules: {
    a: moduleA,
    b: moduleB,
    account,
    foo
  },
  state: () => ({
    count: 2
  }),
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },  
  getters: { },
  actions: {
    someOtherAction ({dispatch}) {
      dispatch('someAction')
    }
  }
});

