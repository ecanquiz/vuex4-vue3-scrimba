<template>
  <div>
    {{ count }}
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const count = computed(() => {
  return store.state.count;
});
</script>
