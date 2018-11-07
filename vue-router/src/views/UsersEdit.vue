<template>
    <div>
        <h1>Users Edit</h1>
        {{ userId }}
    </div>
</template>

<script>
	export default {
        name: "UsersEdit",
        computed: {
            userId() {
                return this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>