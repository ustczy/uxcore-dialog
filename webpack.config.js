/**
 * @author: vincent
 * @date: 15/5/19
 */
var webpack = require('webpack');

module.exports = {
    entry: [
        './example/index.jsx'
    ],
    output: {
        path: './build',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    debug: true,
    devtool: 'eval',
    devServer: {
        info: true,
        quiet: false,

        stats: {
            colors: true,
            progress: true
        }
    }
};