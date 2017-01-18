var pigLatin = function(aWord) {
  // debugger;

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  aWord = aWord.toLowerCase();

  var ending = "ay"

  var resultWord = "";

  // vowels.forEach(function(vowel) {
  //   if(aWord.charAt(0) === vowel) {
  //     resultWord = aWord + "ay";
  //   } else if (aWord.charAt(0) !== vowel && aWord.charAt(1) === vowel){
  //       if (aWord.substring(0, 2) === "qu") {
  //         resultWord = aWord.slice(2) + aWord.slice(0,2) + "ay";
  //       } else {
  //         resultWord = aWord.slice(1) + aWord.slice(0,1) + "ay";
  //       }
  //
  //   } else if (aWord.charAt(0) !== vowel && aWord.charAt(1) !== vowel && aWord.charAt(2) === vowel){
  //       resultWord = aWord.slice(2) + aWord.slice(0,2) + "ay";
  //   } else if (aWord.charAt(0) !== vowel && aWord.charAt(1) !== vowel && aWord.charAt(2) !== vowel && aWord.charAt(3) === vowel){
  //       resultWord = aWord.slice(3) + aWord.slice(0,3) + "ay";
  //   } else if (aWord.charAt(0) !== vowel && aWord.charAt(1) !== vowel && aWord.charAt(2) !== vowel && aWord.charAt(3) !== vowel && aWord.charAt(4) === vowel){
  //       resultWord = aWord.slice(4) + aWord.slice(0,4) + "ay";
  //   }
  // });
  // return resultWord;

  var wordArray = aWord.split("");
  var count = 0;

  var splitLocation = 0;
  for (var i = 0; i < wordArray.length; i++){
    // if(count <= 2) {
    //   count++;
      for(var j = 0; j < vowels.length; j++){

        if (wordArray[i] === vowels[j]) {
          splitLocation = wordArray.indexOf(vowels[j]);
          resultWord = aWord.substring(splitLocation) + aWord.substring(0,splitLocation) + ending;
          return resultWord;
          break;
        }
      };
  };







};

$(document).ready(function(){
  $("form#pig-latin-form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#word").val();
    var result = pigLatin(userInput);

    $("div#result").text(result);

  });
});
