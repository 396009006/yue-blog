<template>
  <div>
    <header class="navigation" role="banner">
      <div class="navigation-wrapper">
        <a href="/" class="logo">
          <img src="./../assets/logo.png" alt="Centrarium" />
        </a>
        <a
          href="javascript:void(0)"
          class="navigation-menu-button"
          @click="menu_show()"
        >
          <i class="fa fa-bars"></i>
        </a>
        <nav role="navigation">
          <ul
            id="js-navigation-menu"
            class="navigation-menu"
            :style="{ display: nav_display }"
          >
            <li class="nav-link"><a href="/centrarium/about/">首页</a></li>
            <li class="nav-link"><a href="/centrarium/posts/">关于</a></li>
            <li class="nav-link"><a href="/centrarium/typography/">项目</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav_display: ""
    };
  },
  methods: {
    menu_show() {
      this.nav_display == "block"
        ? (this.nav_display = "none")
        : (this.nav_display = "block");
    }
  }
};
</script>

<style lang="less">
@import url("./../assets/css/main.css");
</style>
