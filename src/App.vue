<template>
  <div id="app">
    <GoogleMaps />
  </div>
</template>

<script>
import GoogleMaps from './components/GoogleMaps.vue'

export default {
  name: 'App',
  components: {
    GoogleMaps
  }
}
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
input {
  border: 1px solid #111;
  margin: 5px;
  padding: 5px;
  width: 100px;
  height: 30px;
  outline: none;
}
label {
  font-size: 0.8rem;
}
button { 
  border: 1px solid #111;
  background-color:#fff;
  padding: 10px 20px;
  margin: 10px;
  outline: none;
}
button:hover {
  background-color: #eee;
}
</style>
