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