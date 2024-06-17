import express from "express"
import * as taskControllers from "../controllers/taskController.js"

const taskRouter = express.Router()

taskRouter.post("/create", taskControllers.createTask)
taskRouter.get("/tasks", taskControllers.getTasks)
taskRouter
  .get("/task/:id", taskControllers.getSingleTask)
  .patch("/task/:id", taskControllers.updateTask)
  .delete("/task/:id", taskControllers.deleteTask)

export default taskRouter
