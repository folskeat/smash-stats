<template>
  <div class="dash">
    <DashList :characters="characters" />
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
    }
  }
}
</script>