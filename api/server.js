// build your server here and require it from index.js


const express = require('express');
const server = express();


const proRo = require('./project/router')
const resRo = require('./resource/router')
const tasRo = require('./task/router')

server.use('/api/projects',proRo );
server.use('/api/resources', resRo );
server.use('/api/tasks', tasRo);


server.use(express.json());

server.use((err, req, res, next)=>{
    res.status(500).json({message: err.message})
})

module.exports = server