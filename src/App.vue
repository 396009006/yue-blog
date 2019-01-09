<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./views/Header";

export default {
  components: {
    Header
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
