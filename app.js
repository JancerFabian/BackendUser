const express = require('express')
const app = express()

//packages
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')
app.use(bodyParser.json())

//import route
const userRoutes = require('./routes/users')

//middleware
app.use('/api/v1/user', userRoutes)

//deafult route or others
app.get('/', (req, res) => {
    res.send("We OK")
})

//connect to mongo db
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected")
    console.log(process.env.DB_CONNECTION)
})

app.listen(process.env.PORT);