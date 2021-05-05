const express = require('express')
const path = require('path')
const fs = require('fs')
const dataJson = require("../guestNotes.json")

const router = express.Router()

const data = dataJson

router.get('/', (req, res) => {
  res.render('home', {notes: data})
})

router.get('/showNotes', (req, res) => {
  res.render('showNotes', {notes: data})
})

router.get('/addNote', (req, res) => {
  res.render('addNote')
})


router.post('/addNote', (req, res) => {
  data.push({
    id: Math.random(),
    content: req.body.content,
  })

  fs.writeFile(path.join(__dirname, '..', 'guestNotes.json'), JSON.stringify(data, null, 2), () => {
    res.status(302).redirect('/')
  })
})

module.exports = router