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