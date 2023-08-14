const express = require('express')

const router = express.Router()

const Dishes = require('../models/dishes')

router.get('/dishes', async(req,res)=>{
    try {
        const dishes = await Dishes.find()
        res.status(200).send({data:dishes})
    } catch (error) {
        res.status(400).send({error:err})
    }
})

module.exports =router;