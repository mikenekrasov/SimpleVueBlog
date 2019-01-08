<template>
	<article id="post" class="posts-list__item post type-post status-publish format-standard has-post-thumbnail hentry has-thumb">
		<div class="row">
			<div class="col-md-8">
				<div id="primary">
					<main id="main" class="site-main" role="main">
						<!-- Blog Entries Column -->
						<!-- Title -->
						<header class="entry-header">
							<h1 class="entry-title mt-4">
					<router-link :to="{ name:'PostDetails', params: { id: post.id, post: this.post }}">{{post.title}}</router-link>
				</h1> </header>
						<!-- Author -->
						<div class="entry-meta"> <span class="post-author">
					<p class="post-author lead">Автор: {{post.author}}</p>
				</span>
							<!-- Date/Time --><span class="post__date">
					<time class="post-date__time">{{post.date | convertToDate}}</time>
				</span> </div>
						<hr>
						<!-- Preview Image -->
						<figure class="post-thumbnail">
							<router-link :to="{ name:'PostDetails', params: { id: post.id, post: this.post }}">
								<b-img fluid :src="post.image" :alt="post.title"/>
								<!-- <img class="post-thumbnail__img wp-post-image" :src="post.image" :alt="post.title"> -->
							</router-link>
						</figure>
						<!-- Post Content -->
						<div class="entry-content">
							<p class="lead">{{post.description | limitContent}}</p>
						</div>
						<hr> </main>
				</div>
			</div>
			<div class="col-md-4">
				<aside id="sidebar-primary">
					<header class="entry-header">
						<b-btn @click="removePost(post)" variant="outline-secondary" class="mt-4">Удалить</b-btn>
					</header>
				</aside>
			</div>
		</div>
	</article>
</template>

<script>
import { postsRef } from '../config/db';


export default {
	name: "PostItem",
    props: {
        post: {
			type: Object,
			required: true
		}

	},
    data (){
        return {

        }
	},
	filters:{
		limitContent(value) {
			let nextSpace = value.indexOf(' ', 100)
				return value.length <= 100 ? value : value.slice(0, nextSpace) + " ..."

			},
		convertToDate(timestamp) {
			let newDate = Math.abs(timestamp)
			let options = { year: 'numeric', month: 'numeric', day: 'numeric' };
			return new Date(newDate).toLocaleString('ru-RU', options)
		}
	},
    methods: {
		removePost(post){
			this.$emit('removePost', post)
			},
    }
}
</script>

<style>

</style>
