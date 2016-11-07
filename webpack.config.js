var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: 't-shirt'
    },

    devtool: 'source-map',

    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        ['es2015']
                    ]
                },
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    ],
};
