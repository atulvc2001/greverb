// Importing Express functionality
const express = require("express");

// Create an app object
const app = express();
const port = 3000;

// Defining a Hello World route
// to test the application
app.get('/', (req, res) => {
  res.send('Let the GRE Verbal Begin!')
})

// Listening on a user-defined port for requests
app.listen(port, () => {
  console.log(`This backend is running on the port ${port}.`);
})

