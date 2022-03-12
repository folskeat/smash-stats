<template>
  <div class="fall">
    <FallList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import FallList from "../components/FallList.vue"

export default {
  name: 'FallView',
  components: {
    FallList
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