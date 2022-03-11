<template>
  <div class="doublejump">
    <DoubleJumpList :characters="characters" />
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
    }
  }
}
</script>