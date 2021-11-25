module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_functions.scss";
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixin.scss";
          @import "@/scss/_global.scss";
        `
      },
    }
  }
}