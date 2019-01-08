<template>
  <div>
    <CreatePost
      :post="post"
      @createPost="createPost"/>
    <PostItem
      v-for="post in posts" 
      :key="post.id" 
      :post="post" 
      @removePost="removePost"/>
  </div>
</template>
<script>
import { postsRef} from "../config/db";
import CreatePost from "./CreatePost.vue";
import PostItem from "./PostItem.vue";

export default {
  name: "PostLists",
  
  props: {
    post: {
      type: Object
    }
  },

  data() {
    return {
      posts: [],
      id: null,
      title: "",
      author: "",
      description: "",
      image: ""
    };
  },

  created() {
    postsRef.orderByChild("date").on("child_added", snapshot => {
      this.posts.push({ ...snapshot.val(), id: snapshot.key });
      this.posts.sort((a, b) => b.date - a.date);
    });

    postsRef.orderByChild("date").on("child_changed", snapshot => {
      const updatedPost = this.posts.find(post => post.id == snapshot.key);
      updatedPost.title = snapshot.val().title;
      updatedPost.author = snapshot.val().author;
      updatedPost.description = snapshot.val().description;
      updatedPost.image = snapshot.val().image;
      updatedPost.date = snapshot.val().date;
    });

    postsRef.on("child_removed", snapshot => {
      const updatedPost = this.posts.find(post => post.id == snapshot.key);
      const index = this.posts.indexOf(updatedPost);
      this.posts.splice(index, 1);
    });
  },
  components: {
    PostItem,
    CreatePost
  },

  methods: {
    createPost(post) {
      postsRef.push(post);
    },
    removePost(post) {
      if (confirm("Вы уверены?")) {
        postsRef.child(post.id).remove();
      }
    }
  }
}
</script>
<style scoped>
img {
  height: auto;
  max-width: 100%;
}
</style>