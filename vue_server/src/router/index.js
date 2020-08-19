import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'

Vue.use(Router)

const Cars = resolve => {
  require.ensure(['../pages/Cars.vue'], () => {
    resolve(
      require('../pages/Cars.vue')
    )
  })
}

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
      path: '/none',
      redirect: '/cars'
    }
  ],
  mode: 'history'
})
