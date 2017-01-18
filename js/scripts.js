var pigLatin = function(aWord) {

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  aWord = aWord.toLowerCase();

  vowels.forEach(function(vowel) {
    if(aWord.charAt(0) === vowel) {
      aWord = aWord + "ay";
    }
  });
  return aWord;
}

$(document).ready(function(){
  $("form#pig-latin-form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#word").val();
    var result = pigLatin(userInput);

    $("div#result").text(result);

  });
});
