const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    // devtool: 'source-map', // 生产环境中不要使用 会增加包大小
    mode: 'production',
    devServer: {
        contentBase: './dist',
        port: 9090
    },
    plugins: [
        // new UglifyJSPlugin()
        // new UglifyJSPlugin({
        //     sourceMap: true
        // }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});