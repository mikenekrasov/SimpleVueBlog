<template>
<div class="mt-5 mb-5">
    <form @submit.prevent="createPost()">
        <div class="form-row">
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
import { postsRef } from '../config/db';
import Firebase from 'firebase';

export default {
    name:"CreatePost",
    props:{
        // post:Object
    },
    data() {
        return {
            post:{},
            title:'',
            author:'',
            description:'',
            image:'',

        }
    },
    methods: {
        // currentTimestamp(){
        //     return Math.round(+new Date()/1000);
        // },
        // currentDate: () => {
        //     let today = new Date().getTime(),
        //         dd = today.getDate(),
        //         mm = today.getMonth()+1,
        //         yyyy = today.getFullYear();
        //     if(dd < 10) {
        //         dd = '0' + dd
        //     } 
        //     if(mm < 10) {
        //         mm = '0' + mm
        //     } 
        //     return today = (dd + '.' + mm + '.' + yyyy)
        // },
        // createPost() {
        //     if(this.title && this.author && this.description && this.image){

        //         postsRef.push({ title:this.title, 
        //                         author:this.author, 
        //                         description:this.description, 
        //                         image:this.image, 
        //                         edit: false, 
        //                         date: Firebase.database.ServerValue.TIMESTAMP });
        //     }
        // },
        createPost(){
            this.$emit('createPost', { title:this.title, 
                                        author:this.author, 
                                        description:this.description, 
                                        image:this.image, 
                                        edit: false, 
                                        date: Firebase.database.ServerValue.TIMESTAMP })
        },
        removePost(post){
			this.$emit('removePost', post)
		},
        orderByDate(){
                var query = postsRef.orderByChild('date')
                query.on('child_added', function(snap) {
                var person = snap.val();
                console.log(person.date);
                });

        }

    }
}
</script>

<style>

</style>
