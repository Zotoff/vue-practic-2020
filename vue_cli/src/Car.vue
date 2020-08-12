<template>
    <div class="card">
        <div class="card-body">
            <h3>Name: {{ carName }}</h3>
            <p>Year: {{ carYear }}</p>
            <hr />
            <button @click="changeName">Change Car Name</button>
            <button @click="updateCounter">Update Counter</button>
        </div>
    </div>
</template>

<script>

import { eventEmitter } from './main.js'

export default {
    props: {
        carName: {
            type: String,
            required: true,
            default: 'Check'
        },
        carYear: Number
    },
    data() {
        return {
        }
    },
    methods: {
        changeName() {
            this.carName="Mazda",
            this.$emit('nameChanged', this.carName)
        },
        updateCounter() {
            //this.$emit('counterUpdated', this.counter++)
            eventEmitter.$emit('counterUpdated')
        }
    }
}
</script>