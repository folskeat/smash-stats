<template>
  <div class="fullhop">
    <FullHopList :characters="characters" :alternates="alternates" />
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
    },
    alternates() {
      return this.$root.$data.alt;
    }
  }
}
</script>