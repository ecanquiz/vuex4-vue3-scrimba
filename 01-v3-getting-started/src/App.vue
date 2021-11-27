<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {

    const store = useStore();
    const message = ref("Hello world");
    
    const increment = () => {
        store.commit("increment");
        console.log(store.state.count);
      };

    onMounted(() => increment());

    return { message, increment };
    
  }
};
</script>
