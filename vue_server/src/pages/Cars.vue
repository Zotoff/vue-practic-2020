<template>
    <div class="w-100">
        <div class="form-group">
            <input type="text" id="carName" v-model.trim="carName">
        </div>
        <div class="form-group">
            <input type="text" id="carYear" v-model.number="carYear">
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <button class="btn btn-success" type="submit" @click="createCar">Create Car</button>
            <button class="btn btn-info" type="submit" @click="loadCars">Load Car</button>
        </div>
       <hr />
       <div class="cars-list">
           <ul class="list-group">
               <li class="list-group-item" v-for="car in cars" :key="car.id">
                   {{car.name}} - {{car.year}}
               </li>
           </ul>
       </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                carYear: 2018,
                carName: 'Ford',
                cars: [],
                resource: null
            }
        },
        methods: {
            createCar () {
               const car = {
                   name: this.carName,
                   year: this.carYear
               }
               this.resource.save({}, car)
            //    this.$http.post('http://localhost:3000/cars', car)
            //    .then(response => {
            //        return response.json()
            //     })
            //     .then(newCar => {
            //         console.log(newCar)
            //     })
            },
            loadCars () {
                // this.$http.get('http://localhost:3000/cars')
                // .then(response => {
                //    return response.json()
                // })
                // .then(cars => {
                //     this.cars = cars
                // })
                this.resource.get()
                .then(response => {
                    return response.json()
                })
                .then(cars => {
                    this.cars = cars
                })
            }
        },
        created () {
            this.resource = this.$resource('cars')
        }
    }
</script>
