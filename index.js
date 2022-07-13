require('dotenv').config();
const express = require('express')
const mongoose =require('mongoose')

const staffsRoutes = require('./routes/staffs')
const time = require('./middleware/time')
const connectDB = require('./config/dbConn')
const app = express()
app.use(express.json())

const PORT = 3000

//connect DB
connectDB()

//middleware to console time when any http method is requested
app.use(time)

//http://localhost:3000/staffs
app.use('/staffs', require('./routes/staffs'))

//http://localhost:3000/trainees
app.use('/trainees',require('./routes/trainees'))

//http://localhost:3000/trainers
app.use('/trainers',require('./routes/trainers'))


mongoose.connection.once('open', ()=>{
    console.log('DB connected')
    app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})
})
