<template>
  <div class="airacc">
    <AirAccList :characters="characters" :alternates="alternates" />
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
    },
    alternates() {
      return this.$root.$data.alt;
    }
  }
}
</script>