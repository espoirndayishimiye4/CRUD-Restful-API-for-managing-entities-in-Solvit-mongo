const {Schema, default: mongoose} = require('mongoose')

const staffSchema = new Schema({
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
    position:{
        type: String,
        required: [true,'please provide position']
    }
})

const staff = mongoose.model('staff',staffSchema)

module.exports = staff