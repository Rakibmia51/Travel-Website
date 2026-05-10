const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Travel app listening on http://localhost:${port}`)
})
