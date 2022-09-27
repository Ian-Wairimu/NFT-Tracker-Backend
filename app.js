const express = require("express")
require("dotenv").config({path: ".env"})
const bodyParser = require("body-parser")
const morgan = require("morgan")
require("./models/db")
const app = express()
const UserRouter = require("./routes/userRoute/userRoute")

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(morgan("dev"))

app.use("/me", UserRouter)
app.use("/api/auth", UserRouter)

module.exports = app;