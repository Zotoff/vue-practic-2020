<template>
    <v-dialog
        width="400px"
        v-model="modal"
    >
        <v-btn class="warning" text>Edit</v-btn>
        <v-card>
            <v-layout row>
                <v-flex xs12>
                    <v-container>
                        <v-card-title>
                            <h1>Edit ad</h1>
                        </v-card-title>
                    </v-container>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <v-container>
                        <v-card-text>
                            <p>Lorem</p>
                        </v-card-text>
                    </v-container>
                </v-flex>
            </v-layout>
             <v-layout row>
                <v-flex xs12>
                    <v-container>
                        <v-card-text>
                            <v-spacer></v-spacer>
                            <v-btn class="">Cancel</v-btn>
                            <v-btn class="success">Save</v-btn>
                        </v-card-text>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      modal: false
    }
  }
}
</script>
