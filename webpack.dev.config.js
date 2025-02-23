const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },

    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader:'babel-loader',
            options:{
                rootMode: "upward",
            }
        }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname,'./release'),
        static: {
            directory: path.join(__dirname, 'release'),
          },
        compress: true,
        open: true,
        port: 9000
    }
}