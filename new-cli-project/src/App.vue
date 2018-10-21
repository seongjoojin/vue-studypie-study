<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <User></User>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import User from './components/User.vue'

export default {
  components: {
    User
  }  
}
</script>
