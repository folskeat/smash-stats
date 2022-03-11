<template>
  <div class="airmove">
    <AirMoveList :characters="characters" />
  </div>
</template>


<script>
import AirMoveList from "../components/AirMoveList.vue"

export default {
  name: 'AirMoveView',
  components: {
    AirMoveList
  },
    computed: {
    characters() {
      return this.$root.$data.stat;
    }
  }
}
</script>