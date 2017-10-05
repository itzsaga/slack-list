module.exports = {
    entry: './src/js/app.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.sass$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        }]
    }
  }