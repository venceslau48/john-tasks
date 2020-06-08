const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

//CONNECT TO DATABASE
mongoose.connect(process.env.DB_URL)

//CREATE SCHEMA (CRIA UMA TABELA CHAMADA TASKS)
const tasksSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    texto: String,
    estado: String
})

//MODEL (ASSOCIA O MODEL "TASK" À TABELA "TASKS")
const Task = mongoose.model("Task", tasksSchema)

//GET ALL TASKS
router.get("/", function (req, res, next) {
    Task.find({}, function (err, data) {
        if (err) throw err
        res.json(data)
    })
})

//GET SINGLE TASK
router.get("/:id", function (req, res, next) {
    Task.findOne({ id: req.params.id }).then(data => res.json(data))
})

//ADD TASK
router.post("/", function (req, res, next) {
    Task(req.body).save(function (err, data) {
        if (err) throw err
        res.json(data)
    })
})

//UPDATE TASK
router.put("/:id", (req, res) => {
    Task.findOneAndUpdate({ id: req.params.id }, { titulo: req.body.titulo, texto: req.body.texto }, function (
        err,
        data
    ) {
        res.json(data)
    })
})

//DELETE TASK
router.delete("/:id", (req, res) => {
    Task.findOneAndRemove({ id: req.params.id }, req.body, function (err, data) {
        if (err) throw err
        res.json(data)
    })
})

module.exports = router
