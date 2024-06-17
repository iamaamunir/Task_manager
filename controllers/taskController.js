import Tasks from "../models/taskModels.js"

export const createTask = async function (req, res) {
  try {
    const body = req.body
    const createdTask = await Tasks.create(body)
    res.status(201).json({
      status: "success",
      data: { createdTask },
    })
  } catch (err) {
    next(err)
  }
}

export const getTasks = async function (req, res) {
  try {
    const allTask = await Tasks.find({})
    res.status(200).json({
      status: "success",
      data: { allTask },
    })
  } catch (err) {
    next(err)
  }
}

export const getSingleTask = async function (req, res) {
  try {
    const id = req.params.id
    const task = await Tasks.findOne({ _id: id })
    res.status(200).json({
      status: "success",
      data: { task },
    })
  } catch (err) {
    next(err)
  }
}

export const updateTask = async function (req, res, next) {
  try {
    const id = req.params.id
    const body = req.body
    const task = await Tasks.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    })
    res.status(204).json({
      status: "success",
      message: "Update Successfull",
    })
  } catch (err) {
    next(err)
  }
}

export const deleteTask = async function (req, res, next) {
  try {
    const id = req.params.id
    const deletedTask = await Tasks.findByIdAndDelete({ _id: id })
    res.status(204).json({
      status: "success",
      message: "Deleted Successfully",
    })
  } catch (err) {
    next(err)
  }
}
