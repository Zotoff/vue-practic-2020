<template>
  <div id="app" class="row">
    <div class="col-md-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <router-link tag="li" class="nav-item" exact active-class="active" to="/">
                <a class="nav-link">Home</a>
              </router-link>
              <router-link tag="li" class="nav-item" active-class="active" to="/cars">
                <a class="nav-link">Cars</a>
              </router-link>
          </ul>
        </div>
          </nav>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: '',
      password: '',
      confirm: ''
    }
  },
  methods: {
    onSubmit () {
      alert('submit!')
    }
  },
  validations: {
    email: {
      required: required,
      email: email,
      uniqEmail: function (newEmail) {
        if (newEmail === '') return true
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const value = newEmail !== 'test@mail.ru'
            resolve(value)
          }, 1000)
        })
      }
    },
    password: {
      minLength: minLength(6)
    },
    confirm: {
      sameAs: sameAs('password')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
