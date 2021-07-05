<template>
    <form @submit.stop="() => {}" class="form">
        <div class="position">
            <label>ID: </label>
            <input type="text" class="id" readonly value="Center"/>
            <label>Latitude: </label>
            <input type="text" class="gps" readonly value="37.5665"/>
            <label >longitude: </label>
            <input type="text" class="gps" readonly value="126.9780"/>
            <label>X: </label>
            <input type="text" class="axis" readonly value="0"/>
            <label >Y: </label>
            <input type="text" class="axis" readonly value="0"/>
        </div>
        <div v-for="(marker, idx) in markers" class="position" :key="idx">
            <label>ID: </label>
            <input type="text" class="id" readonly :value="marker.position.id"/>
            <label>Latitude: </label>
            <input type="text" class="gps" readonly :value="marker.position.lat"/>
            <label >longitude: </label>
            <input type="text" class="gps" readonly :value="marker.position.lng"/>
            <label>X: </label>
            <input type="text" class="axis" readonly :value="marker.position.x"/>
            <label >Y: </label>
            <input type="text" class="axis" readonly :value="marker.position.y"/>
        </div>
        <div class="wrap-btn">
            <button type="button" @click="start">Start</button>
            <button type="button" @click="stop">Stop</button>
            <label class="status">{{status}}</label>
        </div>
    </form>
</template>

<script>
import { 
    getDistanceLatitude, 
    getDistanceLongitude,
    convertMeterToSec,
    convertDDToDMS,
    convertDMSToDD
} from '../utils'

export default {
    props: {
        markers: {
            field: Array,
            required: true,
        },
        setMarkers: {
            field: Function,
            required: true,
        }
    },
    data() {
        return {
            interval: null,
            status: 'Stop'
        }
    },
    created() {

        const lat = 37.5665;
        const lng = 126.9780;

        console.log('position: ', lat, lng);

        // Latitude to km        
        const {lat_km_degrees, lat_km_minutes, lat_km_seconds} = getDistanceLatitude();
        console.log('lat_km: ', lat_km_degrees, lat_km_minutes, lat_km_seconds);
        
        const {lng_km_degrees, lng_km_minutes, lng_km_seconds} =getDistanceLongitude(Math.floor(lat));
        console.log('lng_km: ', lng_km_degrees, lng_km_minutes, lng_km_seconds);

        // meter to sec
        const y = 0.03;
        const y_sec =  convertMeterToSec(y,lat_km_seconds);
        console.log('y_sec: ', y_sec);
        
        const x = 0.03;
        const x_sec = convertMeterToSec(x,lng_km_seconds);
        console.log('x_sec: ', x_sec);

        // DD to DMS
        const { degrees: lat_degrees, minutes: lat_minutes, seconds: lat_seconds } = convertDDToDMS(lat)
        console.log('lat DMS: ',lat_degrees, lat_minutes, lat_seconds);  
        
        const { degrees: lng_degrees, minutes: lng_minutes, seconds: lng_seconds } = convertDDToDMS(lng)
        console.log('lng DMS: ',lng_degrees, lng_minutes, lng_seconds);  
        
        // sum sec
        const lat_seconds_sum = lat_seconds + y_sec;
        const lng_seconds_sum = lng_seconds + x_sec;
        console.log('sum: ',lat_seconds_sum, lng_seconds_sum)
        console.log('results: ', convertDMSToDD(lat_degrees, lat_minutes, lat_seconds_sum), convertDMSToDD(lng_degrees, lng_minutes, lng_seconds_sum))
        
    },
    methods: {
        start() {
            const lat = 37.5665;
            const lng = 126.9780;

            const { degrees: lat_degrees, minutes: lat_minutes, seconds: lat_seconds } = convertDDToDMS(lat)
            console.log('lat DMS: ',lat_degrees, lat_minutes, lat_seconds);  
            
            const { degrees: lng_degrees, minutes: lng_minutes, seconds: lng_seconds } = convertDDToDMS(lng)
            console.log('lng DMS: ',lng_degrees, lng_minutes, lng_seconds);  
        
            const fn = () => {
                const arr = [];

                for(let i = 0; i < 10; i++) {
                    const x = Number((Math.random()*3).toFixed(2)) * (Math.round(Math.random()) ? 1 : -1);
                    const y = Number((Math.random()*3).toFixed(2)) * (Math.round(Math.random()) ? 1 : -1);
                    const obj = {
                        position: {
                            id: i,
                            lat: convertDMSToDD(lat_degrees, lat_minutes, lat_seconds + y),
                            lng: convertDMSToDD(lng_degrees, lng_minutes, lng_seconds + x),
                            x,
                            y,
                        }
                    }
                    arr.push(obj);
                }
                this.setMarkers(arr);
            }
            fn();
            this.interval = setInterval(fn, 3000);
            this.status = 'Start'
        },
        stop() {
            clearInterval(this.interval);
            this.status = 'Stop'
        }
    }
}
</script>

<style scoped>
.form {
    display:flex;
    flex-direction: column;
    margin: 10px;
}
.position {
    margin: 5px;
}
.status {
    color: lightcoral;
}
.id {
    width: 55px;
}
.axis {
    width: 50px;
}
.gps {
    width: 120px;
}
</style>