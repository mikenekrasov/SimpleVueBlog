<template>
  <div class="mt-5 mb-5">
    <b-form @submit.prevent="createPost()">
      <b-row>
        <b-form-group class="col-md-6" label="Заголовок" label-for="inputTitle">
          <b-form-input
            v-model="title"
            type="text"
            class="form-control"
            id="inputTitle"
            placeholder="Введите название статьи"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="col-md-6" label="Автор" label-for="inputAuthor">
          <b-form-input
            v-model="author"
            type="text"
            class="form-control"
            id="inputAuthor"
            placeholder="Имя автора"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <b-row>
        <b-form-group class="col-md-6" label="Текст статьи" label-for="inputDesc">
          <b-form-textarea
            v-model="description"
            type="text"
            class="form-control"
            id="inputDesc"
            placeholder="Описание"
            :rows="3"
            :max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group class="col-md-6" label="Изображение" label-for="inputImage">
          <b-form-input
            v-model="image"
            type="text"
            class="form-control"
            id="inputImage"
            placeholder="http://"
          ></b-form-input>
        </b-form-group>
      </b-row>
      <b-col class="col mt-5 mb-5 text-center">
        <b-btn type="submit" variant="outline-secondary">Опубликовать</b-btn>
      </b-col>
    </b-form>
    <hr>
  </div>
</template>

<script>
import { postsRef, timestamp} from "../config/db";

export default {
  name: "CreatePost",

  props: {
    post: {
      type: Object
    }
  },

  data() {
    return {
      title: "",
      author: "",
      description: "",
      image: ""
    };
  },

  methods: {
    createPost() {
      if (this.title && this.author && this.description && this.image) {
        this.$emit("createPost", {
          title: this.title,
          author: this.author,
          description: this.description,
          image: this.image,
          date: timestamp
        });
      }
    }
  }
  
}
</script>

<style scoped>
</style>

