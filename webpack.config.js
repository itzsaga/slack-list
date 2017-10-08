const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '.'
    },
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }],
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
                // loader: "url?limit=10000"
                use: "url-loader"
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    }
}

if (process.env.NODE_ENV !== 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
         new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'new.html',
          template: './src/new.html'
        })
    ])
}
