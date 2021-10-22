<template>
  <div>
    {{ doneTodos }}
    <br />
    <br />
    Completed Todos: {{ doneTodosCount }}
    <br />
    <br />
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }} | {{ todo.done }}
      </li>
    </ul>
    <br />
    <br />
    Todos by ID {{ id }}: {{ getTodosById }}
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const todos = computed(() => store.state.todos);
const doneTodos = computed(() => store.getters.doneTodos);
const doneTodosCount = computed(() => store.getters.doneTodosCount);
const id = ref(2);
const getTodosById = computed(() => store.getters.getTodoById(id.value));
</script>
