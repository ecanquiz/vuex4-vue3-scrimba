<template>
  <div>
    {{ count}}
  </div>
</template>

<script>
  export default {
    mounted() {

        console.log(this.$store.state.count)
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    }
};
  
</script>
