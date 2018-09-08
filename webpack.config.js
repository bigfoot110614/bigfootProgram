const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        // print: './src/print.js',
    },
    devtool: 'inline-source-map',// 可以定位到报错信息的具体文件和行号
    devServer: {
       contentBase: './dist',
       host: true
    }, // 这个配置告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
           title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(), // 添加了 NamedModulesPlugin，以便更容易查看要修补(patch)的依赖
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    mode: "production",// 从 webpack 4 开始，也可以通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"
    //也可以在命令行接口中使用 --optimize-minimize 标记，来使用 UglifyJSPlugin
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};