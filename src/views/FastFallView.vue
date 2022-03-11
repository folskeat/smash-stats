<template>
  <div class="fastfall">
    <FastFallList :characters="characters" />
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
    }
  }
}
</script>