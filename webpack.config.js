const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// css minifier
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

const mode = process.env.NODE_ENV;
const ASSET_PATH = mode == 'development' ? '/' : './';


module.exports = {
    mode: mode,
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        publicPath: ASSET_PATH,
    },
    module: {
        rules: [
            // scss loader
            { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
            // css loader
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
            // html loader 
            {
                test: /\.(html)$/,
                include : path.join(__dirname,'src/pages'),
                use: {
                    loader: 'html-loader',
                    options: {
                        interpolate: true,
                        attrs: ['img:src']
                    }
                }
            },
            // image loader
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/, use: [{
                    loader: 'file-loader', options: {
                        name: mode == 'development' ? './[name].[ext]' : './[hash].[ext]', outputPath: 'images/'
                    }
                }]
            },
            // font loader
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, use: [{
                    loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/', }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    plugins: [
        // clean dist folder
        new CleanWebpackPlugin(['dist']),
        // extract css in diffrent css file
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        // jquery and popper js
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
        // create html page
        new HtmlWebpackPlugin({
            title: 'Home',
            filename: 'index.html',
            template: 'src/pages/index.html',
            // minimize : true
        }),
    ]
}