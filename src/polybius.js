// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const square =
        //add values for grid

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    console.log(input);
    let finalMessage = '';
    if (encode) {
    for (let i=0; i < input.length; i++) {
      const letter = input[i];
      const charNum = letter.charCodeAt(0) - 97;
      //97 is charCode for 'a'
      if (letter == ' ') {
        finalMessage += ' ';
        continue;
      }
      if (letter.charCodeAt(0) <= 105) {
      let row = Math.floor(charNum/5) + 1;
      let column = charNum%5 + 1;
      finalMessage += `${column}${row}`;
       }
      else if (letter.charCodeAt(0) > 105) {
      const newCharNum = letter.charCodeAt(0) - 98;
      let row = Math.floor(newCharNum/5) + 1;
      let column = (newCharNum%5) + 1;
      finalMessage += `${column}${row}`;
      }
      
      }
      console.log(finalMessage);
      return finalMessage;
    }
    if (!encode) {
      const pairCount = input.length/2;
      //
      console.log(input);
      for (let i=0; i < input.length; i+=2) {
        let adjustedInput = '';
        adjustedInput += `${input[i]}${input[i+1]} `;
        //adjustedInput[0] = column, adjustedInput[1] = row
        
        console.log(adjustedInput);
    }
  }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
