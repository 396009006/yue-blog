<template>
  <div class="page-content">
    <div class="post">
      <div class="post-header-container ">
        <div class="scrim ">
          <header v-if="article" class="post-header">
            <h1 class="title">{{ article.data.article.arTitle }}</h1>
            <p class="info">by <strong>Ben Centra</strong></p>
          </header>
        </div>
      </div>
      <div class="wrapper">
        <span class="page-divider">
          <span class="one"></span> <span class="two"></span>
        </span>

        <section class="post-meta">
          <div class="post-date">April 18, 2015</div>
          <div class="post-categories">
            in

            <a href="/centrarium/category/dummy">Dummy</a>
          </div>
        </section>

        <div class="load-container load4" v-show="content == null">
          <div class="loader">Loading...</div>
        </div>
        <article class="post-content" v-html="content"></article>

        <section class="tags" v-if="article">
          <strong>Tags:</strong>
          <a href="/centrarium/tag/lorem">{{
            article.data.category.caTitle
          }}</a>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arId: "",
      article: null,
      content: null
    };
  },
  methods: {
    getArticle() {
      this.axios
        .get("/api/article/detailed.do", { params: { id: this.arId } })
        .then(res => {
          this.article = res.data;
          this.content = this.base64.decode(this.article.data.article.arValue);
        });
    }
  },
  mounted() {
    this.arId = this.$route.params.arId;
    this.getArticle();
  },
  created() {}
};
</script>

<style>
@import url("./../assets/css/loading.css");
</style>
