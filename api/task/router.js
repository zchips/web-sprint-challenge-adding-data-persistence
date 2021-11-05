// build your `/api/tasks` router here
const express = require('express');
const Tasks = require('./model');
const tasRo = express.Router();


tasRo.get('/', async (req, res, next)=>{
    try{
        const tasks = await Tasks.get()
        const booleanTasks = tasks.map(task=> {
            if(task.task_completed === 0 || !task.task_completed){
                return{...task, task_completed: false}
            }else if (task.task_completed === 1){
                return{...task, task_completed: true}
            }
        })
        res.status(200).json(booleanTasks)
    } catch(error){
        next(error)
    }
})


tasRo.post('/', async (req, res, next) => {
    try{
        const newTask = await Tasks.insert(req.body)
        if(newTask[0].task_completed === 0){
            res.status(201).json({...newTask[0], task_completed: false})
        }else if (newTask[0].task_completed === 1){
            res.status(201).json({...newTask[0], task_completed: true})
        }
    }catch(error){next(error)}
})






module.exports = tasRo