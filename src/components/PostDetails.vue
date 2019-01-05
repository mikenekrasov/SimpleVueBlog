<template>
    <!-- <div class="posts-list posts-list--default one-right-sidebar"> -->
		<article id="post-157" class="post">
			<router-link :to="'/'">Назад</router-link>
			<h1>Пост {{id}}</h1>
			<div class="row">
			<div class="col-md-12">
				<div id="primary">
					<main id="main" class="site-main" role="main">
			<!-- Blog Entries Column -->
			<!-- Title -->
			<header class="entry-header">
				<h1 class="entry-title mt-4">
					<!-- <a href="#" rel="bookmark">{{post.title}}</a> -->
				</h1>
			</header>
			<!-- Author -->
			<div class="entry-meta">
				<span class="post-author">
					<!-- <p class="post-author lead" href="#">by {{post.author}}</p> -->
				</span>
			<!-- Date/Time -->
				<span class="post__date">
					<!-- <time class="post-date__time">{{post.date}}</time> -->
				</span>
			</div>


			<hr>
			<!-- Preview Image -->
			<figure class="post-thumbnail">
				<a class="post-thumbnail__link post-thumbnail--fullwidth" href="#">
					<!-- <img class="post-thumbnail__img wp-post-image" :src="post.image" :alt="post.title"> -->
				</a>
			</figure>
			<hr>
			<!-- Post Content -->
			<div class="entry-content">
				<!-- <p class="lead">{{post.description}}</p> -->
			</div>
			<hr>
			</main>
			</div>
			</div>
			</div>
		</article>
	<!-- </div> -->
</template>
<script>
import { postsRef } from '../config/db';


export default {
	name:'PostDetails',
	props:['recievedPost'],
    data() {
        return {
			id: this.$route.params.id,
			post: {}
        }
	},
	created() {
	
	},
	watch:{
		$route: "updateId"
	},
    methods: {
        updateId(){
			this.id = this.$route.params.id
		}
    }
}
</script>
