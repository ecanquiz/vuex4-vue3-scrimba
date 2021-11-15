<template>
  <div>
    <div>{{ "count: " + count }}</div>
    <div><button @click="increment()">+</button></div>
    <div><button @click="incrementBy()">x10</button></div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      count: computed(() => {
        return store.getters.getCount;
      }),
      increment: () => {
        store.commit({ type: "increment" });
      },
      incrementBy: () => {
        store.commit({ type: "incrementBy", value: 10 });
      },
    };
  },
};
</script>
