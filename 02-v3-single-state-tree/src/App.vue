<template>
  <div>
    {{ store.state.count }}
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from "vuex";

  const store = useStore()   
</script>


