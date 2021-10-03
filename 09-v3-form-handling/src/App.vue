<template>
  <div>
    {{message}}<br>
    <input v-model='message' />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from "vuex";

  const store = useStore()  
  const count = computed(() => store.state.message)
</script>
