<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Ad list</h1>
                <v-card
                class="elevation-10 mb-5"
                v-for="ad in ads"
                :key="ad.id"
                >
                  <v-layout row>
                    <v-flex xs4>
                      <v-img
                        :src="ad.imageSrc"
                        height="175"
                      >
                      </v-img>
                    </v-flex>
                    <v-flex xs8 class="p-3">
                      <v-card-text>
                        <h2 class="text--primary">{{ad.title}}</h2>
                        <p>{{ad.description}}</p>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          class="info"
                          :to="'/ad/' + ad.id"
                        >Open</v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  data () {
    return {
      ads: [{
        title: 'First add',
        description: 'Hello, i am first add',
        promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        id: '123'
      }
      ]
    }
  }
}
</script>
