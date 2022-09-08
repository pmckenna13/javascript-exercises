const ftoc = function(tempFaren) {
  
  let tempCelc = 0;

  tempCelc = (tempFaren -32) * (5/9);
  tempCelc = Math.round(tempCelc * 10) / 10;

  return tempCelc;
};

const ctof = function(tempCelc) {

  let tempFaren = 0;

  tempFaren = (tempCelc * 9 / 5) + 32;
  tempFaren = Math.round(tempFaren * 10) / 10;

  return tempFaren;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
