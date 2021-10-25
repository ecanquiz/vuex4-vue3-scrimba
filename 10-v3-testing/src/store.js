import { createStore } from 'vuex'

export const state = {
  count: 0 ,
  products: [
    { id: 1, title: 'Apple', category: 'fruit' },
    { id: 2, title: 'Orange', category: 'fruit' },
    { id: 3, title: 'Carrot', category: 'vegetable' }
  ]
};

export const mutations = {
  increment (state) { state.count++ }  
};

export const actions = {    
  incrementAsync ({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
};

export const getters = {
  filteredProducts (state) {
    return ({filterCategory}) => 
      state.products.filter(product => 
        product.category === filterCategory)
  }  
};

export default createStore({
  state,
  mutations,
  actions,
  getters
});
