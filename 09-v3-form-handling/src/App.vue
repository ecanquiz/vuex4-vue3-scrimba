<script setup>
import { computed } from 'vue'
import { useStore } from "vuex";

const store = useStore()  
//const message = computed(() => store.state.message)
//const updateMessage = (e) => {
//  store.commit('updateMessage', e.target.value)
//}
const message = computed({
  get: () => store.state.message,
  set: value => store.commit('updateMessage', value)
})  
</script>

<template>
  <div>
    {{ message }}<br />
    <!--input :value="message" @input="updateMessage"-->
    <input v-model="message" />
  </div>
</template>

