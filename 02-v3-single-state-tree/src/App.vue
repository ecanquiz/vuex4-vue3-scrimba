<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { useStore } from "vuex";

  export default {
    setup() {      
      const store = useStore();
      const count = computed(() => store.state.count);
            
      return {
        count
      };
    }
};
  
</script>
