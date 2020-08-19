import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(VueResource)

Vue.config.productionTip = false

Vue.http.options.root = "http://localhost:3000/"

Vue.http.interceptors.push(
  request => {
    request.headers.set('Auth', 'RAND TOKEN ' + Math.random())
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
