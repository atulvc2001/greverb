// Importing the required functionality from 
// the controllers
const {
  getAdiCards,
//  getSidCards,
  getSwadeepCards,
  getOrangeCards
} = require("../controllers/cardController");

// Importing the router component
const router = require("express").Router();

// Get random cards from an online deck
// router.get("/", getRandomCards);

// Get personalized cards from our three
// GRE aspirants
router.get("/adi", getAdiCards);
// router.get("/sid", getSidCards);
router.get("/swadeep", getSwadeepCards);

// Get cards from a colored deck
// router.get("/purple", getPurpleCards);
router.get("/orange", getOrangeCards);

// Export a router
module.exports = router;
