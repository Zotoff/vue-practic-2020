<template>
    <div class="card">
        <div class="card-body">
            <h2>{{title}}</h2>
            <h2>{{title | lowercase}}</h2>
            <hr />
            <input type="text" v-model="searchName" />
            <ul>
                <li v-for="name in filteredNames">{{name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import {eventEmitter} from './main.js';
export default {
    data() {
        return {
            title: 'Filters and Directives',
            names: ['Paul', 'Elena', 'Max'],
            searchName: ''
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter(name => {
                return name.indexOf(this.searchName !== 1)
            })
        }
    },
    filters: {
        lowercase(value) {
            return value.toLowerCase()
        }
    }
}
</script>