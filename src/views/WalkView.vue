<template>
  <div class="walk">
    <WalkList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import WalkList from "../components/WalkList.vue"

export default {
  name: 'WalkView',
  components: {
    WalkList
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