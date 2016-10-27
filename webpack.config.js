var path = require('path');
var webpack = require('webpack');

var TARGET = process.env.npm_lifecycle_event;
var entryFile = 'index.jsx';

var configuration = {
  entry: [
    './client/' + entryFile
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.(woff|woff2)$/,
        loader:"url?prefix=font/&limit=5000"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

if (TARGET === 'dev-server') {
  configuration.entry = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './client/' + entryFile
  ];
  configuration.devServer = {
    contentBase: './dist',
    hot: true
  }
  configuration.plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];
}

module.exports = configuration;
