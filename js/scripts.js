var pigLatin = function (aWord) {
  if (typeof aWord !== 'string'){
    return "this is not a word!!";
  }
}

$(document).ready(function(){
  $("form#pig-latin-form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#word").val();
    var result = pigLatin(userInput);

    $("div#result").text(result);

  });
});
