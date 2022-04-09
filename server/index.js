const express = require("express")
const path = require('path')
const TrackerModel = require('./model')
const trackValidator = require('./trackValidator')

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8000")
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, application/json")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Methods", "GET, POST")
  next()
})
app.use(express.text())

app.post('/track', async (req, res) => {
  const trackers = JSON.parse(req.body)
  trackers.forEach((track) => {
    const errors = trackValidator(track)
    console.log(errors, track)
    if(Object.keys(errors).length > 0) {
      console.log(errors)
      res.status(400).end()
    }
  })

  res.status(200).end()
  const Model = await TrackerModel
  await Model.insertMany(trackers)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './tracker.js'))
})

app.listen(8001, () => {
  console.log("the server has been launched")
})