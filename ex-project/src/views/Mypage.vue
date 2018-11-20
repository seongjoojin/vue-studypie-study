<template>
  <div>
    <h1>{{ userInfo.first_name }} {{ userInfo.last_name }}님 환영합니다</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Mypage",
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>

<style scoped></style>
