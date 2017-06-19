let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
    library: 'invoice',
    libraryTarget: 'umd',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'polyfill-promise'
    })
  ],
  resolve: {
    modules: [
      "/var/tmp/base/node_modules"
    ],
    extensions: ['.json', '.jsx', '.js']
  },

  resolveLoader: {
    modules: ['/var/tmp/base/node_modules'],
    moduleExtensions: ['-loader', '*'],
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include: [
          path.join(__dirname, 'src/client')
        ],
        query: {
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['transform-object-assign', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};
