<template>
  <div>
    {{ todos }}
    <!-- Completed Todos: {{ doneTodosCount }} -->
    <!--ul>
      <li v-for="todo in todos" :key="todo.id" >{{todo.text}} | {{todo.done}}</li>
    </ul-->
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};    
</script>


