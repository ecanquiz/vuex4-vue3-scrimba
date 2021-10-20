<template>
  <div>
    <p>Count Root: {{ count }}</p>
    <button @click='increment'>+ Count Root</button>
    <button @click='decrement'>- Count Root</button>
    <button @click='asyncIncrement'>+ (async) Count Root</button>

    <p>Module A Count: {{ aCount }}</p>
    <p>Module A Double Count: {{ aDoubleCount }}</p>
    <p>Module A Sum Count With Root Count: {{ aSumWithRootCount }}</p>
    <button @click='aIncrement'>+ Module A Count</button>
    <button @click='aIncrementIfOdd'>+ Module A Count (If Odd)</button>
    <button @click='aIncrementIfOddOnRootSum'>+ Module A Count (If Odd On Root Sum)</button>

    <p>Module B Count: {{ bCount }}</p>
    <p>SubModule B Count: {{ bSubCount }}</p>
    <p>SubModule B Double Count: {{ bDoubleSubCount }}</p>
    <button @click='sBIncrement'>+ SubModule B Count</button>
    <button @click='asyncSBIncrement'>+ (async) SubModule B Count</button>

    <p>Module C Count: {{ cCount }}</p>
    <p>Sum Of All Triple Counters: {{ cSumOfAllTripleCounters }}</p>

    <button @click='cSomeAction'>+ Module C Some Action</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
//import { createNamespacedHelpers } from 'vuex'
//const { mapState, mapMutations, sapActions, mapGetters } = createNamespacedHelpers('some/nested/module')

export default {  
  mounted () {
   console.log('Init Count Root', this.$store.state.count);
   console.log('Init Module A Count', this.$store.state.moduleA.count);
   console.log('Init Module B Count', this.$store.state.moduleB.count);
   console.log('Init SubModule B Count', this.$store.state.moduleB.subModule.count);
   console.log('Init Module C Count', this.$store.state.moduleC.count);
  },
  computed: { 
    count () { return this.$store.state.count },
    ...mapState({
      aCount: state => state.moduleA.count,
      bCount: state => state.moduleB.count,
      bSubCount: state => state.moduleB.subModule.count,
      cCount: state => state.moduleC.count,
    }),
    ...mapGetters({
      aDoubleCount: 'moduleA/doubleCount',
      aSumWithRootCount: 'moduleA/sumWithRootCount',
      bDoubleSubCount: 'moduleB/subModule/doubleCount',
      cSumOfAllTripleCounters: 'moduleC/sumOfAllTripleCounters'
    })
  },
  methods: {
    increment () { this.$store.commit('increment') },
    decrement () { this.$store.commit('decrement') },
    ...mapMutations({
      aIncrement: 'moduleA/increment',
      sBIncrement: 'moduleB/subModule/increment',
    }),
    ...mapActions({
      asyncIncrement: 'asyncIncrement',
      aIncrementIfOdd: 'moduleA/incrementIfOdd',
      aIncrementIfOddOnRootSum: 'moduleA/incrementIfOddOnRootSum',
      asyncSBIncrement: 'moduleB/subModule/asyncIncrement',
      cSomeAction: 'moduleC/someAction'
    })

  }
};
</script>

