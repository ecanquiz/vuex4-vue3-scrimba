<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from "vuex"

  const { state } = useStore()
  const localCount = ref(1)  
  const count = computed(() => state.count)
  const countAlias = computed(() => count )
  const countPlusLocalState = computed(() => count.value + localCount.value )
</script>

<template>
  <div>
    <p>count: {{count}}</p>
    <p>countAlias: {{ countAlias }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
  </div>
</template>


