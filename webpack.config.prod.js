import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    main: path.resolve(__dirname, 'src/index'),
    vendor: path.resolve(__dirname, 'src/vendor')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
      //Eliminate duplicate packages when generating bundle
      new webpack.optimize.DedupePlugin(),

      //Minification
      new webpack.optimize.UglifyJsPlugin(),

      //adding index.html to the prod build
      new HtmlWebpackPlugin({
          template: 'src/index.html',
          inject: true,
          minify : {
              removeComments: true,
              collapseWhitespace: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true
          }
      }),

      //create separate bundle
      new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
      })

  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
