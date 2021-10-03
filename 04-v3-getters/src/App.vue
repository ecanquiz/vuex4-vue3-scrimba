<template>
  <div>
    {{ todos }}
    <!-- Completed Todos: {{ doneTodosCount }} -->
    <!--ul>
      <li v-for="todo in todos" :key="todo.id" >{{todo.text}} | {{todo.done}}</li>
    </ul-->
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from "vuex";

  const store = useStore()  
  const todos = computed(() => store.state.todos)    
</script>


