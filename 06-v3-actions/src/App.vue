<template>
  <div>
    {{ count }}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <button @click='actionB'>actionB</button>
    <button @click='actionD'>actionD</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from "vuex";
  
export default {
  setup(){
    const store = useStore();
    return {
      count: computed(() => store.state.count),
      increment: () => store.dispatch('incrementAsync'),
      decrement: () => store.commit('decrement'), 
      actionB: () => store.dispatch('actionB'),
      actionD: () => store.dispatch('actionD'),
    }
  }  
};
</script>

