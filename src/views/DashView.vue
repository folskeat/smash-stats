<template>
  <div class="dash">
    <DashList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import DashList from "../components/DashList.vue"

export default {
  name: 'DashView',
  components: {
    DashList
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