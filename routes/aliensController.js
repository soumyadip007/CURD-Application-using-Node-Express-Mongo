const express = require('express')


const router=express.Router()

router.get('/', (req,res)=>{
    console.log('Get Request')
    res.send('Get Request')


    try{
     //   const aliens

    }catch(e){
        res.send('Error'+e)
    }

})


module.exports = router