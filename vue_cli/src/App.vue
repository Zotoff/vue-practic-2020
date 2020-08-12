<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <img src="./assets/logo.png">
          <h1 v-colored="`green`">{{ carName }}</h1>
          <h1 v-colored:background.font="`blue`">{{ carName }}</h1>
          <app-counter></app-counter>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <app-car 
              v-bind:carName="carName" 
              v-bind:carYear="carYear" 
              @counterUpdated="counter = $event" 
              @nameChanged="carName = $event"
              >
              </app-car>
        </div>
        <div class="col-md-6">
          <app-filters></app-filters>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <list></list>
        </div>
        <div class="col-md-6">
          <app-form></app-form>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>

import Counter from './Counter'
import Car from './Car'
import Filters from './Filters'
import List from './List'
import Form from './Form'

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
    list: List,
    appForm: Form
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
