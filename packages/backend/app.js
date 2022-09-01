// Importing Express functionality
const express = require("express");

// Create an app object
const app = express();
const port = 3000;

// Defining a Hello World route
// to test the application
app.get('/', (req, res) => {
  res.status(200).json({
    word: 'greverb',
    defition: 'A really cool GRE quizzing application',
    example: 'Unfortunately, I\'ll need to take a raincheck on playing because greverb exists!'
  })
})

// Listening on a user-defined port for requests
app.listen(port, () => {
  console.log(`This backend is running on the port ${port}.`);
})

