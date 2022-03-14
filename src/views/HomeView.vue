<template>
  <div>
    <div class="wrapper">
      <h2>Search</h2>
      <div class="search">
        <form class="pure-form">
          <i class="fas fa-search"></i><input v-model="searchText" />
        </form>
      </div>
    </div>
    <CharacterList :characters="characters" :alternates="alternates" />
    <div class="space"></div>
    <a href="https://github.com/folskeat/smash-stats"><img src="/images/githubwhite.png" alt=""></a>
    <h4>Smash Stats is a fan project, created out of love for the game, and has no intended commercial uses. 
      All characters are property of Nintendo, Konami, Bandai Namco, SEGA, Atlus, Monolith, Platinum, Square Enix, 
      Pokemon, CAPCOM, Microsoft, Rare, Mojang, and Disney.</h4>
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
  background-color: white;
}

.space {
    margin-bottom: 15px;
}

form {
  display: table;
  background-color: #fff;
  color: #000;
}

.pure-form {
  width: 100%;
}

h2 {
  margin-right: 20px;
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

img {
  width: 40px;
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
    },
    alternates() {
      return this.$root.$data.alt;
    }
  }
}
</script>
