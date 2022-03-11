<template>
  <div class="run">
    <RunList :characters="characters" />
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
    }
  }
}
</script>