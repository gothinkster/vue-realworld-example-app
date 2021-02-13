module.exports = {
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
      analyzerPort: "auto"
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        // modify the options...
        return {
          ...options,
          isCustomElement: (tag) => {
            return tag.startsWith("ion-");
          }
        };
      });
  }
};
