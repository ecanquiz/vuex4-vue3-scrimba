<template>
  <div>
    {{count}}
    <button @click='increment'>+</button>
    <button @click='decrement'>-</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
//import { createNamespacedHelpers } from 'vuex'
//const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')



export default {  
  computed: { 
    count () { return this.$store.state.count },
    ...mapState({
    a: state => state.a.count,
    b: state => state.b.count,
    bSubModule: state => state.b.subModule.count
  })
  },
  methods: {
    increment () { this.$store.commit('increment') },
    decrement () { this.$store.commit('decrement') },
    //...mapActions([
    //  'some/nested/module/foo' // this['some/nested/module/foo']()
    //])
    ...mapActions('some/nested/module', [
      'foo' // this.foo()
    ])    
  }
};
</script>

