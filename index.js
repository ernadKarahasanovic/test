const express = require('express')
const app = express()
const port = 8080

app.get('/test', (req, res) => {
  res.send('Welp')
})

app.listen(port, () => {
  console.log(`Port active at  ${port}`)
})
