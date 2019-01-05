<template>
	<div>
		<CreatePost/>
		<PostItem :post="post" v-for="post in posts" :key="post['.key']"/>
	</div>
</template>
<script>

import {postsRef} from '../config/db';
import {Service} from '../main';
import CreatePost from './CreatePost.vue'
import PostItem from './PostItem.vue';
// import PostService from './PostService.js';


export default {
	name:"PostLists",
    props: {
		post: Object
	},
	data(){
		return {
			posts:[]
		}
	},
	created(){

		postsRef.on('child_added', snapshot => this.posts.push(snapshot.val()))
		
		// postsRef.orderByChild("date").on("value", function(snapshot, error) {
		// 	console.log(snapshot)
		// 		snapshot.forEach(function(child){
					
		// 			const post = child.val()
		// 			console.log(child.key+'='+child.name);
		// 			this.posts.push(post);
		// 		})
					
		// 		})


  			
		// postsRef.orderByChild("date").on("child_added", snapshot => this.posts.push(snapshot.val()))
		




	},
	components: {
		PostItem,
		CreatePost
	},

	methods: {

	}
}
</script>
<style>
img {
    height: auto;
    max-width: 100%;
}
</style>