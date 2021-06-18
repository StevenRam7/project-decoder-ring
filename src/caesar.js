// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function caesar(input, shift, encode = true) {
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    let finalMessage = "";
    input = input.toLowerCase();
    if (!encode) shift *= -1;
    for (let i = 0; i < input.length; i++) {
      if (input.charCodeAt(i) < 97) {
        finalMessage += input[i];
        continue;
      }
      let charCode = input.charCodeAt(i) + shift;
      if (charCode > 122) charCode -= 26;
      else if (charCode < 97) charCode += 26;
      finalMessage += String.fromCharCode(charCode);
    }

    return finalMessage;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
