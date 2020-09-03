<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
                <div class="card-body">
                  <form @submit.prevent="onSubmit">
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                        class="form-control"
                        :class="{'is-invalid': $v.email.$error}"
                        type="email"
                        v-model="email" @blur="$v.email.$touch"/>
                        <div class="invalid-feedback" v-if="!$v.email.required">This field is required</div>
                        <div class="invalid-feedback" v-if="!$v.email.email">Enter the correct email</div>
                        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">Email already exists</div>
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input
                        class="form-control"
                        :class="{'is-invalid': $v.password.$error}"
                        type="password"
                        v-model="password" @blur="$v.password.$touch"/>
                        <div class="invalid-feedback" v-if="!$v.password.minLength">
                          Min length {{$v.password.$params.minLength.min}}. Now it is {{password.length}}
                        </div>
                      </div>

                      <div class="form-group">
                        <label for="confirm">Confirm password</label>
                        <input
                        class="form-control"
                        :class="{'is-invalid': $v.confirm.$error}"
                        type="password"
                        v-model="confirm" @blur="$v.confirm.$touch"/>
                        <div class="invalid-feedback" v-if="!$v.confirm.sameAs">
                          Passwords are not equal
                        </div>
                      </div>

                      <button class="btn btn-success" type="submit" :disabled="$v.$invalid">Submit</button>
                  </form>
                </div>
            </div>
        </div>
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
