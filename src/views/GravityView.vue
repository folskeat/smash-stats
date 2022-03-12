<template>
  <div class="gravity">
    <GravityList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import GravityList from "../components/GravityList.vue"

export default {
  name: 'GravityView',
  components: {
    GravityList
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