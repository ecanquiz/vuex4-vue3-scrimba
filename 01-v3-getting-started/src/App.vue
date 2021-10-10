<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const message = ref("Hello world");
    const store = useStore();
    const increment = () => {
      store.commit("increment");
      console.log(store.state.count);
    };

    increment();

    return { message };
  },
};
</script>
