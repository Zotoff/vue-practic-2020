<template>
<div class="card">
    <h1>Car id {{id}}</h1>
    <button @click="goBackToCars" class="btn btn-sm btn-info">Back</button>
    <hr />
    <router-link class="btn btn-info" :tag="button" :to="{name: 'carInfo', params: {id: id}, query: {name: 'Mazda', year: 2000}, hash: '#scroll'}">
        Full info
    </router-link>
    <hr />
    <router-view></router-view>
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
    },
    beforeRouteLeave(to, from, next) {
        confirm('Are you leaving?')
        next(true)
    }
}
</script>
<style scoped></style>