<template>
  <div>
    {{count}}
    <!-- <button @click='increment'>+</button> -->
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};  
</script>


