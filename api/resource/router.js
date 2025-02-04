// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model');
const resourceRouter = express.Router();


resourceRouter.get('/', async (req, res, next)=>{
    try{
        const resources = await Resources.get()
        res.status(200).json(resources)
    }catch(error){next(error)}
})

resourceRouter.post('/', async (req, res, next)=> {
    try{
        await Resources.insert(req.body)
        res.status(201).json(req.body)
    }catch(error){next(error)}
})






module.exports = resourceRouter