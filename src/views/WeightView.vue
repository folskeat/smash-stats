<template>
  <div class="weight">
    <WeightList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import WeightList from "../components/WeightList.vue"

export default {
  name: 'WeightView',
  components: {
    WeightList
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