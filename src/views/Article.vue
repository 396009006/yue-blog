<template>
  <div class="page-content">
    <div class="home">
      <div class="site-header-container has-cover">
        <div class="scrim has-cover">
          <header class="site-header">
            <h1 class="title">杨gg 'Blog</h1>
            <p class="subtitle">我的船上没有手下，只有伙伴。</p>
          </header>
        </div>
      </div>

      <div class="wrapper">
        <ul class="post-list">
          <li v-for="(item, index) in article" :key="index">
            <h2>
              <a
                class="post-link"
                href="/centrarium/jekyll/2015/04/18/welcome-to-jekyll.html"
                >{{ item.article.arTitle }}</a
              >
            </h2>
            <section class="post-excerpt" itemprop="description">
              <p>{{ item.article.arValue }}</p>
            </section>
            <section class="post-meta">
              <div class="post-date">
                <i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{{
                  item.article.arTime
                }}
              </div>
              <div class="post-categories">
                in

                <a href="/centrarium/category/jekyll">Jekyll</a>
              </div>
            </section>
          </li>

          <hr />
        </ul>

        <nav class="pagination" role="navigation">
          <p>
            <a class="newer-posts" href="/centrarium/page2">
              <span class="fa-stack fa-lg">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-angle-double-left fa-stack-1x fa-inverse"></i>
              </span>
            </a>

            <span class="page-number">Page 1 of 2</span>

            <span class="fa-stack fa-lg">
              <i class="fa fa-square fa-stack-2x"></i>
              <i class="fa fa-angle-double-right fa-stack-1x fa-inverse"></i>
            </span>
          </p>
          <p><a href="/centrarium/posts">View All Posts by Category</a></p>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: []
    };
  },
  methods: {
    getArticle() {
      this.axios.get("/api/article.do").then(res => {
        this.article = res.data.data.list;
        window.console.log(this.article);
      });
    }
  },
  created() {
    this.getArticle();
  }
};
</script>

<style lang="less">
.site-header-container {
  background-image: url("../assets/images/header_image.jpg");
}
</style>
