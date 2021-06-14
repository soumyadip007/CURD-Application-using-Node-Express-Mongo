# CURD-Application-using-Node-Express-Mongo
In computer programming, create, read, update, and delete are the four basic functions of persistent storage. Alternate words are sometimes used when defining the four basic functions of CRUD, such as retrieve instead of read, modify instead of update, or destroy instead of delete.

<img src="https://raw.githubusercontent.com/soumyadip007/CURD-Application-using-Node-Express-Mongo/master/flow1.jpeg" >


### Config File


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

### Schema File

```
const express = require('express')
const mongoose = require('mongoose')


const alienSchema= new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    tech:{
        type:String,
        required: true
    },
    sub:{
        type:String,
        required: true,
        default:false
    }
    
})

module.exports = mongoose.model('AlienMyAliean',alienSchema)

```

### Router File

```
const express = require('express')
const router=express.Router()
const AlienData=require('../models/alien')

router.get('/', async(req,res)=>{
    console.log('Get Request')
    try{
       const aliens= await AlienData.find()
       res.json(aliens)
       
    }catch(e){
        res.send('Error'+e)
    }

})


router.post('/', async function (req, res) {
        console.log('Post Request')
        const alien = new AlienData({
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        })
        console.log(alien)
        try {

            const a1 = await alien.save()
            res.json(a1)

        } catch (e) {
            res.send('Error' + e)
        }

})




router.post('/', async (req, res) => {
        console.log('Post Request')
        const alien = new AlienData({
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
        })
        console.log(alien)
        try {

            const a1 = await alien.save()
            res.json(a1)

        } catch (e) {
            res.send('Error' + e)
        }

})



router.get('/:id', async (req, res) => {
   
    try {

        const alien = await AlienData.findById(req.params.id)
        
        res.json(alien)

    } catch (e) {
        res.send('Error' + e)
    }

})

module.exports = router
```
