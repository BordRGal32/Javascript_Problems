var scrabble = function(word) {

  var score = onePoint(word)
    + twoPoint(word)
    + threePoint(word)
    + fourPoint(word)
    + fivePoint(word)
    + eightPoint(word)
    + tenPoint(word);
  return score;
};

var onePoint = function(word) {
  var onePoints = /[aeioulnrst]/gi;
  var onePtResults = word.match(onePoints);
  if(onePtResults === null){
    return 0;
  } else {
    return onePtResults.length * 1;
  }
};

var twoPoint = function(word) {
  var twoPoints = /[dg]/gi;
  var twoPtResults = word.match(twoPoints);
  if (twoPtResults === null){
    return 0;
  } else {
    return twoPtResults.length * 2;
  }
};
var threePoint = function(word) {
  var threePoints = /[bcmp]/gi;
  var threePtResults = word.match(threePoints);
  if (threePtResults === null){
    return 0;
  } else {
    return threePtResults.length * 3;
  }
};

var fourPoint = function(word) {
  var fourPoints = /[fhvwy]/gi;
  var fourPtResults = word.match(fourPoints);
  if (fourPtResults === null){
    return 0;
  } else {
    return fourPtResults.length * 4;
  }
};


var fivePoint = function(word) {
  var fivePoints = /[k]/gi;
  var fivePtResults = word.match(fivePoints);
  if (fivePtResults === null){
    return 0;
  } else {
    return fivePtResults.length * 5;
  }
};

var eightPoint = function(word) {
  var eightPoints = /[jx]/gi;
  var eightPtResults = word.match(eightPoints);
  if (eightPtResults === null){
    return 0;
  } else {
    return eightPtResults.length * 8;
  }
};

var tenPoint = function(word) {
  var tenPoints = /[qz]/gi;
  var tenPtResults = word.match(tenPoints);
  if (tenPtResults === null){
    return 0;
  } else {
    return tenPtResults.length * 10;
  }
};

$(document).ready(function() {

  $("form#wordCheck").submit(function(event) {
    var word = $("input#word").val();
    var score = scrabble(word);


    $("span.scrable-result").text(score);
    event.preventDefault();

  });
});

