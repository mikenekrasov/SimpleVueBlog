<template>
<div class="mt-5 mb-5">
    <form @submit.prevent="createPost()">
        <div class="form-row">
            {{post}}
            <div class="form-group col-md-6">
                <label for="inputTitle">Заголовок</label>
                <input v-model="title" type="text" class="form-control" id="inputTitle" placeholder="Введите название статьи">
                </div>
            <div class="form-group col-md-6">
                <label for="inputAuthor">Автор</label>
                <input v-model="author" type="text" class="form-control" id="inputAuthor" placeholder="Имя автора">
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputDesc">Текст статьи</label>
                <textarea v-model="description" class="form-control" id="inputDesc" placeholder="Описание" rows="6"></textarea>
            </div>
            <div class="form-group col-md-6">
                <label for="inputImage">Изображение</label>
                <input v-model="image" type="text" class="form-control" id="inputImage" placeholder="http://"> </div>
        </div>
        <div class="col mt-5 mb-5 text-center">
            <button type="submit" class="btn btn-dark text-center">Опубликовать</button>
        </div>
    </form>
    <hr>
</div>
</template>

<script>
import { postsRef, db } from '../config/db';
import Firebase from 'firebase';

export default {
    name:"CreatePost",
    props:{
        post:{
            type: Object
        }
    },
    data() {
        return {
            title:'',
            author:'',
            description:'',
            image:'',

        }
    },
    methods: {
        createPost(){
            if(this.title && this.author && this.description && this.image) {
                this.$emit('createPost', { title:this.title, 
                                            author:this.author, 
                                            description:this.description, 
                                            image:this.image, 
                                            date: Firebase.database.ServerValue.TIMESTAMP })
            }
        },
    }
}
</script>

<style>

</style>
