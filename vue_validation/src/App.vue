<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
                <div class="card-body">
                  <form>
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                        class="form-control"
                        :class="{'is-invalid': $v.email.$error}"
                        type="email"
                        v-model="email" @blur="$v.email.$touch"/>
                        <div class="invalid-feedback">Invalid feedback</div>
                      </div>
                  </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      required: required
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
