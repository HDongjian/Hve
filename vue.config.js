const nodeExternals = require('webpack-node-externals')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    port: 4002,
    open: true
  },
  pages: {
    index: {
      entry: isProd ? 'src/index.js' : 'example/main.js',
      template: 'src/example-admin/index.html'
    }
  },
  configureWebpack: {
    externals: isProd ? [{
      'es6-promise': 'es6-promise',
      'vue-router': 'vue-router',
      'vuex': 'vuex'
    }, nodeExternals()] : undefined
  }
}
