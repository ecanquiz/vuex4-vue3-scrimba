<template>
  <div>
    {{ count }}
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
        return store.state.count;
      }),
    };
  },
};
</script>
