import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuelidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
