var pigLatin = function(aWord) {
  // debugger;

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  aWord = aWord.toLowerCase();

  var ending = "ay"
  var resultWord = "";
  var wordArray = aWord.split("");
  var splitLocation = 0;

  for (var i = 0; i < wordArray.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (wordArray[i] === vowels[j]) {
        if(wordArray[i - 1] === "q" && vowels[j] === "u") {
          splitLocation = wordArray.indexOf(wordArray[i + 1]);
        } else {
          splitLocation = wordArray.indexOf(vowels[j]);
        }
        resultWord = aWord.substring(splitLocation) + aWord.substring(0,splitLocation) + ending;
        return resultWord;
        break;
      }
    }
  };
};


var splitWords = function(sentence) {
  var allWordsArray = sentence.split(" ");
  var resultArray = []

  allWordsArray.forEach(function(word){
    resultArray.push(pigLatin(word));
  })
  return resultArray.join(" ");
}

$(document).ready(function(){
  $("form#pig-latin-form").submit(function(event){
    event.preventDefault();

    var userInput = $("input#word").val();
    var result = splitWords(userInput);

    $("div#result").text(result);

  });
});
