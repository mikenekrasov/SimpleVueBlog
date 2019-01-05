<template>
    <!-- <div class="posts-list posts-list--default one-right-sidebar"> -->
		<article id="post-157" class="posts-list__item post-157 post type-post status-publish format-standard has-post-thumbnail hentry has-thumb">
			<div class="row">
			<div class="col-md-8">
				<div id="primary">
					<main id="main" class="site-main" role="main">
			<!-- Blog Entries Column -->
			<!-- Title -->
			<header class="entry-header">
				<h1 class="entry-title mt-4">
					<!-- <a :href="post['.key']" rel="bookmark" @click="viewDetailsClicked">{{post.title}}</a> -->
					<router-link :to="{ name:'PostDetails', params: { id: post['.key'] }}">{{post.title}}</router-link>
					<!-- <router-link @click.native="sendPostObject" :to="{ name:'PostDetails', params: { id: post['.key'] }}">{{post.title}}</router-link> -->
				</h1>
			</header>
			<!-- Author -->
			<div class="entry-meta">
				<span class="post-author">
					<p class="post-author lead">by {{post.author}}</p>
				</span>
			<!-- Date/Time -->
				<span class="post__date">
					<time class="post-date__time">{{post.date}}</time>
				</span>
			</div>
			<hr>
			<!-- Preview Image -->
			<figure class="post-thumbnail">
                <router-link :to="{ path: 'details/'}">
				<!-- <a class="post-thumbnail__link post-thumbnail--fullwidth" href="#"> -->
					<img class="post-thumbnail__img wp-post-image" :src="post.image" :alt="post.title">
				<!-- </a> -->
                </router-link>
			</figure>
			<!-- Post Content -->
			<div class="entry-content">
				<p class="lead">{{post.description | limit}}</p>
			</div>
			<hr>
			</main>
			</div>
			</div>
			<div class="col-md-4">
				<aside id="sidebar-primary">
					<header class="entry-header">
						<!-- <button @click="editPost(post['.key'])" class="btn btn-transparent mt-4">Редактировать</button> -->
						<button @click="removePost(post['.key'])" class="btn btn-transparent mt-4">Удалить</button>
					</header>
				</aside>
			</div>
			</div>
		</article>
	<!-- </div> -->
</template>

<script>
import { postsRef } from '../config/db';
import {Service} from '../main';
// import PostDetails from './PostDetails.vue'
// import PostService from './PostService.js';

export default {
	name: "PostItem",
    props: {
        post: Object
	},
	// components:{
	// 	PostDetails
	// },
    data (){
        return {
			id: this.$route.params.id
        }
	},
	filters:{
		limit(value) {
			return value.slice(0,100) + "..."
		}
	},
    methods: {
        removePost(key){
			console.log(this.post)
			// console.log(postsRef.child(key))
			if (confirm("Вы уверены?")) {
				postsRef.child(key).remove();
			}
        },
        editPost(key){
            postRef.child(key).update({edit: true});
		},
		// sendPostObject(){
		// 	Service.$emit('postObjectSent', this.post);
		// },
        viewDetailsClicked() {
			// this.$emit("viewDetails",this.post.date);
			let key = this.post['.key'];
			// this.viewDetails(key);
			// PostService.viewDetails(key);
			// this.$router.push('/detail/' + key);
        }
    }
}
</script>

<style>

</style>
