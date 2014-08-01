var encrypt = function(message) {
  var messageStandardized = message.toLowerCase().split(" ").join("").replace(/\W/g, "");
  var messageLength = messageStandardized.length;
  var numColumns =  Math.ceil(Math.sqrt(messageLength));
  var rows = [];
  var encryptRows = [];
  var encryption = "";

  for(var i = 0; i < messageLength; i += numColumns) {
    rows.push(messageStandardized.substring(i,(i + numColumns)));
  };

  for(var i = 0; i < numColumns; i += 1){
    rows.forEach(function(row) {
      if(row[i] !== undefined){
        encryptRows.push(row[i]);
      };
    });
  };

  var encryptString = encryptRows.join("");

  for(var i = 0; i < messageLength; i += 5) {
    encryption += encryptString.substring(i, (i + 5)) + " ";
  };

  return encryption.slice(0,-1);
};

$(document).ready(function() {

  $("form#secret-message").submit(function(event) {
    var message = $("input#message").val();
    var result = encrypt(message);

    $("span.encrypted-message").text(result);
    event.preventDefault();
  })
});


