<template>
  <div class="doublejump">
    <DoubleJumpList :characters="characters" :alternates="alternates" />
  </div>
</template>


<script>
import DoubleJumpList from "../components/DoubleJumpList.vue"

export default {
  name: 'DoubleJumpView',
  components: {
    DoubleJumpList
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