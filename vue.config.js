module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '#': require('path').resolve(__dirname, 'frontend/src/components'),
        '@': require('path').resolve(__dirname, 'frontend/src')
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        paths: ['frontend/src/assets', 'node_modules/']
      }
    }
  }
}
