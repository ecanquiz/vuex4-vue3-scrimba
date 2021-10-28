<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click='increment' id="increment">+</button>
    <button @click='incrementAsync' id="incrementAsync">+ (async)</button>
    <p>Products: {{ products }}</p>    
    <p>Filtered Products: {{ filteredProducts({filterCategory: 'fruit'}) }}</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['count', 'products']),
    ...mapGetters(['filteredProducts'])       
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapActions(['incrementAsync'])
  }
};
</script>
