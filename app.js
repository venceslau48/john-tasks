const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require("path")

const tasksRoutes = require("./routes/tasks")
const tasksCompletasRoutes = require("./routes/tasksCompletas")

const app = express()

//STATIC FILES (ASSETS)
app.use(express.static(path.join(__dirname, "client/build")))

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//CORS
app.use(cors())

//ROUTES
app.use("/tasks", tasksRoutes)
app.use("/tasksCompletas", tasksCompletasRoutes)

//EXPRESS USING REACT APP BUILD (DEFINE ALWAYS AFTER ENDPOINTS)
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

//LISTEN APP ON PORT...
var server = app.listen(process.env.PORT || 3001, function () {
    var port = server.address().port
    console.log("Server running on port: " + port)
})
