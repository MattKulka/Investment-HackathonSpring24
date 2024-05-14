var path = require("path")

require("dotenv").config({ path: path.join(__dirname, ".env") })

const express = require("express")
const cors = require("cors")

const errorHandler = require("./errors/errorHandler")
const notFound = require("./errors/notFound")

/* 
routers will be defined here, it'll look something like this:
const dataRouter = require("./data/data.router")
*/

const app = express()

app.use(cors())
app.use(express.json())

// vv example of mounting the middleware that doesn't exist yet
// app.use("/data", dataRouter)
app.use(notFound)
app.use(errorHandler)

module.exports = app
