<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { useStore } from 'vuex'

  const message = ref('Hello world')
  const store = useStore()  

  const increment = ()=> {
    store.commit('increment')
    console.log(store.state.count)
  }  

  onMounted(() => increment());
</script>
