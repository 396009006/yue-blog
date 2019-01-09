<template>
  <div id="app">
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./views/Header";
import Footer from "./views/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="less">
body {
  background: url("./assets/images/subtle_dots.png");
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
}

a {
  color: #2980b9;
  text-decoration: none;
}
</style>
