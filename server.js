const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const mongoose = require('mongoose');
// import httpProxy from 'http-proxy'
const httpProxy = require('http-proxy');
const serverConfig = require('./server/config');

const app = express();
// const config = require('./webpack.config.js');
const config = require('./webpack.common.js')
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath
// }));

// const proxy = httpProxy.createProxyServer({
//     target: 'localhost:8080'
// })

// TODO: 添加httpproxy, 支持ws的http可编程库, 添加反向代理
// https://www.ruphi.cn/archives/328/
// https://www.npmjs.com/package/http-proxy#options
app.use('/username', (req, res) => {
    // console.log(req, res, 'server', proxy)
    // proxy.web(req, res)
    // res.end('1')
})

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});

mongoose.connect(serverConfig.serverURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
    if (err) throw err;
    console.log('create success')
    // app.listen()
})