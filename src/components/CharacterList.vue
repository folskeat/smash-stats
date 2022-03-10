<template>
    <div class="wrapper">
        <div class="characters">
            <div class="character" v-for="character in characters" :key="character.csspos">
                <div class="info">
                    <h1>{{character.name}}</h1>
                    <p>{{character.csspos}}</p>
                </div>
                <div class="image">
                    <img :src="'/images/characters/'+character.image+'.png'">
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

.character {
    margin: 10px;
    margin-top: 50px;
    width: 200px;
}

.character img {
    border: 2px solid #333;
    height: 250px;
    width: 200px;
    object-fit: cover;
}

.character .image {
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
}

.info {
    background: #f2921d;
    color: #000;
    padding: 10px 30px;
    height: 80px;
}

.info h1 {
    font-size: 16px;
}

.info h2 {
    font-size: 14px;
}

.info p {
    margin: 0px;
    font-size: 10px;
}

.price {
    display: flex;
}

button {
    height: 50px;
    background: #000;
    color: white;
    border: none;
}

.auto {
    margin-left: auto;
}
</style>

<script>

export default {
  name: 'HomeView',
  props: {
      characters: Array
  },
}
</script>
