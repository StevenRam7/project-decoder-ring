// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    let finalMessage = '';
    console.log(input, alphabet)
     if (!alphabet) {
      return false;
    }
    if (alphabet.length != 26) {
      return false;
    }
    if (alphabet.length === 26) {
      const mirrorAlphabet = alphabet;
      console.log(alphabet, mirrorAlphabet);
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
      console.log(finalMessage);
      return finalMessage;
  }
    
    if (!encode) {
      for (let i=0; i < input.length; i++) {
      if (input[i] == ' ') {
        finalMessage += ' ';
        continue;
      }
        const letter = input[i];
        finalMessage += String.fromCharCode(letter + 97);
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
