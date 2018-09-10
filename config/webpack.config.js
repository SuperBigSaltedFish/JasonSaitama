const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const config = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: 'dist/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'less-loader',
            options: {
              relativeUrls: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(process.cwd(), 'public'),
    compress: true,
    port: 9727,
    host: '0.0.0.0',
    open: true,
  },
}


module.exports = config
