const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map', // 生产环境中不要使用 会增加包大小
    devServer: {
        contentBase: './dist'
    }
});