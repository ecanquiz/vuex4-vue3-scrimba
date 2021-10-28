<template>
  <div>
    {{ count }}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
    <button @click='actionB'>actionB</button>
    <button @click='actionD'>actionD</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  computed: mapState([ 'count' ]),
  methods: {
     //increment () { this.$store.dispatch('incrementAsync'); },
     //decrement () { this.$store.commit('decrement'); }     
    ...mapMutations(['decrement']),
    ...mapActions({increment: 'incrementAsync', actionB: 'actionB', actionD: 'actionD' })
  }
};
</script>

