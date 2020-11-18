const express = require('express')
const mongoose = require('mongoose')

const app=express()

const url='mongodb://localhost:27017/mi'

mongoose.connect(url, {useNewUrlParser:true})
const con=mongoose.connection

con.on('open', function(){
    console.log('MongoDb Connected')
})

//Forwarding Endpoints
const allienRouter= require('./routes/aliensController')
app.use('/aliens', allienRouter)


app.listen(9000, () =>{
    console.log("Server Started")
})