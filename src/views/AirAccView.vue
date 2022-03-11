<template>
  <div class="airacc">
    <AirAccList :characters="characters" />
  </div>
</template>


<script>
import AirAccList from "../components/AirAccList.vue"

export default {
  name: 'AirAccView',
  components: {
    AirAccList
  },
    computed: {
    characters() {
      return this.$root.$data.stat;
    }
  }
}
</script>