module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("react-native", "react-native-web");
    config.resolve.extensions.add(".web.js");
    config.resolve.extensions.add(".js");
  },
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
}
