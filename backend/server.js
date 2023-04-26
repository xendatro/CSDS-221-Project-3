require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const userRoutes = require('./routes/userRoutes')
const sendRoutes = require('./routes/sendRoutes')
const receiveRoutes = require('./routes/receiveRoutes')

const path = require('path')

const app = express()
app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/send', sendRoutes)
app.use('/api/receive', receiveRoutes)

__dirname = path.resolve()
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 