<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>{{ nameOfChild }}</p>
  </div>
</template>
<script>
  export default {
      props: ["nameOfChild"],
      data() {
          return {
          }
      }
  }
</script>
