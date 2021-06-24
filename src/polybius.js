// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const grid = [
    "11",
    "21",
    "31",
    "41",
    "51",
    "12",
    "22",
    "32",
    "42",
    "52",
    "13",
    "23",
    "33",
    "43",
    "53",
    "14",
    "24",
    "34",
    "44",
    "54",
    "15",
    "25",
    "35",
    "45",
    "55",
  ];
  //42 = both i and j
  const romanAlphabet = [
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

  function polybius(input, encode = true) {
    input = input.toLowerCase();
    let finalMessage = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        const charNum = letter.charCodeAt(0) - 97;
        //97 is charCode for 'a'
        if (letter == " ") {
          finalMessage += " ";
          continue;
        }
        if (letter.charCodeAt(0) <= 105) {
          let row = Math.floor(charNum / 5) + 1;
          let column = (charNum % 5) + 1;
          finalMessage += `${column}${row}`;
        } else if (letter.charCodeAt(0) > 105) {
          const newCharNum = letter.charCodeAt(0) - 98;
          let row = Math.floor(newCharNum / 5) + 1;
          let column = (newCharNum % 5) + 1;
          finalMessage += `${column}${row}`;
        }
      }
      console.log(finalMessage);
      return finalMessage;
    }
    if (!encode) {
      console.log(input);
      let noSpaces = input.split(" ");
      console.log(noSpaces);
      let allNumbers = "";
      for (let i = 0; i < noSpaces.length; i++) {
        allNumbers += noSpaces[i];
      }
      console.log(allNumbers);
      let splitNumbers = allNumbers.split("");
      console.log(splitNumbers);
      let adjustedInput = [];
      for (let i = 0; i < splitNumbers.length; i += 2) {
        adjustedInput.push(splitNumbers[i] + splitNumbers[i + 1]);
        console.log(adjustedInput);
        //first # = column, second # = row
      }
      for (let j = 0; j < adjustedInput.length; j++) {
        console.log(adjustedInput[j]);
        for (let g = 0; g < grid.length; g++) {
          if (adjustedInput[j] === grid[g]) {
            if (g <= 8) {
              finalMessage += romanAlphabet[g];
            } else if (g > 8) {
              finalMessage += romanAlphabet[g + 1];
            }
          }
        }
      }

      console.log(finalMessage);
      return finalMessage;
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
