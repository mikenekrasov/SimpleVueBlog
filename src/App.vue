<template>
  <div id="app">

    <svbNavbarComponent/>
    <div class="container">
      <!-- <router-view :posts = "posts"/> -->
      <router-view/>
    <!-- <svbCreatePost/>
    <svbSinglePost/>
    <svbPostsList
                :posts = "posts"/> -->

  </div>
  </div>
</template>

<script>
import { postsRef } from './config/db';
import NavbarComponent from './components/NavbarComponent.vue';
// import CreatePost from './components/CreatePost.vue';
// import SinglePost from './components/SinglePost.vue'


export default {
  name: 'App',
  components: {
    'svbNavbarComponent': NavbarComponent,
    
    // svbCreatePost: CreatePost,
    // svbSinglePost: SinglePost
  },
  data(){
    return {

    }
  },

  // firebase: {
  //   posts: postsRef
  // },
  methods: {
    // submitTitle: () => {
    //   postsRef.push({ title: this.title, edit: false});
    //   this.title = '';
    // },
    // removetitle(key){
    //   postsRef.child(key).remove();
    // },
    // setEdittitle(key){

    //   postsRef.child(key).update({edit: true})
    // },
    // cancelEdit(key){
    //   postsRef.child(key).update({ edit: false })
    // },
    // saveEdit(person){
    //   const key = person['.key'];
    //   postsRef.child(key).set({ title: person.title, edit: false });
    // }
  },
  computed: {
    // sortedList: () => {
    //   return this.posts.sort((a,b) => { return new Date(a.date) - new Date(b.date) })
    // }
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
