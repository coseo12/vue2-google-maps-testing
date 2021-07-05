<template>
    <div class="maps">
      <GmapMap
        :center="{lat: 37.5665, lng: 126.9780}"
        :zoom="19"
        style="width: 1000px; height: 800px"
      >
        <GmapMarker
          :position="{lat: 37.5665, lng: 126.9780}"
          :clickable="true"
          :draggable="false"
          :label="`Center`"
          @click="onClick"
          @dragend="onDragend"
        />
        <GmapMarker
          v-for="(m, index) in markers"
          :key="index"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          :label="`x: ${m.position.x}, y: ${m.position.y}`"
          @click="onClick"
          @dragend="onDragend"
        />
      </GmapMap>
    </div>
</template>

<script>
export default {
    props: {
        markers: {
            field: Array,
            required: true,
        }
    },
    methods: {
    onClick(ev) {
        console.log(ev)
    },
    onDragend(ev) {
        console.log(ev)
    }
    }
}
</script>

<style scoped>
.maps {
    margin: 10px;
}
</style>