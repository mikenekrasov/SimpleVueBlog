<template>
	<div>
		<create-post @createPost="createPost" :post="post"/>
		<post-item v-for="(post, index) in posts" :key="index" :post="post" @removePost="removePost"  />
	</div>
</template>
<script>

import {postsRef} from '../config/db';
import CreatePost from './CreatePost.vue'
import PostItem from './PostItem.vue';


export default {
	name:"PostLists",
    props: {
		post: Object
	},
	data(){
		return {
			posts:[],
			id:null
		}
	},
	created(){
		// postsRef.on('child_added', snapshot => console.log(snapshot.val()));


		postsRef.orderByChild('date').on('child_added', snapshot => {
			this.posts.push({...snapshot.val(),	id:snapshot.key})
			this.posts.date = -1 * snapshot.val().date 

			console.log(snapshot.val().date + '  ' +snapshot.val().title);
		})

		postsRef.on('child_removed', snapshot => {
			const findTheKey = this.posts.find(post => post.id == snapshot.key)
			const index = this.posts.indexOf(findTheKey)
			this.posts.splice(index,1)
		})

	},
	components: {
		'post-item':PostItem,
		'create-post':CreatePost
	},
  methods: {
	createPost(post) {
		postsRef.push(post);
		// post.title = '';
		// post.author = '';
		// post.description ='';
		// post.image='';

	},
	removePost(post){
		if (confirm("Вы уверены?")) {
			console.log(post)
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