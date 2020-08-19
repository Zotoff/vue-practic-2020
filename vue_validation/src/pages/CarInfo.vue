<template>
    <div class="card">
        <h4><strong>Car Name:</strong> {{$route.query.name}}</h4>
        <p><strong>Car Year:</strong> {{year}}</p>
        <div class="scroll"></div>
        <h6 id="scroll">Hello from the bottom</h6>
    </div>
</template>
<script>
export default {
  computed: {
    year () {
      return this.$route.query.year
    },
    beforeRouteEnter (to, from, next) {
      console.log('beforeRouteEnter')
      next(true)
    }
  }
}
</script>
<style scoped>
.scroll {
    width: 100px;
    height: 1000px;
    background-color: #ccc;
}
</style>
