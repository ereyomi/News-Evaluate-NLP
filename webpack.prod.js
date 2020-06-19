const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require( "html-webpack-plugin" )
//minify css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//for optimization
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})]
    },
    output: {
      libraryTarget: 'var',
      library: 'Client'
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
         new MiniCssExtractPlugin({
            filename: '[name].css'
            }),
    ]
}
