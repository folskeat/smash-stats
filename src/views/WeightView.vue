<template>
  <div class="weight">
    <WeightList :characters="characters" />
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
    }
  }
}
</script>