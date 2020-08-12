<template>
    <div class="card">
        <div class="card-body">
            <h2>Forms</h2>
            <input type="text" v-model="name" />
            <textarea v-model="textarea"></textarea>
            <label>
                <input type="checkbox" value="vk" v-model="social"/> VK
            </label>
            <label>
                <input type="checkbox" value="fb" v-model="social"/> FB
            </label>
            <ul>
                <li v-for="s in social">{{s}}</li>
            </ul>
            <label>
                <input type="radio" value="vk" v-model="socialradio" /> VK
            </label>
            <label>
                <input type="radio" value="instagram" v-model="socialradio" /> Instagram
            </label>
            <ul>
                <li v-for="s in socialradio">{{s}}</li>
            </ul>
            <p>Select</p>
            <select>
                <option 
                v-for="s in socialNetworks"
                v-bind:selected="s === defaultSocial"
                >{{s}}</option>
            </select>
            <p>Custom control</p>
            <button 
                class="btn btn-info"
                :class="{'active': enabled}"
                @click="enabled = !enabled"
            >On</button>
            <button 
                class="btn btn-danger"
                :class="{'active': !enabled}"
                @click="enabled = !enabled"
            >Off</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            textarea: 'Initial text',
            social: [],
            socialradio: '',
            defaultSocial: 'Linkedin',
            socialNetworks: ['Instragram', 'Linkedin', 'Facebook'],
            enabled: false
        }
    }
}
</script>
<style scoped>
input, textarea {
    width: 100%;
    margin-bottom: 12px;
}
.active {
    background-color: red;
    color: #ffffff;
}
</style>