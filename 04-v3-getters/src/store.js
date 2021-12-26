import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
    ]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount (state, getters) {
      return getters.doneTodos.length
    },    
    getTodoById (state) { 
      return id => state.todos.find(todo => todo.id === id)
    }    
  }
});

