const {Schema, default: mongoose} = require('mongoose')

const traineeSchema = new Schema({
    id:{
        type: Number,
        required: [true,'please provide first name']
    },
    firstName:{
        type: String,
        required: [true,'please provide first name']
    },
    lastName:{
        type: String,
        required: [true,'please provide last name']
    },
    course:{
        type: String,
        required: [true,'please provide course']
    }
})

const trainee = mongoose.model('trainee',traineeSchema)

module.exports = trainee