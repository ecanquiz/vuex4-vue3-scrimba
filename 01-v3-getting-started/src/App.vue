<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello world"
    }
  },
  mounted() {
    this.increment();
  },
  methods: {
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  }
};

</script> 

