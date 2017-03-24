
var mongoose = require('mongoose')

var optionSchema = new mongoose.Schema({
  name: { type: String, min: 3, required: true, unique: true },
  votes: { type: Number, default: 0 }
})

var pollSchema = new mongoose.Schema({
  title: { type: String, min: 3, required: true },
  _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  option1: optionSchema,
  option2: optionSchema,
  option3: optionSchema,
  option4: optionSchema,
}, { timestamps: true })

// export the schema as a model
module.exports = mongoose.model('Poll', pollSchema)
