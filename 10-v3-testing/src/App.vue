<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click='increment' id="increment">+</button>
    <button @click='incrementAsync' id="incrementAsync">+ (async)</button>
    <p>Products: {{ products }}</p>    
    <p>Filtered Products: {{ filteredProducts({filterCategory: 'fruit'}) }}</p>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from "vuex";
  export default {
    setup() {      
      const store = useStore();

      return {
        count: computed(() => store.state.count),
        products: computed(() => store.state.products),        
        filteredProducts: computed(() => store.getters.filteredProducts) ,
        increment: ()=> store.commit('increment') ,
        incrementAsync: () => store.dispatch('incrementAsync') 
      };
    }
};
</script>
