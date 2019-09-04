const path = require('path');

module.exports = {
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
