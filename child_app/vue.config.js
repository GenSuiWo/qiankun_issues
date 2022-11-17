const packageName = require('./package.json').name
module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8236,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${packageName}`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`
    }
  }
};
