import express from "express"
import { addNewTask, deleteTask, getAllTasks } from "../controllers/tasksController.js"


const taskesRoutes = express.Router()

taskesRoutes.get("/taskes", getAllTasks)
taskesRoutes.get("/taske/:id", )
taskesRoutes.post("/taskes", addNewTask)
taskesRoutes.post("/search", )
taskesRoutes.patch("/taskes/:id", )
taskesRoutes.delete("/taskes/:id", deleteTask)

export default taskesRoutes