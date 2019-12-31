const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('./config')
const connection = mongoose.createConnection(
    config.serverURL,
    {},
    (err, db) => {
        if (err) throw err;
        console.log('create') 
    }
)