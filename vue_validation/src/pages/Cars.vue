<template>
  <div class="card w-100">
    <h1>{{title}}</h1>
    <ul>
      <router-link
        tag="li"
        v-for="car in 5"
        :to="'/car/' + car"
        :key="car"
      >
        <a>Car {{car}}</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: 'Cars'
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin-left: 0px;
  padding-left: 0px;
}
</style>
