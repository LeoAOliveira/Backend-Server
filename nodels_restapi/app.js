// load app server usin express
const express = require('express')
const app = express()



const morgan = require('morgan')
app.use(morgan('short'))

app.get("/", (req, res) => {
  console.log("Responding to root route")
  res.send("Hello local server")
})

app.get("/users", (req, res) => {

  var argentina = {name: "Argentina"}
  var brazil = {name: "Brazil"}

  res.json([argentina, brazil])
})

// localhost:3003
app.listen(3003, () => {
  console.log("Server is up and listening on 3003...")
})

