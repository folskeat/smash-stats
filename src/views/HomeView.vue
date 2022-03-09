<template>
  <div>
    <div class="wrapper">
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
      </div>
    </div>
    <CharacterList :characters="characters" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>

<script>
import CharacterList from "../components/CharacterList.vue"

export default {
  name: 'HomeView',
  components: {
    CharacterList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    characters() {
      return this.$root.$data.stat.filter(character => character.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  }
}
</script>
