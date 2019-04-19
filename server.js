const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 5000

//middlewares
app.use(express.json()) //gives access to req.body
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

//reference to our shelter routes
app.use("/shelterList", require('./routes/shelterRoutes.js'))

//database connection
mongoose.connect(process.env.MONGO_URI || "mongodb: //localhost:27017/shelter-db", {useNewUrlParser: true}, () => {
    console.log('connected to the database')
})

//global error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.send({errMsg: err.message})
})

app.get("*", (req, res, next) => {
    res.sendFile(path.join(_dirname, "client", "build", "index.html"))
} )

//server setup 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

//we have more installations for backend because putting on user auth