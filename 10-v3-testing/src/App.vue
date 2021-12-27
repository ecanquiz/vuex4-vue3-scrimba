<script setup>
import { computed } from 'vue'
import { useStore } from "vuex";
      
const store = useStore()
const count = computed(() => store.state.count)
const products = computed(() => store.state.products)
const filteredProducts = computed(() => store.getters.filteredProducts)
const increment = ()=> store.commit('increment');
const incrementAsync = () => store.dispatch('incrementAsync');
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click='increment' id="increment">+</button>
    <button @click='incrementAsync' id="incrementAsync">+ (async)</button>
    <p>Products: {{ products }}</p>    
    <p>Filtered Products: {{ filteredProducts({filterCategory: 'fruit'}) }}</p>
  </div>
</template>
