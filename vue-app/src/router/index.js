import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

import Home from '../components/Home.vue'
import Order from '../components/User/Order.vue'
import Login from '../components/Auth/Login.vue'
import Registration from '../components/Auth/Registration.vue'
import Ad from '../components/Ads/Ad.vue'
import AdList from '../components/Ads/AdList.vue'
import NewAd from '../components/Ads/NewAd.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/ad/:id',
      props: true, // чтобы id передавался в свойства
      name: 'ad',
      component: Ad,
      beforeEnter: AuthGuard
    },
    {
      path: '/adlist',
      name: 'adlist',
      component: AdList,
      beforeEnter: AuthGuard
    },
    {
      path: '/newad',
      name: 'newad',
      component: NewAd,
      beforeEnter: AuthGuard
    }
  ],
  mode: 'history'
})
