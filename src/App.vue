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

@keyframes fade-in {
  from {
    opacity: 0;
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}
#app {
  animation: fade-in; /*动画名称*/
  animation-duration: 0.5s; /*动画持续时间*/
  -webkit-animation: fade-in 0.5s; /*针对webkit内核*/
}
</style>
