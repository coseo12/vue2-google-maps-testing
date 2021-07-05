<template>
  <div class="container">
    <Maps :markers="markers" />
    <Form :markers="markers" :setMarkers="setMarkers" />
  </div>
</template>

<script>
import Maps from './Maps.vue';
import Form from './Form.vue'

export default {
  components: {
    Maps,
    Form,
  },
  data() {
      return {
          markers: [
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
              {
                position: {
                  lat: 37.5665,
                  lng: 126.9780,
                  x: 0,
                  y: 0,
                }
              },
          ]
      }
  },
  methods: {
    setMarkers(markers) {
      this.markers = markers;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display:flex;
  }
</style>
