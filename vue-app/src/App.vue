<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
    <v-list dense>
      <v-subheader>Vue application</v-subheader>
      <v-list-item-group color="primary">
        <v-list-item
          v-for="(link) in links"
          :key="link.title"
          :to="link.url"
        >
          <v-list-item-icon>
            <v-icon x-small left>{{link.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="link.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <v-list-item-icon>
            <v-icon x-small left>fas fa-sign-out-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Simple Vuetify app</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items
      class="hidden-sm-and-down"
      v-for="(link) in links"
          :key="link.title"
          :to="link.url"
      >
        <v-btn :to="link.url"><v-icon x-small left>{{link.icon}}</v-icon>{{link.text}}</v-btn>
      </v-toolbar-items>
      <v-btn @click="onLogout" text v-if="isUserLoggedIn"><v-icon x-small left>fas fa-sign-out-alt</v-icon> Logout</v-btn>
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
    <template v-if="error">
      <v-snackbar
      :multi-line="true"
      :timeout="5000"
      color="error"
      @input="closeError"
      :value="true"
    >
      {{error}}
      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="closeError"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </template>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {text: 'Home', icon: 'fas fa-star', url: '/'},
          {text: 'Orders', icon: 'fas fa-shopping-cart', url: '/order'},
          {text: 'New Ad', icon: 'fas fa-shopping-cart', url: '/newad'},
          {text: 'My ads', icon: 'fas fa-list', url: '/adlist'}
        ]
      } return [
        {text: 'Home', icon: 'fas fa-star', url: '/'},
        {text: 'Login', icon: 'fas fa-lock', url: '/login'},
        {text: 'Registration', icon: 'fas fa-user', url: '/registration'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
