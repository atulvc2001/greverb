// Importing Express functionality
const express = require("express");
const cors = require("cors");

// Routers
const cardRouter = require("./routes/cards");

// Create an app object
const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

// Defining a Hello World route
// to test the application
app.get('/api/v1', (req, res) => {
  res.status(200).json({
    word: 'greverb',
    definition: 'A really cool GRE quizzing application',
    example: 'Unfortunately, I\'ll need to take a raincheck on playing because greverb exists!'
  })
})

app.use("/api/v1/cards", cardRouter);

// Listening on a user-defined port for requests
app.listen(port, () => {
  console.log(`This backend is running on the port ${port}.`);
})
