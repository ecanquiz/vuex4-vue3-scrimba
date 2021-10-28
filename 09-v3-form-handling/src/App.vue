<template>
  <div>
    {{ message }}<br>
    <!--input :value="message" @input="updateMessage"-->
    <input v-model='message' />
  </div>
</template>

<script>
//import { mapState } from 'vuex'
export default {

  computed: {
    //...mapState({ message: state => state.message })    
    message: {
      get () {
        return this.$store.state.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }    
    }
  },  
  //methods: {
  //  updateMessage (e) {
  //    this.$store.commit('updateMessage', e.target.value)
  //  }
  //}

};
</script>
