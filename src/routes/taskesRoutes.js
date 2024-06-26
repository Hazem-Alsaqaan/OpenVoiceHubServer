import express from "express"
import { addNewTask, deleteTask, getAllTasks, searchTasks, updateTask } from "../controllers/tasksController.js"


const taskesRoutes = express.Router()

taskesRoutes.get("/taskes", getAllTasks)
taskesRoutes.get("/taske/:id", )
taskesRoutes.post("/taskes", addNewTask)
taskesRoutes.post("/search", searchTasks)
taskesRoutes.patch("/taskes/:id", updateTask)
taskesRoutes.delete("/taskes/:id", deleteTask)

export default taskesRoutes