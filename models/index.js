import userSchema from '../schemas/user'
import mongoose from 'mongoose'

module.exports = new mongoose.model("User", userSchema)