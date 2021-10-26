<template>
  <div>
    {{message}}<br>
    <input v-model='message' />
  </div>
</template>

<script>
export default {
  computed: {
    message () {
      return this.$store.state.message;
    }
  }
};
</script>
