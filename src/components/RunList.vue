<template>
    <div class="wrapper">
        <div class="top">
            <h2>Hide Columns</h2>
            <label class="switch">
                <input type="checkbox" @click="hideCols">
                <span class="slider"></span>
            </label>
        </div>
        <div class="break"></div>
        <div class="space"></div>
        <div class="top">
            <h2>Show All</h2>
            <label class="switch">
                <input type="checkbox" @click="showAll">
                <span class="slider"></span>
            </label>
        </div>
        <div class="break"></div>
        <div class="characters">
            <table v-bind:style="{ width: newWidth }">
                <col span="1" class="rank">
                <col span="1" class="icon">
                <col span="1" class="name">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Icon</th>
                        <th>Name</th>
                        <th v-if="!hidden">Weight</th>
                        <th v-if="!hidden">Walk Speed</th>
                        <th bgcolor="#83d8eb">Run Speed</th>
                        <th v-if="!hidden">Initial Dash Speed</th>
                        <th v-if="!hidden">Horizontal Air Speed</th>
                        <th v-if="!hidden">Air Acceleration</th>
                        <th v-if="!hidden">Fall Speed</th>
                        <th v-if="!hidden">Fast Fall Speed</th>
                        <th v-if="!hidden">Gravity Multiplier</th>
                        <th v-if="!hidden">Full Hop Height</th>
                        <th v-if="!hidden">Short Hop Height</th>
                        <th v-if="!hidden">Double Jump Height</th>
                    </tr>
                </thead>
                <tr v-for="(character, index) in sortedCharacters" :key="character.csspos">
                    <td>{{ranking((index + 1), character.run)}}</td>
                    <td><img :src="'/images/icons/' + character.image + '.png'"></td>
                    <td>{{character.name}}</td>
                    <td v-if="!hidden">{{character.weight}}</td>
                    <td v-if="!hidden">{{character.walk}}</td>
                    <td bgcolor="#83d8eb"><b>{{character.run}}</b></td>
                    <td v-if="!hidden">{{character.dash}}</td>
                    <td v-if="!hidden">{{character.airmove}}</td>
                    <td v-if="!hidden">{{character.airacc}}</td>
                    <td v-if="!hidden">{{character.fall}}</td>
                    <td v-if="!hidden">{{character.fastfall}}</td>
                    <td v-if="!hidden">{{character.gravity}}</td>
                    <td v-if="!hidden">{{character.fullhop}}</td>
                    <td v-if="!hidden">{{character.shorthop}}</td>
                    <td v-if="!hidden">{{character.doublejump}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.top h2 {
    margin-right: 20px;
}

.break {
    flex-basis: 100%;
    flex-grow: 0;
    width: 0;
}

.space {
    margin-bottom: 15px;
}

/*toggle slider*/

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    left: 0px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked + .slider {
    background-color: #7db3e8;
}

input:focus + .slider {
    box-shadow: 0 0 1px #7db3e8;
}

input:checked + .slider:before {
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
}

/*The meat*/

.characters {
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
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
    width: 1000px;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: auto;
}

.characters th, td {
    border: 1px solid #afafaf;
    height: 25px;
    white-space: nowrap;
    overflow: auto;
    width: 160px;
}

.characters th {
    border: 2px solid #afafaf;
}

.characters tr:nth-child(even) {
    background-color: #dedede;
}

td img {
    width: 25px;
    height: 25px;
}

.rank {
    width: 50px;
}

.icon {
    width: 40px;
}

.name {
    width: 150px;
}

.auto {
    margin-left: auto;
}
</style>

<script>

export default {
  name: 'RunView',
  rank: 0,
  prevChar: 0,
  data() {
    return {
      hidden: false,
      show: false,
      width: 960,
    }
  },
  computed: {
        sortedCharacters: function() {
            function compare(a, b) {
                if (a.run < b.run) {
                    return 1;
                }
                if (a.run > b.run) {
                    return -1;
                }
                return 0;
            }
            function newArray(characters, alternates, show) {
                var newChars = [];
                for (var i = 0; i < characters.length; i++) {
                    newChars[i] = characters[i];
                }
                if (show) {
                    for (i = 0; i < alternates.length; i++) {
                        let round = Math.floor(alternates[i].csspos);
                        newChars.splice(round + i, 0, alternates[i])
                    }
                }
                return newChars;
            }
            var newChar = newArray(this.characters, this.alternates, this.show);
            return newChar.sort(compare);
        },
        newWidth: function () {
            return this.width + 'px';
        }
  },
  methods: {
      ranking(index, run) {
          if (run < this.$options.prevChar) {
              this.$options.prevChar = run;
              this.$options.rank = index;
              return index;
          }
          else if (run === this.$options.prevChar) {
              return this.$options.rank;
          }
          else {
              this.$options.prevChar = run;
              return index;
          }
      },
      hideCols() {
          this.hidden = !this.hidden;
          if (this.width > 300) {
            this.width = 270;
          }
          else {
              this.width = 1000;
          }
      },
      showAll() {
          this.show = !this.show;
      }
  },
  props: {
      characters: Array,
      alternates: Array,
  }
}
</script>
