import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state: {
    count: 0 ,
    products: [
      { id: 1, title: 'Apple', category: 'fruit' },
      { id: 2, title: 'Orange', category: 'fruit' },
      { id: 3, title: 'Carrot', category: 'vegetable' }
    ]
  },
  mutations: {
    increment (state) { state.count++ }  
  }
})

createApp(App)
  .use(store)
  .mount('#app')


// Testing
mocha.setup('bdd');
let assert = chai.assert;
let expect = chai.expect;

mocha.run();
