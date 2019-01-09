import Vue from "vue";
import Router from "vue-router";
import Article from "./views/Article.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Article",
      component: Article
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Article.vue")
    }
  ]
});
