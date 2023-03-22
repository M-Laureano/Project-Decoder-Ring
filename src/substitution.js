// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  //need an alphabet variable
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
   //the code will be the same length as the alphabet

  function substitution(input, alphabet, encode = true) {
    console.log(alphabet,'input', input)
    //create a return variable
    let result = ''
    //if alphabet is empty return false
    if (alphabet === undefined) return false
    //if alphabet is less than 26 characters, return false
    if (alphabet.length < 26 ) return false
    //if alphabet contains repeating characters, return false
    for (let i = 0; i < alphabet.length; i++){
      for (let j = i+1; j < alphabet.length; j++)
      if (alphabet[i] === alphabet[j]){
        console.log(alphabet[i],alphabet[j])
        return false
      }
    }
    //let the input become lowercase
    const input1 = input.toLowerCase
    //iterate through the input
    if(encode === true){
         for(let i = 0; i < input.length; i++){
      // if i is a " " maintain that " "
      if (input[i].includes(' ')){
        result += " "
      }else{
     //iterate through the alpha string
      for(let j = 0; j < alpha.length; j++){
    //for each letter, find its corasponding index in alpha
      if (input[i] === alpha[j]){
      //use the same number to return the letter from the code alphabet
      result += alphabet[j]
      }
    //repeat until input.length is 0
      }
      }
    }
    }
if (encode === false){
         for(let i = 0; i < input.length; i++){
      // if i is a " " maintain that " "
      if (input[i].includes(' ')){
        result += " "
      }else{
     //iterate through the alphabet string
      for(let j = 0; j < alphabet.length; j++){
    //for each letter, find its corasponding index in alpha
      if (input[i] === alphabet[j]){
      //use the same number to return the letter from the code alphabet
      result += alpha[j]
      }
    //repeat until input.length is 0
      }
      }
    }
    }
    console.log('this is result', result)
    return result
  }

  return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };
