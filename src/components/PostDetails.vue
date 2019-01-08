<template>
  <article id="post" class="post">
    <router-link :to="'/'">
      <b-btn class="mt-4" variant="outline-secondary">Назад</b-btn>
    </router-link>
    <b-row>
      <b-col md="12">
        <div id="primary">
          <main id="main" class="site-main" role="main">
            <!-- Title -->
            <header class="entry-header">
              <h1 class="entry-title mt-4">
                <a href="#" rel="bookmark">{{post.title}}</a>
              </h1>
            </header>
            <!-- Author -->
            <div class="entry-meta">
              <span class="post-author">
                <p class="post-author lead" href="#">Автор: {{post.author}}</p>
              </span>
              <!-- Date/Time -->
              <span class="post__date">
                <time class="post-date__time">{{post.date | convertToDate}}</time>
              </span>
            </div>
            <hr>
            <!-- Preview Image -->
            <figure class="post-thumbnail">
              <a class="post-thumbnail__link post-thumbnail--fullwidth" href="#">
                <img class="post-thumbnail__img wp-post-image" :src="post.image" :alt="post.title">
              </a>
            </figure>
            <hr>
            <!-- Post Content -->
            <div class="entry-content">
              <p class="lead">{{post.description}}</p>
            </div>
            <hr>
          </main>
        </div>
      </b-col>
    </b-row>
  </article>
</template>
<script>

export default {
  name: "PostDetails",

  data() {
    return {
      id: this.$route.params.id,
      post: this.$route.params.post
    }
  },

  filters: {
    convertToDate(timestamp) {
      let newDate = Math.abs(timestamp);
      let options = { year: "numeric", month: "numeric", day: "numeric" };
      return new Date(newDate).toLocaleString("ru-RU", options);
    }
  },

  watch: {
    $route: "updateId"
  },

  methods: {
    updateId() {
      this.id = this.$route.params.id;
    }
  }
}
</script>
<style scoped>
</style>
