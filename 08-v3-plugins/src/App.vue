<template>
  <div>
    {{count}}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from "vuex";

  const store = useStore()  
  const count = computed(() => store.state.count)
  
  const increment = ()=> store.commit('increment')  
  const decrement = ()=> store.commit('decrement')
</script>

