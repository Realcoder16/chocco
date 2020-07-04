
const string = "Привет! Как дела?";

const array = ['а', 'е', 'ё', 'и', 'о', 'у', 'ю', 'я', 'э', 'ы'];
const getVowels = result => {
  let extractVowels = "";
  for (var i = 0; i < result.length; i++) {
    var letter = result[i].toLowerCase();

    if (array.includes(letter)) {

      extractVowels = extractVowels + letter;
    }


  }

  return extractVowels;
}

console.log(getVowels(string));


