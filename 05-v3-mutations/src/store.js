import { createStore } from "vuex";
import { INCREMENT, INCREMENT_BY } from './mutation-types'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    //increment (state) {
    [INCREMENT] (state) {
      state.count++
    },
    //incrementBy (state, payload) {
    [INCREMENT_BY] (state, payload) {
      state.count += payload.amount
    }
  }
});

