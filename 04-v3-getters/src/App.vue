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
  import { ref, computed } from 'vue';
  import { useStore } from "vuex";

  export default {
    setup() {
      const store = useStore();

      return {
        todos: computed(() => store.state.todos),
        doneTodos: computed(() => store.getters.doneTodos),
        doneTodosCount: computed(() => store.getters.doneTodosCount),
        getTodoById: id => store.getters.getTodoById(id)
      }
    }
  };
</script>


