// import Express from 'express' 报错 unexpected identifier
const Express = require('express')
const User = require('../models/index.js')


const router = Express.Router()

router.get('/username', (req, res) => {
    User.insertMany([{
        name: 'anan' 
    }], (err, res) => {
        if (err) throw err
        console.log('insert')
    })
    // User.findOne({
    //     name,
    // })
    console.log('username' )
    res.end('33')
})

module.exports = router