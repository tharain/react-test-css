const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const THIS_DIR = path.join(__dirname, './');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        include: THIS_DIR,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
      {
        test: /\.gif$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
    ],
  },
  devServer: {
    hot: true,
    contentBase: THIS_DIR.concat('src/'),
  },
  resolve: {
    alias: {
      src: THIS_DIR.concat('src/'),
    },
    extensions: ['.ts', '.tsx', '.wasm', '.mjs', '.jsx', '.js', '.json', '.png'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: THIS_DIR.concat('index.html'),
      favicon: THIS_DIR.concat('logo.png'),
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  watch: true,
  entry: {
    main: THIS_DIR.concat('src/index.js'),
  },
  output: {
    path: THIS_DIR.concat('dist/'),
    publicPath: '/',
    filename: 'static/js/[name]_[hash].js',
    chunkFilename: 'static/js/[name]_[chunkhash].js',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
};
