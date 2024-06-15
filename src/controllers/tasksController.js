import taskModel from "../models/taskeModel.js"
import APIsError from "../utils/APIsError.js"



const getAllTasks = async(req, res, next)=>{
    try{
        const allTaskes = await taskModel.find()
        res.status(200).json(allTaskes)
    }catch(err){
        console.log(`controller error get task ${err}`)
        next(new APIsError(`can't get all tasks ${err}`, 500))
    }
}

const addNewTask = async(req, res, next)=>{
    const { title, description, completed } = req.body
    try{
        const newTask = await taskModel.create({ title, description, completed })
        res.status(201).json(newTask)
    }catch(err){
        console.log(`controller error post task ${err}`)
        next(new APIsError(`can't add new tasks ${err}`, 500))
    }
}

const deleteTask = async(req, res, next)=>{
    const {id} = req.params
    try{
        const deletedTask = await taskModel.findByIdAndDelete(id)
        res.status(200).json(deletedTask)
    }catch(err){
        console.log(`controller error delete task ${err}`)
        next(new APIsError(`can't delete the task ${err}`, 500))
    }
}
const updateTask = async(req, res, next)=>{
    const {id} = req.params
    const { title, description, completed } = req.body
    try{
        const updateTask = await taskModel.findByIdAndUpdate(id, { title, description, completed }, {new: true})
        res.status(200).json(updateTask)
    }catch(err){
        console.log(`controller error update task ${err}`)
        next(new APIsError(`can't update the task ${err}`, 500))
    }
}

export {
    getAllTasks,
    addNewTask,
    deleteTask,
    updateTask
}