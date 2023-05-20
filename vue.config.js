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
          compilerOptions: {
            ...(options.compilerOptions || {}),
            isCustomElement: (tag) => {
              return tag.startsWith("ion-");
            }
          }
        };
      });
  }
};
