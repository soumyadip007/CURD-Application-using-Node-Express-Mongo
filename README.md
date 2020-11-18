# CURD-Application-using-Node-Express-Mongo
In computer programming, create, read, update, and delete are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete.

### Config


```
const express = require('express')
const mongoose = require('mongoose')

const app=express()

const url='mongodb://localhost:27017/mi'

mongoose.connect(url, {useNewUrlParser:true})
const con=mongoose.connection

con.on('open', function(){
    console.log('MongoDb Connected')
})
app.use(express.json())

//Forwarding Endpoints
const allienRouter= require('./routes/aliensController')
app.use('/aliens', allienRouter)

app.listen(9000, () =>{
    console.log("Server Started")
})
```
