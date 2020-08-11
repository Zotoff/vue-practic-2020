/*Usage of mixins*/
<template>
<div class="card">
    <div class="card-body">
        <h1>List</h1>
        <input type="text" v-model="searchName" />
        <ul>
            <li v-for="(name, index) in filteredNames">{{name}}</li>
        </ul>
    </div>
</div>
    
</template>
<script>
    import ListMixin from './listmixin'
    export default {
        mixins: [ListMixin]
    }
</script>