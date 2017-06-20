const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  root: path.join(__dirname, '..'),
  src: path.join(__dirname, '..', 'src'),
  dist: path.join(__dirname, '..', 'dist'),
};

module.exports = {
  context: paths.root,
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'webpack/hot/dev-server',
    path.join(paths.src, 'app.js'),
  ],
  output: {
    path: paths.dist,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.json', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(jpg|png|ttf|eot|svg)(\?v=.+)?$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [autoprefixer]
      }
    }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
