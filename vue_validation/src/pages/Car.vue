<template>
<div class="card">
    <h1>Car id {{id}}</h1>
    <button @click="goBackToCars" class="btn btn-sm btn-info">Back</button>
</div>
</template>
<script>
/* eslint-disable */
export default {
  data () {
      return {
            id: this.$router.currentRoute.params['id']
        }
    },
    watch: {
        $route(toRoute, fromRoute) {
            this.id = toRoute.params['id']
        }
    },
    methods: {
        goBackToCars () {
            this.$router.push('/')
        }
    }
}
</script>
<style scoped></style>