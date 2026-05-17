const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser  = require('cookie-parser')
const tourRoute = require('./routes/tours')

const app = express()
const port = process.env.PORT || 5000


// database connection
const connect = async ()=>{
    try {
      await mongoose.connect(process.env.MONGO_URI)

      console.log('MongoDB database connected')
    } catch (error) {
      console.log('MongoDB database connection failed')
    }
}


//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())

//Routes
app.use('/tours', tourRoute)

// for testing
app.get('/', (req, res) => {
  res.send('Travel server is runing!')
})

app.listen(port, () => {
  connect()
  console.log(`Travel app listening on http://localhost:${port}`)
})
