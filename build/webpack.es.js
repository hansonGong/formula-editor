const path = require('path')
const { merge } = require('webpack-merge')
const CommonConf = require('./webpack.common')

module.exports = merge(CommonConf, {
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'formula-editor.es.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
})
