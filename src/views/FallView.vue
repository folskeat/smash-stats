<template>
  <div class="fall">
    <FallList :characters="characters" />
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
    }
  }
}
</script>