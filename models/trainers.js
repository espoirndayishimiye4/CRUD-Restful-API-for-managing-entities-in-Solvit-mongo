const {Schema, default: mongoose} = require('mongoose')

const trainerSchema = new Schema({
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
    },
    salary:{
        type: String,
        required: [true,'please provide course']
    }
})

const trainer = mongoose.model('trainer',trainerSchema)

module.exports = trainer