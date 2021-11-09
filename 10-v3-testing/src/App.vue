<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment" id="increment">+</button>
    <button @click="incrementAsync" id="incrementAsync">+ (async)</button>
    <p>Products: {{ products }}</p>
    <p>Filtered Products: {{ filteredProducts }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const count = computed(() => store.state.count);
    const products = computed(() => store.state.products);

    const filterCategory = "fruit";
    const filteredProducts = computed(() =>
      store.getters.filteredProducts({ filterCategory })
    );

    const increment = () => store.commit("increment");
    const incrementAsync = () => store.dispatch("incrementAsync");

    return {
      count,
      products,
      filteredProducts,
      increment,
      incrementAsync,
    };
  },
};
</script>
