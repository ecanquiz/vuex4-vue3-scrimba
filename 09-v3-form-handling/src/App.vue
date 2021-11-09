<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const message = computed({
      get: () => store.state.message,
      set: (value) => store.commit("updateMessage", value),
    });

    return { message };
  },
};
</script>
<template>
  <div>
    {{ message }}<br />
    <input v-model="message" />
  </div>
</template>
