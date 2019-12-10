const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development", 
    devtool: 'inline-source-map', // 生产环境中不要使用 会增加包大小 开发环境鼓励使用源码映射 方便调试
    devServer: {
        contentBase: './dist',
        // port: '9090'
    }
});