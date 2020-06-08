const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

//CONNECT TO DATABASE
mongoose.connect(process.env.DB_URL)

//CREATE SCHEMA (CRIA UMA TABELA CHAMADA TASKS)
const tasksCompletasSchema = new mongoose.Schema({
    id: String,
    titulo: String,
    texto: String,
    estado: String
})

//MODEL (ASSOCIA O MODEL "TASK" À TABELA "TASKS")
const TaskCompleta = mongoose.model("TaskCompleta", tasksCompletasSchema)

//GET ALL TASKS COMPLETAS
router.get("/", function (req, res, next) {
    TaskCompleta.find({}, function (err, data) {
        if (err) throw err
        res.json(data)
    })
})

//GET SINGLE TASK COMPLETA
router.get("/:id", function (req, res, next) {
    TaskCompleta.findOne({ id: req.params.id }).then(data => res.json(data))
})

//ADD TASK
router.post("/", function (req, res, next) {
    TaskCompleta(req.body).save(function (err, data) {
        if (err) throw err
        res.json(data)
    })
})

//UPDATE TASK
router.put("/:id", (req, res) => {
    TaskCompleta.findOneAndUpdate({ id: req.params.id }, { titulo: req.body.titulo, texto: req.body.texto }, function (
        err,
        data
    ) {
        res.json(data)
    })
})

//DELETE TASK
router.delete("/:id", (req, res) => {
    TaskCompleta.findOneAndRemove({ id: req.params.id }, req.body, function (err, data) {
        if (err) throw err
        res.json(data)
    })
})

module.exports = router
