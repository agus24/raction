const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },

  css: {
    modules: true,
    sourceMap: true
  }
}
