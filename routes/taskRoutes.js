import express from 'express'
import * as taskControllers from '../controllers/taskController.js'

const taskRouter = express.Router()

taskRouter.post('/create', taskControllers.createTask)

export default taskRouter
