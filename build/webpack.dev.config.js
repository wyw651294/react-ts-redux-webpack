const webpack = require('webpack');
const config = require('./webpack.common.config');
config.devServer = {
  hot: true,
  publicPath: '/dist/',
  historyApiFallback: {
    index: './public/index.html'
  }
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;