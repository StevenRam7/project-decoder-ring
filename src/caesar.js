// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  function caesar(input, shift, encode = true) {
    console.log(input, shift);
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    let finalMessage = [];
    if (encode === true) {
    for (let i=0; i < input.length; i++) {
      if (input[i] === alphabet[i] && input[i].charCodeAt() > 96) {
        const shifted = input[i].replace(alphabet[i+shift]);
        finalMessage.push(shifted);
      };
    }
      return finalMessage;
    }
    
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };