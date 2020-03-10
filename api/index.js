// The require hook will bind itself to node's require and automatically compile files on the fly.
require('babel-register')
const api = require('./user.js')
module.exports = api