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
          <li v-for="(item, index) in article.list" :key="index">
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
            <a
              class="newer-posts"
              href="javascript:;"
              @click="setPage(article.pageNum - 1)"
              v-show="article.hasPreviousPage"
            >
              <span class="fa-stack fa-lg">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-angle-double-left fa-stack-1x fa-inverse"></i>
              </span>
            </a>

            <span class="page-number">
              {{ article.pageNum }} of
              {{
                article.nextPage == 0 ? article.pageNum : article.nextPage
              }}</span
            >
            <a
              class="newer-posts"
              href="javascript:;"
              @click="setPage(article.pageNum + 1)"
              v-show="article.hasNextPage"
            >
              <span class="fa-stack fa-lg">
                <i class="fa fa-square fa-stack-2x"></i>
                <i class="fa fa-angle-double-right fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </p>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: [],
      page: 1
    };
  },
  methods: {
    getArticle() {
      this.axios
        .get("/api/article.do", { params: { page: this.page } })
        .then(res => {
          this.article = res.data.data;
          window.console.log(res.data);
        });
    },
    setPage(value) {
      this.page = value;
      this.getArticle();
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
