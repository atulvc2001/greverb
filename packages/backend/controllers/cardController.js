const adiData = require("../data/adi.json");
const swadeepData = require("../data/swa.json");
const orangeData = require("../data/orange.json");
const gregmatData = require("../data/gregmat.json");

function retrieval(cardType) {
  // Identification of cardType
  if(cardType === "adi") {
    data = adiData;
//  } else if (cardType === "sid") {
//    data = sidData;
  } else if (cardType === "swadeep") {
    data = swadeepData;
  } else if (cardType === "gregmat") {
    data = gregmatData;
  } else {
    data = orangeData;
  }

  // Picking a random range within a range
  let counter = Object.keys(data).length;
  let random_pick = Math.floor(Math.random() * counter);

  // Retrieving the information required
  let word = data[random_pick].word;
  let def = data[random_pick].definition;
  let example = data[random_pick].example;

  return {word, def, example};
}

// Get Adithya's Cards => /api/v1/cards/adi
exports.getAdiCards = (req, res, next) => {
  let {word, def, example} = retrieval('adi');
  res.status(200).json({
    word: word,
    defition: def,
    example: example
  });
};

// Get Swadeep's Cards => /api/v1/cards/swa
exports.getSwadeepCards = (req, res) => {
  let {word, def, example} = retrieval('swadeep');
  res.status(200).json({
    word: word,
    defition: def,
    example: example
  });
};

// Get Orange's Cards => /api/v1/cards/orange
exports.getOrangeCards = (req, res) => {
  let {word, def, example} = retrieval('orange');
  res.status(200).json({
    word: word,
    defition: def,
    example: example
  });
};

// Get Gregmat's Cards => /api/v1/cards/gregmat
exports.getGregmatCards = (req, res) => {
  let {word, def, example} = retrieval('gregmat');
  res.status(200).json({
    word: word,
    defition: def,
    example: example
  });
};
