const express = require('express')
const router = express.Router()

router.get('/task_lanes', (req, res, next) => {
    var todos = []
    for (let i = 1; i <= 20; i++) {
      todos = todos.concat([
        { id: i, name: 'test' + i,  description: 'test を test が test で test に test する' }
      ])
    }

    var inProgresses = []
    for (let i = 21; i <= 40; i++) {
      inProgresses = inProgresses.concat([
        { id: i, name: 'test' + i,  description: 'test を test が test で test に test する' }
      ])
    }

    var dones = []
    for (let i = 41; i <= 60; i++) {
      dones = dones.concat([
        { id: i, name: 'test' + i,  description: 'test を test が test で test に test する' }
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

router.put('/task/:id.:status', (req, res) => {
  console.dir(req.params)
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send()
})

module.exports = router
