<template>
  <div id="app">
    <TheNavbar/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";

export default {
  name: "App",

  components: {
    TheNavbar
  }
  
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
