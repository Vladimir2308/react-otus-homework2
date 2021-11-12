const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx', // точка входа, о которой говорилось ранее.
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, // сопоставляет файлы .js, .ts, и .tsx
        loader: 'babel-loader', // использует для указанных типов файлов загрузчик babel-loader (ts-loader не требуется).
        exclude: /node_modules/,
      options: { presets: ["@babel/env"]}
      },
      {
        test: /\.css$/, // сопоставляет только файлы .css (т.е. не .scss и др.)
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js','jsx'],
  },
  output: {
    filename: 'bundle.js', // выходной бандл
  },
  devServer: {
    static: path.join(__dirname, 'public/'),
    port: 3000,
    // publicPath: 'http://localhost:3000/dist/',
    hot: "only",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()], // used for hot reloading when developing
  devtool: 'eval-source-map', // создает высококачественные карты кода
}