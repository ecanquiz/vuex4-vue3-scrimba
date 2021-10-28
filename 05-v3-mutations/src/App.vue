<template>
  <div>
    {{ count }}
    <button @click='increment'>+ 1</button>
    <input v-model="amount" type="number" />        
    <button @click='incrementBy({amount})'>+ input</button>  
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      amount:0
    }
  },
  computed: {
    //count() { return this.$store.state.count; }    
    ...mapState(['count'])
  },
  methods: {
    //increment() { return this.$store.commit('increment'); },
    //incrementBy() { return this.$store.commit('incrementBy', {amount: this.amount}); },
    //incrementBy() { return this.$store.commit({type: 'incrementBy', amount: this.amount}); }
    ...mapMutations(['increment', 'incrementBy'])
  }  
}
</script>


