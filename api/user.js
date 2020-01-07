import Express from 'express'


const Router = Express.Router()

Router.get('/username', (req, res) => {
    console.log('username', req, res)
    res.end(200)
})

module.exports = Router