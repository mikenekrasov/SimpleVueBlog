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
        <div v-if="post.edit">
            <button type="submit" class="btn btn-dark text-center">Отменить</button>
        </div>

        </div>
    </form>
    <hr>
</div>
</template>

<script>
import { postsRef } from '../config/db';
import Firebase from 'firebase';
import PostService from './PostService';

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
        createPost() {
            if(this.title && this.author && this.description && this.image){

                // postsRef.push({ title:this.title, 
                //                 author:this.author, 
                //                 description:this.description, 
                //                 image:this.image, 
                //                 edit: false, 
                //                 date: Firebase.database.ServerValue.TIMESTAMP });
                this.orderByDate();
                
                // this.$refs.headerModalRef.hide();
            }
        },


        orderByDate(){
                var query = postsRef.orderByChild('date')
                query.on('child_added', function(snap) {
                var person = snap.val();
                console.log(person.date);
                });


            // postsRef.orderByChild('date').endAt(3).on('child_added', function(snap){
            //     console.log('added', snap.val());
            // });
            // var feed = [];
            // postsRef.orderByChild('date').on('value', (snapshot, error) => {
            //     snapshot.forEach((postSnap) => {
            //         const post = postSnap.val()
            //         console.log(postSnap.key+'='+post.title);
            //         feed.push(post);
            //     });
            // });
            // console.log(feed);

            // postsRef.orderByChild('date').on('value', (snapshot, error) => { 
            //     let feed = {};
            //     snapshot.forEach((childSnapshot) => { 
            //         feed[childSnapshot.key] = childSnapshot.val() 
            //     }) 
            //     console.log('ducks feed: ', feed)
            // })
            // postsRef.on('child_changed', function(snap){
            //     console.log('changed', snap.val());
            // });
            // postsRef.on('value', function(snap){
            //     console.log('value', snap.val());
            // });
            // postsRef.orderByChild('date').on('child_added', function(snapshot) {
            //     console.log(snapshot);
            //     snapshot.forEach(function(child) {
            //         console.log(child.val())
            //     });
            // });
            // postsRef.orderByChild('date').on("child_added", function(snapshot) { 
                // console.log(snapshot.val());
                // console.log(postsRef.database)
                // console.log(snapshot.val())
                // The objects are returned in order, do whatever you like
            // })

                // postsRef.child("date").orderByChild('date').on("value", function (snapshot) {
                // snapshot.forEach(function(child) {
                //     console.log(child.val())
                // });
                // })

        }

    }
}
</script>

<style>

</style>
