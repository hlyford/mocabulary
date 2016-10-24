var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'server/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  entry: APP_DIR + '/App.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
      loaders : [
        {
          test : /\.js?/,
          include : APP_DIR,
          loader : 'babel'
        }
      ]
    }
};

module.exports = config;