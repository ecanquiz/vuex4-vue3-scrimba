<template>
  <div>
    <p>Todos: {{ todos }}</p>    
    <p>Done: {{doneTodos}}</p>
    <p>Completed Todos: {{ doneTodosCount }}</p>
    <p>Find By Id 2: {{ getTodoById(2) }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" >{{todo.text}} | {{todo.done}}</li>
    </ul>    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {

  computed: {
    todos () { return this.$store.state.todos },
    /*
       doneTodos () { return this.$store.getters.doneTodos },
       doneTodosCount () { return this.$store.getters.doneTodosCount },
       getTodoById () { return id => this.$store.getters.getTodoById(id) },
    */
    ...mapGetters([
      'doneTodos',
      'doneTodosCount',
      'getTodoById',
    ])
  }

};
</script>

