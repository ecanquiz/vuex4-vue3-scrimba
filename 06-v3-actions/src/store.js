import { createStore } from 'vuex'
import { getData, getOtherData } from './data'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    mutationA (state) {
      state.count += 10
    },
    mutationB (state) {
      state.count += 100
    },
    mutationC (state, ten) {      
      state.count -= ten
    },
    mutationD (state, hundred) {      
      state.count -= hundred
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('mutationA')
            resolve()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit('mutationB')
      })
    },
    async actionC ({ commit }) {      
      commit('mutationC', await getData())
    },
    async actionD ({ dispatch, commit} ) {
      await dispatch('actionC')
      commit('mutationD', await getOtherData())
    }
  }
});

