<template>
  <div>
    {{ countPlusLocalState() }}
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from "vuex";

  const store = useStore()
  const localCount = ref(1)
  const count = computed(() => store.state.count)
  const countPlusLocalState = () => count.value + localCount.value
</script>
