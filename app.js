import express from "express"
import taskRouter from "./routes/taskRoutes.js";


const app = express()
app.use(express.json());
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))


app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to Task manager",
  })
})

app.use('/api', taskRouter)


export default app
