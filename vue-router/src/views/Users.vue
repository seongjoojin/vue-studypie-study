<template>
    <div>
        <h1>Users</h1>
        <p>이 유저는 현재 유저 번호가 {{ userId }}입니다.</p>
        <h1>그룹: {{ $route.query.group }}</h1>
        <h1>카테고리: {{ $route.query.category }}</h1>
        <h1>이름: {{ $route.query.name }}</h1>
        <h1>주소: {{ $route.query.address }}</h1>
    </div>
</template>
<script>
    export default {
        name: "Users",
        computed: {
            userId() {
                return this.$route.params.userId
            }
        },
        created() {
            console.log("router", this.$router)
            console.log("route", this.$route)
        }
    }
</script>
<style scoped>
</style>