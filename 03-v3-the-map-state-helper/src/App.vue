<template>
  <div>
    {{ count }}
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from "vuex";

  const store = useStore()  
  const count = computed(() => store.state.count)    
</script>


