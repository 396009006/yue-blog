import Vue from "vue";
import Router from "vue-router";
import Article from "./views/Article.vue";
import ArticleDetailed from "./views/ArticleDetailed";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "article",
      component: Article
    },
    {
      path: "/article/:arId",
      name: "articleDetailed",
      component: ArticleDetailed
    }
  ]
});
