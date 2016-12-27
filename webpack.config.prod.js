import path from 'path';
//path needed for __dirname, which is from node

import webpack from 'webpack';

//import HtmlWebpackPlugin from 'html-webpack-plugin';

// devtool:
// reommended source-map is slower than inline-source-map to build but
// provides highest quality source mapping experience
export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    // Minify JS
    new webpack.optimize.UglifyJsPlugin()

    // Create HTML file that includes reference to bundled JS.
    //new HtmlWebpackPlugin({
    //  template: 'src/index.html',
    //  inject: true
  //  })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
