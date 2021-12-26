<script setup>
import { ref, computed } from 'vue'
import { useStore } from "vuex";
  
const store = useStore()  
const count = computed(() => store.state.count)
const increment = () => store.dispatch('incrementAsync')
const decrement = () => store.commit('decrement')
const actionB = () => store.dispatch('actionB')
const actionD = () => store.dispatch('actionD')
</script>

<template>
  <div>
    {{ count }}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <button @click='actionB'>actionB</button>
    <button @click='actionD'>actionD</button>
  </div>
</template>
