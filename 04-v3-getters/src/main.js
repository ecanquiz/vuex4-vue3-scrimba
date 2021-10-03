import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state: {
       todos: [
           { id: 1, text: '...', done: true },
           { id: 2, text: '...', done: false },
       ]
  }    
})

createApp(App)
  .use(store)
  .mount('#app')

