module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: []
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/variables.scss";`
      }
    }
  }
};
