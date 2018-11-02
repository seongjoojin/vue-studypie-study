<template>
    <div>
        <h1>Users</h1>
        <p>이 유저는 현재 유저 번호가 {{ userId }}입니다.</p>
        {{ $route.params.name }}
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