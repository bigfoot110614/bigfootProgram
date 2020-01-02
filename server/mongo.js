// const mongoose = require('mongoose') 
import mongoose from 'mongoose'
// mongodb 和 mongoose区别
// 在Node.js的方面，mongodb是与MongoDB实例交互和mongoose是MongoDB的一个对象建模工具的本地驱动程序。
// mongodb 增删盖查数据库很自由，插入数据时传入 json 数据就可以了，而没有对 json 格式进行约束。无法保证存在数据库里的数据都是同样的格式。
// mongoose 为 mongodb 提供了一种直接的，基于 scheme 结构去定义你的数据模型。它内置数据验证，查询构建，业务逻辑钩子等，开箱即用。
// 总的来说，建议使用 mongoose 对数据进行约束，相当于用 ts 改善 js 一样，让我们可以清晰地知道最后的数据类型。
// const Schema = mongoose.Schema
const config = require('./config')
const connection = mongoose.createConnection(
    config.serverURL,
    {},
    (err, db) => {
        if (err) throw err;
        console.log('create') 
    }
)