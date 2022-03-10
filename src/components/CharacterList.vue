<template>
    <div class="wrapper">
        <div class="characters">
            <div class="character" v-for="character in characters" :key="character.csspos">
                <div class="info">
                    <h1>{{character.name}}</h1>
                    <h2>#{{character.csspos}}</h2>
                </div>
                <div class="image">
                    <img :src="'/images/characters/'+character.image+'.png'">
                </div>
                <div class="stats">
                    <button @click="buttonMenus(character, characters)" :class="{'active': character.isDropped, 'inactive': !character.isDropped}">Character Stats</button>
                    <ul class="list" v-if="character.isDropped">
                        <li>Weight: {{character.weight}}</li>
                        <li>Walk Speed: {{character.walk}}</li>
                        <li>Run Speed: {{character.run}}</li>
                        <li>Initial Dash Speed: {{character.dash}}</li>
                        <li>Horizontal Air Speed: {{character.airmove}}</li>
                        <li>Air Acceleration: {{character.airacc}}</li>
                        <li>Fall Speed: {{character.fall}}</li>
                        <li>Fast Fall Speed: {{character.fastfall}}</li>
                        <li>Gravity Multiplier: {{character.gravity}}</li>
                        <li>Full Hop Height: {{character.fullhop}}</li>
                        <li>Short Hop Height: {{character.shorthop}}</li>
                        <li>Double Jump Height: {{character.doublejump}}</li>
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
    position: absolute;
    width: 248px;
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
  },
  props: {
      characters: Array
  }
}
</script>
