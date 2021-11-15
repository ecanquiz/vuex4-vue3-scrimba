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
    const store = useStore();
    return {
      message: ref("Hello world"),
      increment: () => {
        store.commit("increment");
        console.log(store.state.count);
      },
    };
  },
};
</script>
