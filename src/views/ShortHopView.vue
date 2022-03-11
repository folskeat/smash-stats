<template>
  <div class="shorthop">
    <ShortHopList :characters="characters" />
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
    }
  }
}
</script>