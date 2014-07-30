var numToWords = function(number) {

  var threeDigits = [];
  var threeDigitInWords = [];
  var largeNumberNames = {
    0 : "",
    1 : " thousand",
    2 : " million",
    3 : " billion",
    4 : " trillion",
    5 : " quadrillion",
  };

  while(Math.ceil(number/1000)>0) {
    threeDigits.push(number % 1000);
    number = Math.floor(number/1000);
  }

  threeDigits.forEach(function(threeDigit) {
    threeDigitInWords.push(threeDigitToWords(threeDigit));
  })

  threeDigitInWords.forEach(function(threeDigitInWord, index) {
    threeDigitInWords[index] += largeNumberNames[index];
  })

  threeDigitInWords.reverse();

  return threeDigitInWords.join(" ");

};

var threeDigitToWords = function(number) {
  var words = "";
  var wordOnesTeens = {
  0 : "",
  1 : "one",
  2 : "two",
  3 : "three",
  4 : "four",
  5 : "five",
  6 : "six",
  7 : "seven",
  8 : "eight",
  9 : "nine",
  10 : "ten",
  11 : "eleven",
  12 : "twelve",
  13 : "thirteen",
  14 : "fourteen",
  15 : "fifteen",
  16 : "sixteen",
  17 : "seventeen",
  18 : "eighteen",
  19 : "nineteen",
  };
  var wordTens = {
    2 : "twenty",
    3 : "thirty",
    4 : "forty",
    5 : "fifty",
    6 : "sixty",
    7 : "seventy",
    8 : "eighty",
    9 : "ninety",
  };
  if(number > 99) {
    words += wordOnesTeens[Math.floor(number/100)] + " hundred ";
    number = number % 100;
  }
  if(number >= 20) {
    words += wordTens[Math.floor(number/10)] + " "
    number = number % 10;
  }
  words += wordOnesTeens[number];

  if (words.charAt((words.length)-1) === " ") {
    words = words.slice(0, -1);
  }
  return words;
};


$(document).ready(function() {
  $("form#number-to-word").submit(function(event) {
    event.preventDefault();
    var numberToWordInput = $("#number").val();
    var result = numToWords(numberToWordInput);
    $(".number-to-word-result").text(result);

  });
});

