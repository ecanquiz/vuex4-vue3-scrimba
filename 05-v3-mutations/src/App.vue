<template>
  <div>
    {{ count }}
    <button @click='increment'>+ 1</button>
    <input v-model="amount" type="number" />        
    <button @click='incrementBy({amount})'>+ input</button>  
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useStore } from "vuex";

  const amount = ref(0)
  const store = useStore()  
  const count = computed(() => store.state.count)    
  const increment = () => store.commit('increment')
  const incrementBy = () => store.commit({type: 'incrementBy', amount: amount.value}) 
</script>


