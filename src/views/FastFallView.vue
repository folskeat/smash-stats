<template>
  <div class="fastfall">
    <FastFallList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import FastFallList from "../components/FastFallList.vue"

export default {
  name: 'FastFallView',
  components: {
    FastFallList
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