import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const moduleA = {
    state: { },
    mutations: { },
    getters: { },
    actions: { }
}

const moduleB = {
    state: { },
    mutations: { },
    getters: { },
    actions: { }
}

const store = createStore({
  state: {
    count: 2
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },  
  getters: { },
  actions: { },
  plugins: []
})

createApp(App)
  .use(store)
  .mount('#app')

// console.log(store.state.a.count);
// console.log(store.state.b.count);
