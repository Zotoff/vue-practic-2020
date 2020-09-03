<template>
    <div class="card">
        <div class="card-body">
            <p>Counter: {{ counter }}</p>
        </div>
    </div>
</template>
<script>
import {eventEmitter} from './main.js';
export default {
    data() {
        return {
            counter: 0
        }
    },
    created() {
        eventEmitter.$on('counterUpdated', ()=>{
            this.counter++
        })
    }
}
</script>