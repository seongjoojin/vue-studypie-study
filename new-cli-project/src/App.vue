<template>
  <div>
    <h1> {{ title }} </h1>
    <p>{{ count }}</p>
    <button @click="count++">추가</button>
    <HomnComponent />
    <AppStatus />
  </div>
</template>

<script>
import HomnComponent from "./Home"

export default {
    components: {
        HomnComponent
    },
    data() {
        return {
            title: "안녕하세요",
            count: 1
        }
    }
}
</script>
