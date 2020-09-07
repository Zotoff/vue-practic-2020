<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h1>Ad</h1>
                <v-card>
                  <v-img
                    :src="ad.imageSrc"
                    height="300"
                  >

                  </v-img>
                  <v-card-text>
                    <h1 class="text--primary">{{ad.title}}</h1>
                    <p>{{ad.description}}</p>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <addEditAdModal></addEditAdModal>
                    <v-btn class="success">Buy</v-btn>
                  </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import EditAdModal from './editAdModal'
export default {
  props: ['id'], // забираем id как свойство
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  },
  components: {
    addEditAdModal: EditAdModal
  }
}
</script>
