<template>
  <div id="app">
    <h1>Characters by...</h1>
    <nav>
      <router-link to="/">Order</router-link> |
      <router-link to="/weight">Weight</router-link> |
      <router-link to="/walk">Walk Speed</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7db3e8;
}

body {
  background-color: #111111;
}

nav {
  padding-top: 0px;
  padding-bottom: 20px;
}

nav a {
  font-weight: bold;
  color: #4c6c8c;
}

nav a.router-link-exact-active {
  color: #7db3e8;
}
</style>
