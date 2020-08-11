<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1 v-colored="`green`">{{ carName }}</h1>
    <h1 v-colored:background.font="`blue`">{{ carName }}</h1>
    <app-counter></app-counter>
    <app-car 
    v-bind:carName="carName" 
    v-bind:carYear="carYear" 
    @counterUpdated="counter = $event" 
    @nameChanged="carName = $event"
    >
    </app-car>
    <hr />
    <app-filters></app-filters>
    <hr />
    <list></list>
  </div>
</template>

<script>

import Counter from './Counter.vue'
import Car from './Car.vue'
import Filters from './Filters'
import List from './List'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      carName: 'Ford from parent',
      carYear: 2010
    }
  },
  components: {
    appCounter: Counter,
    appCar: Car,
    appFilters: Filters,
    list: List
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
