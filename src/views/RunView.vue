<template>
  <div class="run">
    <RunList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import RunList from "../components/RunList.vue"

export default {
  name: 'RunView',
  components: {
    RunList
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