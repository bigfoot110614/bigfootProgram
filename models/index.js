// import userSchema from '../schemas/user'
// import mongoose from 'mongoose'


const userSchema = require('../schemas/user.js')
const mongoose = require('mongoose')

module.exports = mongoose.model("User", userSchema)