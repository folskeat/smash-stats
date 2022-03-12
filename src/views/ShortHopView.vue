<template>
  <div class="shorthop">
    <ShortHopList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import ShortHopList from "../components/ShortHopList.vue"

export default {
  name: 'ShortHopView',
  components: {
    ShortHopList
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