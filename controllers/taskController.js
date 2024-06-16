import Tasks from '../models/taskModels.js'

export const createTask = async function (req, res) {
  try {
    const body = req.body
    const createdTask = await Tasks.create(body)
    res.status(201).json({
      status: "success",
      data: { createdTask },
    })
  }
  catch (error) {
    console.log(error)
  }
}