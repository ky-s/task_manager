const express = require('express')
const router = express.Router()

router.get('/task_lanes', (req, res, next) => {
    var todos        = require('./data/tasks/todo.json')
    var inProgresses = require('./data/tasks/inprogress.json')
    var dones        = require('./data/tasks/done.json')

    let dat = [
        { title: 'TODO',        tasks: todos,        col: 4 },
        { title: 'In Progress', tasks: inProgresses, col: 4 },
        { title: 'Done',        tasks: dones,        col: 4 },
    ]

    let ret = JSON.stringify(dat)
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(ret)
})

router.put('/task/:id/:from-:to', (req, res) => {
    console.dir(req.params)
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send()
})

module.exports = router
