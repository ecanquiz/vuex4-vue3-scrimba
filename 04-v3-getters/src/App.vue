<script setup>
import { ref, computed } from "vue"
import { useStore } from "vuex"

const { state, getters } = useStore()
const todos = computed(() => state.todos)
const doneTodos = computed(() => getters.doneTodos)
const doneTodosCount = computed(() => getters.doneTodosCount)
const getTodoById = id => getters.getTodoById(id)
</script>

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

