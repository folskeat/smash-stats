<template>
    <div class="wrapper">
        <div class="characters">
            <div class="character" v-for="character in characters" :key="character.csspos">
                <div class="info">
                    <h1 v-if="!character.toggleAlt">{{character.name}}</h1>

                    <h1 v-if="character.toggleAlt">{{retAlt(character).name}}</h1>

                    <h2 v-if="!character.toggleAlt || !retAlt(character).isEcho">#{{character.csspos}}</h2>

                    <h2 v-if="character.toggleAlt && retAlt(character).isEcho">#{{character.csspos}}&epsilon;</h2>
                </div>
                <div class="image">
                    <img v-if="!character.toggleAlt" :src="'/images/characters/'+character.image+'.png'" @click="toggleAlt(character)">
                    <img v-if="character.toggleAlt" :src="'/images/characters/'+retAlt(character).image+'.png'" @click="toggleAlt(character)">
                </div>
                <div class="s">
                    <button @click="buttonMenus(character, characters)" :class="{'active': character.isDropped, 'inactive': !character.isDropped}">Character Stats</button>
                    <ul class="list" v-if="character.isDropped">
                        <li v-if="!character.toggleAlt">Weight: {{character.weight}}</li>
                        <li v-if="!character.toggleAlt">Walk Speed: {{character.walk}}</li>
                        <li v-if="!character.toggleAlt">Run Speed: {{character.run}}</li>
                        <li v-if="!character.toggleAlt">Initial Dash Speed: {{character.dash}}</li>
                        <li v-if="!character.toggleAlt">Horizontal Air Speed: {{character.airmove}}</li>
                        <li v-if="!character.toggleAlt">Air Acceleration: {{character.airacc}}</li>
                        <li v-if="!character.toggleAlt">Fall Speed: {{character.fall}}</li>
                        <li v-if="!character.toggleAlt">Fast Fall Speed: {{character.fastfall}}</li>
                        <li v-if="!character.toggleAlt">Gravity Multiplier: {{character.gravity}}</li>
                        <li v-if="!character.toggleAlt">Full Hop Height: {{character.fullhop}}</li>
                        <li v-if="!character.toggleAlt">Short Hop Height: {{character.shorthop}}</li>
                        <li v-if="!character.toggleAlt">Double Jump Height: {{character.doublejump}}</li>

                        <!-- Echo or Alternate Stats -->

                        <li v-if="character.toggleAlt">Weight: {{retAlt(character).weight}}</li>
                        <li v-if="character.toggleAlt">Walk Speed: {{retAlt(character).walk}}</li>
                        <li v-if="character.toggleAlt"> Run Speed: {{retAlt(character).run}}</li>
                        <li v-if="character.toggleAlt">Initial Dash Speed: {{retAlt(character).dash}}</li>
                        <li v-if="character.toggleAlt">Horizontal Air Speed: {{retAlt(character).airmove}}</li>
                        <li v-if="character.toggleAlt">Air Acceleration: {{retAlt(character).airacc}}</li>
                        <li v-if="character.toggleAlt">Fall Speed: {{retAlt(character).fall}}</li>
                        <li v-if="character.toggleAlt">Fast Fall Speed: {{retAlt(character).fastfall}}</li>
                        <li v-if="character.toggleAlt">Gravity Multiplier: {{retAlt(character).gravity}}</li>
                        <li v-if="character.toggleAlt">Full Hop Height: {{retAlt(character).fullhop}}</li>
                        <li v-if="character.toggleAlt">Short Hop Height: {{retAlt(character).shorthop}}</li>
                        <li v-if="character.toggleAlt">Double Jump Height: {{retAlt(character).doublejump}}</li>





                        <!--
                        <li>Max Height from Jumps: {{(character.doublejump * character.numairjump) + character.fullhop}}</li>
                        -->
                    </ul>
               </div>
            </div>
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
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.characters h1, h2, h3, p {
    margin: 0px;
}

.character {
    margin: 10px;
    margin-top: 50px;
    width: 250px;
}

.character img {
    height: 100%;
    width: 248px;
    object-fit: contain;
}

.character .image {
    display: flex;
    justify-content: center;
}

.image {
    margin-top: 10px;
    margin-bottom: 5px;
    height: 250px;
}

.character h1, h2, h3, p {
    margin: 0px;
}

.info {
    border: 5px solid #fff;
    background: #dedede;
    color: #000;
    padding: 0px;
    height: 80px;
}

.info h1 {
    margin-top: 14px;
    font-size: 24px;
}

.info h2 {
    margin-top: 4px;
    font-size: 18px;
}

.info p {
    margin: 0px;
    font-size: 10px;
}

.stats {
    border: 2px solid #333;
    background: #dedede;
    color: #000;
    padding: 0px;
    height: 50px;
}

.stats h3 {
    font-size: 14px;
}

.stats p {
    font-size: 10px;
}

button {
    height: 60px;
    width: 100%;
    background: #000;
    color: #fdfdfd;
    border: 5px solid #fdfdfd;
    font-size: 20px;
    font-weight: 600;
}

.active {
    background: #fdfdfd;
    color: #000;
}

.inactive {
    background: #000;
    color: #fdfdfd;
}

.list {
    color: #000;
    position: absolute;
    width: 247px;
    margin: 0px;
    padding: 0px;
    list-style-type: none;
    overflow: hidden;
}

.list li {
    font-size: 14px;
    padding: 2px;
    padding-bottom: 4px;
    background: #fff;
}

.auto {
    margin-left: auto;
}
</style>

<script>

export default {
  name: 'HomeView',
  methods: {
      buttonMenus(character, characters) {
          for (const obj of characters) {
              if (character === obj) {
                  obj.isDropped = !obj.isDropped;
                  continue;
              }
              obj.isDropped = false;
          }
      },
      toggleAlt(character) {
          if (character.hasAlt) {
              character.toggleAlt = !character.toggleAlt;
          }
      },
      retAlt(character) {
          let curPos = character.csspos + 0.5;
          var found = this.$props.alternates.find(alternate => alternate.csspos === curPos);
          return found;
      }
  },
  props: {
      characters: Array,
      alternates: Array,
  }
}
</script>
