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
            <li
              class="nav-link"
              v-for="(item, index) in navigation.data"
              :key="index"
            >
              <a href="/centrarium/about/">{{ item.navTitle }}</a>
            </li>
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
      nav_display: "",
      navigation: []
    };
  },
  methods: {
    menu_show() {
      this.nav_display == "block"
        ? (this.nav_display = "none")
        : (this.nav_display = "block");
    },
    getNavigation() {
      this.axios.get("/api/navigation.do").then(res => {
        this.navigation = res.data;
        console.log(res);
      });
    }
  },
  mounted() {
    this.getNavigation();
    console.log(this.navigation);
  }
};
</script>

<style lang="less">
@import url("./../assets/css/main.css");
</style>
