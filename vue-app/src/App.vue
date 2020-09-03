<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
    >
    <v-list dense>
      <v-subheader>Vue application</v-subheader>
      <v-list-item-group v-model="links" color="primary">
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
    </v-app-bar>
    <v-main>
        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    links: [
      {text: 'Home', icon: 'fas fa-star', url: '/'},
      {text: 'Login', icon: 'fas fa-lock', url: '/login'},
      {text: 'Registration', icon: 'fas fa-user', url: '/registration'},
      {text: 'Orders', icon: 'fas fa-shopping-cart', url: '/order'},
      {text: 'New Ad', icon: 'fas fa-shopping-cart', url: '/newad'},
      {text: 'My ads', icon: 'fas fa-list', url: '/adlist'}
    ]
  })
}
</script>

<style>

</style>
