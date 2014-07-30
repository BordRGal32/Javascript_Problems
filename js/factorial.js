var calculateFactorialRecursion = function(number) {
  if(number === 0) {
    return 1;
  } else if(number < 0){
    return "undefined";
  } else if(number === 1) {
    return 1;
  } else {
    return number * calculateFactorialRecursion(number - 1);
  };

};

var calculateFactorial = function(number) {
  var factorial = number;

  if (number === 0) {
    factorial =1;
  } else if(number < 0){
    factorial = "undefined";
  } else {
    for(var i=number; i>1; i-=1){
      factorial = factorial * (i-1);

    };
  };

  return factorial;
};

$(document).ready(function() {

  $("form#factorial").submit(function(event) {
    var userInput = parseInt($("input#number-factorial").val());
    var result = calculateFactorial(userInput);
    $("span.factorial-result").text(result);
    event.preventDefault();
  });

    $("form#factorial-recursive").submit(function(event) {
    var userInput = parseInt($("input#number-factorial-recursive").val());
    var result = calculateFactorialRecursion(userInput);

    $("span.factorial-result-recursive").text(result);

    event.preventDefault();
  });

});
