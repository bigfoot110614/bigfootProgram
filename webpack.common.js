const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
     //    new webpack.optimize.CommonsChunkPlugin({ // index.bundle.js 中移除了重复的依赖模块
     //        name: 'common' // 指定公共 bundle 的名称。
     //        // CommonsChunkPlugin 插件将 lodash 分离到单独的 chunk，并且将其从 main bundle 中移除
     // }) // 这个没有用对
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production')
        //     }
        // })
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader','css-loader', 'less-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
