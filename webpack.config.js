const path = require('path')

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}