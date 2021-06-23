// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    console.log(input);
    let finalMessage = ' ';
    const charNum = letter.charCodeAt() - 97;
    for (let i=0; i < input.length; i++) {
      const letter = input[i];
      if (letter >= 'i') {
      let row = Math.floor(charNum/5) + 1;
      let column = charNum%5 + 1;
      finalMessage += `${row}${column}`;
        
      } else if (letter < 'i') {
      let row = Math.floor(charNum - 1/5) + 1;
      let column = (charNum - 1)%5 + 1;
      finalMessage += `${row}${column}`;
      }
      console.log(finalMessage);
      console.log(row, column);
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
