<template>
  <div id="app">
      <TheNavbar/>
      <div class="container">
        <router-view/>
      </div>
  </div>
</template>

<script>
export const store = {
  debug: true,
  state: {
    message: "Привет!"
  },
  setMessageAction(newValue) {
    if (this.debug) console.log("setMessageAction вызвано с ", newValue);
    this.state.message = newValue;
  },
  clearMessageAction() {
    if (this.debug) console.log("clearMessageAction вызвано");
    this.state.message = "";
  }
};

import TheNavbar from './components/TheNavbar.vue';


export default {
  name: 'App',
  components: {
    TheNavbar
 
  },
  data(){
    return {

    }
  },

  methods: {

  },
  computed: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
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

.btn-transparent {
  background: transparent;
  border: 2px solid #000000;
  outline: none;
  padding: .375rem .75rem;
  cursor: pointer;
}
.btn-transparent:hover{
  background: #000000;
  color: #FFFFFF;
  cursor: pointer;
}
</style>
