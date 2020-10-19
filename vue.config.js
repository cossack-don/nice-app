// vue.config.js
module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
    ? '/nice-app/'
    : '/',
  assetsDir: '',
  filenameHashing: true,
  productionSourceMap: false
}
