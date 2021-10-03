<template>
  <div>
    {{count}}
    <!-- <button @click='increment'>+</button> -->
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from "vuex";

  const store = useStore()  
  const count = computed(() => store.state.count)
  
  // computed: mapState(['count'])  // Not working with Compositions API
</script>


