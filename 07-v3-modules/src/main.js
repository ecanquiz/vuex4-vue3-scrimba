import { createApp } from 'vue'
import store from './store/'
import App from './App.vue'

createApp(App)
  .use(store)
  .mount('#app')

//store.commit('increment');
//store.commit('a/increment');
//console.log(store.state.a.count);
//console.log(store.state.b.count);

store.commit('increment');
store.commit('a/increment'); 
console.log(store.state.count);
console.log(store.state.a.count);
console.log(store.state.b.count);

store.commit('b/subModule/login');
store.dispatch('b/subModule/login');
//store.getters.login;
store.getters['b/subModule/login'];


