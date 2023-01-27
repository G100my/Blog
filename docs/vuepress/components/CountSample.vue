<template>
  <div class="container">
    <p class="title">
      count:
      <span class="count">{{ count }}</span>
    </p>
    <button type="button" @click="clickHandler">click me</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    clickHandler() {
      this.count += 1
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  background-color: white;
  padding: 16px;
}
.title {
  color: red;
}
.count {
  font-size: 40px;
}
</style>
