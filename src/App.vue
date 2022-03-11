<template>
  <div id="app">
    <h1>Characters by...</h1>
    <nav>
      <div>
        <router-link to="/">Search</router-link> |
        <router-link to="/weight">Weight</router-link> |
        <router-link to="/walk">Walk&nbsp;Speed</router-link> |
        <router-link to="/run">Run&nbsp;Speed</router-link> |
        <router-link to="/dash">Initial&nbsp;Dash&nbsp;Speed</router-link> |
        <router-link to="/airmove">Horizontal&nbsp;Air&nbsp;Speed</router-link> |
        <router-link to="/airacc">Air&nbsp;Acceleration</router-link> |
        <router-link to="fall">Fall&nbsp;Speed</router-link> |
        <router-link to="fastfall">Fast&nbsp;Fall&nbsp;Speed</router-link> |
        <router-link to="gravity">Gravity&nbsp;Multiplier</router-link> |
        <router-link to="fullhop">Full&nbsp;Hop&nbsp;Height</router-link> |
        <router-link to="shorthop">Short&nbsp;Hop&nbsp;Height</router-link> |
        <router-link to="doublejump">Double&nbsp;Jump&nbsp;Height</router-link>
      </div>
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

.nowrap {
  white-space: no-wrap;
}
</style>
