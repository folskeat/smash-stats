<template>
  <div class="fullhop">
    <FullHopList :characters="characters" />
  </div>
</template>


<script>
import FullHopList from "../components/FullHopList.vue"

export default {
  name: 'FullHopView',
  components: {
    FullHopList
  },
    computed: {
    characters() {
      return this.$root.$data.stat;
    }
  }
}
</script>