// vue.config.js
module.exports = {
  // options...
  devServer: {
    port: 80,
    //跨域代理配置
    proxy: {
      "^/api": {
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "" // rewrite path
        }
      }
    }
  }
};
