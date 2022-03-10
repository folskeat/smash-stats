<template>
    <div class="wrapper">
        <div class="characters">
            <table>
                <col span="1" class="rank">
                <col span="1" class="name">
                <thead>
                    <tr class="top">
                        <th>Rank</th>
                        <th>Name</th>
                        <th bgcolor="#83d8eb">Weight</th>
                        <th>Walk Speed</th>
                        <th>Run Speed</th>
                        <th>Initial Dash Speed</th>
                        <th>Horizontal Air Speed</th>
                        <th>Air Acceleration</th>
                        <th>Fall Speed</th>
                        <th>Fast Fall Speed</th>
                        <th>Gravity Multiplier</th>
                        <th>Full Hop Height</th>
                        <th>Short Hop Height</th>
                        <th>Double Jump Height</th>
                    </tr>
                </thead>
                <tr v-for="(character, index) in sortedCharacters" :key="character.csspos">
                    <td>{{ranking((index + 1), character.weight)}}</td>
                    <td>{{character.name}}</td>
                    <td bgcolor="#83d8eb"><b>{{character.weight}}</b></td>
                    <td>{{character.walk}}</td>
                    <td>{{character.run}}</td>
                    <td>{{character.dash}}</td>
                    <td>{{character.airmove}}</td>
                    <td>{{character.airacc}}</td>
                    <td>{{character.fall}}</td>
                    <td>{{character.fastfall}}</td>
                    <td>{{character.gravity}}</td>
                    <td>{{character.fullhop}}</td>
                    <td>{{character.shorthop}}</td>
                    <td>{{character.doublejump}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.characters {
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    overflow-y: scroll;
}

.characters h1, h2, h3, p {
    margin: 0px;
}

.characters table {
    position: relative;
    background: #fdfdfd;
    border: 3px solid #afafaf;
    border-collapse: collapse;
    color: #000;
    margin-left: 10px;
    margin-right: 10px;
    table-layout: fixed;
    width: 960px;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;
    overflow-y: scroll;
}

.characters th, td {
    border: 1px solid #afafaf;
    height: 25px;
    white-space: nowrap;
    overflow: auto;
}

.characters th {
    border: 2px solid #afafaf;
}

.characters tr:nth-child(even) {
    background-color: #dedede;
}

.rank {
    width: 50px;
}

.name {
    width: 100px;
}

.auto {
    margin-left: auto;
}
</style>

<script>

export default {
  name: 'WeightView',
  rank: 0,
  prevChar: 0,
  computed: {
        sortedCharacters: function() {
            function compare(a, b) {
                if (a.weight < b.weight) {
                    return 1;
                }
                if (a.weight > b.weight) {
                    return -1;
                }
                return 0;
            }
            function newArray(characters) {
                var newChars = [];
                for (var i = 0; i < characters.length; i++) {
                    newChars[i] = characters[i];
                }
                return newChars;
            }
            var newChar = newArray(this.characters);
            return newChar.sort(compare);
        },
  },
  methods: {
      ranking(index, weight) {
          if (weight < this.$options.prevChar) {
              this.$options.prevChar = weight;
              this.$options.rank = index;
              return index;
          }
          else if (weight === this.$options.prevChar) {
              return this.$options.rank;
          }
          else {
              this.$options.prevChar = weight;
              return index;
          }
      }
  },
  props: {
      characters: Array
  }
}
</script>
