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