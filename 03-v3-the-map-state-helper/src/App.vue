<template>
  <div>
    <p>count: {{count}}</p>
    <p>countAlias: {{ countAlias }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const { state } = useStore();    
    const count = computed( () => state.count );    
    const countAlias = computed(() => count );      
    const localCount = ref(1);    
    const countPlusLocalState = computed(() => count.value + localCount.value );

    return {
      count,
      countAlias,
      countPlusLocalState
    };
  }
};
</script>
