import http from "http"

import app from "./app.js"

import CONFIG from "./config/config.js"

import DbConnection from "./db/dbConfig.js"

const server = http.createServer(app)

server.listen(CONFIG.PORT, () => {
  console.log(`Server is running at PORT:${CONFIG.PORT}`)
})


DbConnection()
