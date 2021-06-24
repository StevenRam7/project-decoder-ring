// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const romanAlphabet = 'abcdefghijklmnopqrstuvwxyz';

  function substitution(input, alphabet, encode = true) {
    let finalMessage = '';
    console.log(input, alphabet)
     if (!alphabet) {
      return false;
    }
    if (alphabet.length != 26) {
      return false;
    }
    for (let i=1; i < alphabet.length; i++) {
     if (alphabet[i] === alphabet[0]) {
      return false;
      }
    }
    if (encode) {
    for (let i=0; i < input.length; i++) {
      if (input[i] == ' ') {
        finalMessage += ' ';
        continue;
      }
      const letter = input.charCodeAt(i) - 97;
      finalMessage += alphabet[letter];
    }
      return finalMessage;
      }
    
    if (!encode) {
      for (let i=0; i < input.length; i++) {
      if (input[i] == ' ') {
        finalMessage += ' ';
        continue;
      }
        //if (input[i] == '.') {
         // finalMessage += '.';
         // continue;
        //}
        for (let j=0; j < alphabet.length; j++) {
        if (input[i] === alphabet[j]) {
         finalMessage += romanAlphabet[j];
        }
      }
      }
      console.log(finalMessage);
      return finalMessage;
  }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
