// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import vuetify from '@/plugins/vuetify'
import * as fb from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyBk4vBUTi5beCaya-oLXRYuX-CHeNHiP_Y',
      authDomain: 'vladilen-vue-app.firebaseapp.com',
      databaseURL: 'https://vladilen-vue-app.firebaseio.com',
      projectId: 'vladilen-vue-app',
      storageBucket: 'vladilen-vue-app.appspot.com',
      messagingSenderId: '1089394893420',
      appId: '1:1089394893420:web:9a16529f63ab6f2889ae49',
      measurementId: 'G-5CY34CE7JX'
    })
    // Сохранение данных пользователя при регистрации
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
