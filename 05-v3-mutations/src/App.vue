<template>
  <div>
    {{ count }}
    <button @click='increment'>+ 1</button>
    <input v-model="amount" type="number" />        
    <button @click='incrementBy({amount})'>+ input</button>  
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const amount = ref(0);
    const count = computed(() => store.state.count);
    const increment = () => store.commit({ type: "increment" });
    const incrementBy = () => store.commit({type: "incrementBy", amount: amount.value});

    return {
      amount,
      count,
      increment,
      incrementBy
    };
  },
};
</script>


