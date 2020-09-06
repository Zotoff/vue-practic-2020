<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="ad in promoAds" :key="ad.id" :src="ad.imageSrc">
              <div class="car-link">
                <v-btn class="info" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" height="200px" :src="ad.imageSrc">
              <v-card-title>{{ad.title}}</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">{{ad.id}}</v-card-subtitle>
            <v-card-text class="text--primary">
              {{ad.description}}
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text>
                Share
              </v-btn>
              <v-btn color="orange" text :to="'/ad/' + ad.id">
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-xs-center pt-5">
          <v-progress-circular
            indeterminate
            :size="70"
            :width="7"
            color="purple"
          >

          </v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
<style scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, .5);
  transform: translate(-50%, 0);
  padding: 10px 20px;
  border-radius: 5px;
}
</style>
