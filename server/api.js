const express = require('express')
const router = express.Router()

router.get('/task_lanes', (req, res, next) => {
    var todos = []
    for (let i = 1; i <= 20; i++) {
      todos = todos.concat([
        { name: 'test' + i,  description: 'test を test が test で test に test する' }
      ])
    }

    var inProgresses = []
    for (let i = 1; i <= 20; i++) {
      inProgresses = inProgresses.concat([
        { name: 'test' + (i + 20),  description: 'test を test が test で test に test する' }
      ])
    }

    var dones = []
    for (let i = 1; i <= 20; i++) {
      dones = dones.concat([
        { name: 'test' + (i + 40),  description: 'test を test が test で test に test する' }
      ])
    }

    let dat = [
        { title: 'TODO',        tasks: todos,        col: 4 },
        { title: 'In Progress', tasks: inProgresses, col: 4 },
        { title: 'Done',        tasks: dones,        col: 4 },
    ]

    let ret = JSON.stringify(dat)
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(ret)
})
module.exports = router
