// build your `/api/projects` router here

const express = require('express')
const Projects = require('./model')
const projectRouter = express.Router()


projectRouter.get('/', async (req, res, next)=>{
    try{ 
        const allProjects = await Projects.get();
        res.status(200).json(allProjects);
    }catch(error){
        next(error)
    }
})

projectRouter.get('/', async(req, res, next)=> {
    try{
        const projects = await Projects.get()
        const booleanProjects = projects.map(project =>{
            if(project.project_completed === 0 || !project.project_completed){
                return{...project, project_completed: false}
            }else if (project.project_completed === 1){
                return{...project, project_completed: true}
            }
        })
        res.status(200).json(booleanProjects)
    }catch(error){
        next(error)
    }
})

projectRouter.post('/', async (req, res, next) => {
    try {
        const newProject = await Projects.insert(req.body)
        if(newProject[0].project_completed === 0){
            res.status(201).json({...newProject[0], project_completed: false})
        }else if (newProject[0].project_completed === 1){
            res.status(201).json({...newProject[0], project_completed: true})
        }
    }catch(error){next(error)}
})





module.exports = projectRouter