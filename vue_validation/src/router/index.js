import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Cars from '../pages/Cars'
import Car from '../pages/Car'
import CarInfo from '../pages/CarInfo'

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
      component: Car,
      children: [
        {
          path: 'full',
          component: CarInfo,
          name: 'carInfo'
        }
      ]
    },
    {
      path: '/none',
      redirect: '/cars'
    }
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      return {
        x: 0,
        y: 700 // задаем координаты скролла
      }
    } 
  }
})
