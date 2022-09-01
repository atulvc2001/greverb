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

// Defining a route to random a 
// card
app.get('/card', (req, res) => {
  // Reading the JSON data from a file
  const data = require("./data/res.json");

  // Picking a random range within a range
  let counter = Object.keys(data).length;
  let random_pick = Math.floor(Math.random() * counter);

  // Retrieving the information required
  let word = data[random_pick].word;
  let def = data[random_pick].definition;
  let example = data[random_pick].example;

  // Returning the response
  res.status(200).json({
    word: word,
    definition: def,
    example: example
  })
})

// Listening on a user-defined port for requests
app.listen(port, () => {
  console.log(`This backend is running on the port ${port}.`);
})

