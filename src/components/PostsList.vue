<template>
	<div>
		<create-post @createPost="createPost" :post="post"/>
		<post-item v-for="(post, index) in posts" :key="post.id" :post="post" @removePost="removePost"  />
	</div>
</template>
<script>
import {postsRef, db} from '../config/db';
import CreatePost from './CreatePost.vue'
import PostItem from './PostItem.vue';


export default {
	name:"PostLists",
    props: {
		post:{
			type: Object
		}
	},
	data(){
		return {
			posts:[],
			id:null,
			title:'',
            author:'',
            description:'',
            image:''
		}
	},
	created(){
		
		postsRef.orderByChild('date').on('child_added', snapshot => {
			this.posts.push({...snapshot.val(),	id:snapshot.key})
			this.posts.sort((a, b) => b.date-a.date);

		})

		postsRef.orderByChild('date').on('child_changed', snapshot => {
			const updatedPost = this.posts.find(post => post.id == snapshot.key)
			updatedPost.title = snapshot.val().title
			updatedPost.author = snapshot.val().author
			updatedPost.description = snapshot.val().description
			updatedPost.image = snapshot.val().image
			updatedPost.date = snapshot.val().date

		})

		postsRef.on('child_removed', snapshot => {
			const updatedPost = this.posts.find(post => post.id == snapshot.key)
			const index = this.posts.indexOf(updatedPost)
			this.posts.splice(index,1)
		})

	},
	components: {
		'post-item':PostItem,
		'create-post':CreatePost
	},
  methods: {
	createPost(post) {
		postsRef.push(post)
		// const promise = postsRef.push(post)
		// const key = promise.key
		// 	promise.then(_ => {
		// 		const dateRef = db.ref('/posts/' + key)
		// 			dateRef.once('value').then((snapshot) => {
		// 				let date = snapshot.val().date * -1
		// 				dateRef.update({ date })
		// 				console.log(this.posts)

		// 	});
		// })
	},
	removePost(post){
		if (confirm("Вы уверены?")) {
			postsRef.child(post.id).remove();
		}
	},
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
}
</script>
<style>
img {
    height: auto;
    max-width: 100%;
}
</style>