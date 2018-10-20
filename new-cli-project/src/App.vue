<template>
  <div>
    <h1> {{ title }} </h1>
    <p>{{ count }}</p>
    <button @click="count++">추가</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: "안녕하세요",
            count: 1
        }
    }
}
</script>
