<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    return {
      // message: computed(() => store.state.message),
      // updateMessage: (e) => {
      //   store.commit("updateMessage", e.target.value);
      // },
      message: computed({
        get: () => store.state.message,
        set: (value) => store.commit("updateMessage", value),
      }),
    };
  },
};
</script>
<template>
  <div>
    {{ message }}<br />
    <!-- <input :value="message" @input="updateMessage" /> -->
    <input v-model="message" />
  </div>
</template>
