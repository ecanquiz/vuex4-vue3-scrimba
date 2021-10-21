import { createStore, createLogger } from 'vuex'
import moduleA from './moduleA'
import moduleB from './moduleB'
import moduleC from './moduleC'

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()] : [],
  modules: {
    moduleA,
    moduleB,    
    moduleC
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
  actions: {
    asyncIncrement ({dispatch}) {
      setTimeout(() => {
        dispatch('someOtherAction')
      }, 1000)
    },
    someOtherAction ({commit}) {    
      commit('increment')
    }
  },
  getters: {  
    tripleCount (state) {
      return state.count * 3
    }  
  }
});

