
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('User', userSchema)
