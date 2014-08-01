var partialFinder = function(word1, word2) {
  var holder = [];

  if(word1.length > word2.length){
    var smallWord = word2;
    var smallWordMessy = word2.toLowerCase().split('').sort();
    var largeWord = word1;
  } else {
    var smallWord = word1;
    var smallWordMessy = word1.toLowerCase().split('').sort();
    var largeWord = word2;
  }

  for (var x = 0; x < largeWord.length; x++){
    for(var i = 0; i < smallWord.length; i++) {
      if(smallWord[i] === largeWord[x]) {
        smallWordMessy.splice(holder, 1);
    }
  }
}
  if (smallWordMessy.length === 0) {
    return true;
  } else {
    return false;
  }
}


var anagramFinder = function(word1, word2) {
  var word1Messy = word1.toLowerCase().split('').sort().join('');
  var word2Messy = word2.toLowerCase().split('').sort().join('');

  if(word1Messy ===  word2Messy) {
    return true;
  } else {
    if(word1Messy.length === word2Messy.length) {
     return false;
    } else {
      partialFinder(word1, word2);
    }
  }
};

$(document).ready(function() {
  $("form#anagram").submit(function(event) {
    event.preventDefault();
    var word1 = $("input#word1").val();
    var word2 = $("input#word2").val();
    var result = anagramFinder(word1, word2);

    $("span.anagram-result").text(result);
  })

});
