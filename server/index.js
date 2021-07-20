const express = require('express');
const path = require('path')
const app = express();

// this lets us set our port in our node environment, but defaults to 3000 if not set.
const PORT = process.env.PORT || 3000;

// setup basic middleware
  // static file serving
app.use(express.static(path.resolve(__dirname, '../client/dist')))
  // request parsing
app.use(express.urlencoded()) // do we need both of these parsers?
app.use(express.json())

// setup simple server test routes
app.get('/test', (req, res)=>{
  console.log("GET recieved")
  res.write(200).send("You did a GET to the /test endpoint! Look at you go!")
})

app.post('/test', (req, res)=>{
  console.log("POST recieved")
  res.write(200).send("POST to endpoint /test! Aren't you just the POSTer child of excellence?!")
})

app.listen(PORT, (err)=>{
  console.log(
    err ? `Error starting server: ${err}` : `Server up on port ${PORT}`
  )
})