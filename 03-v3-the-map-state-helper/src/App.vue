<template>
  <div>
     <p>count: {{count}}</p>
     <p>countAlias: {{ countAlias }}</p>
     <p>countPlusLocalState: {{ countPlusLocalState }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
     localCount: 1 
    }
  },
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
};
</script>
