<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: 뷰제이에스</p>
    <p>{{ getDateAndTime(createAt) }}</p>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
                :name="name"
                :address="address"
                :phone="phone"
                :hasDog="hasDog"
        ></UserDetail>
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
                :name="name"
                :address="address"
                :phone="phone"
                :hasDog="hasDog"
                @child="parents"
        ></UserEdit>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import UserDetail from './UserDetail.vue'
  import UserEdit from './UserEdit.vue'
  import { dateFormat } from '../mixins/dateFormat'

  export default {
    components:{
      UserDetail,
      UserEdit
    },
      data () {
        return {
            name: 'Hoza',
            address: 'Seoul',
            phone: '1234-5678',
            hasDog: true,
            createAt: null
        }
      },
      created() {
        this.createAt = new Date()
      },
      methods: {
        parents(user) {
            console.log('부모가 받앗어!')
            this.name = user.name
            this.address = user.address
            this.phone = user.phone
            this.hasDog = user.hasDog
        },
      },
      mixins: [dateFormat]
  }

</script>