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
        <ul class="post-list" v-if="article">
          <div class="load-container load4" v-show="article == null">
            <div class="loader">Loading...</div>
          </div>
          <li v-for="(item, index) in article.list" :key="index">
            <h3>
              <router-link
                :to="{
                  name: 'articleDetailed',
                  params: { arId: item.article.arId }
                }"
                >{{ item.article.arTitle }}</router-link
              >
            </h3>
            <section class="post-excerpt" itemprop="description">
              <p>{{ base64.decode(item.article.arValue) | filterHtml }}</p>
            </section>
            <section class="post-meta">
              <div class="post-categories">
                <i class="fa fa-tags" aria-hidden="true"></i>&nbsp;
                {{ item.category.caTitle }}
              </div>

              <div class="post-date">
                <i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;{{
                  item.article.arTime
                }}
              </div>
            </section>
          </li>

          <hr />
        </ul>

        <nav class="pagination" role="navigation" v-if="article">
          <p>
            <a
              class="newer-posts"
              style="float:left"
              href="javascript:;"
              @click="setPage(article.pageNum - 1)"
              v-show="article.hasPreviousPage"
            >
              <span class="page"> « 上一页 </span>
            </a>

            <a
              class="newer-posts"
              style="float:right"
              href="javascript:;"
              @click="setPage(article.pageNum + 1)"
              v-show="article.hasNextPage"
            >
              <span class="page"> 下一页 »</span>
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
      article: null,
      page: 1
    };
  },
  filters: {
    filterHtml(val) {
      return val.replace(/<[^>]*>/g).replace(/[undefined]/g, "");
    }
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
