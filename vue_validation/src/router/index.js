import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Cars from '../pages/Cars'
import Car from '../pages/Car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/cars',
      name: 'Cars',
      component: Cars
    },
    {
      path: '/car/:id',
      name: 'Car',
      component: Car
    }
  ],
  mode: 'history'
})
