import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state: {
    message: 'Hello Vuex',
  },
  mutations: { }
})

createApp(App)
  .use(store)
  .mount('#app')
