// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alpha = 'abcdefghijklmnopqrstuvwxyz'

  function caesar(input, shift, encode = true) {
    // your solution code here
   let result = ''
    if (shift === undefined){
      return false
    }
      if(shift == 0|| shift > 25|| shift < -25){
    return false
      }
    if (encode === true){ 
   for (let i = 0; i < input.length; i++){
     let newInput = input.toLowerCase()
    if (alpha.includes(newInput[i])){
      for (let n = 0; n < alpha.length; n++){
        if (alpha[n] === newInput[i]){
          let yeet = n + shift
          if (yeet > 25){
             yeet = yeet - 26
          }
          if (yeet < 0){
            yeet = yeet + 26
          }
          result += alpha[yeet]
          }
        }
      }
     else result += newInput[i]
    }
   }
   if (encode === false){
  for (let i = 0; i < input.length; i++){
     let newInput = input.toLowerCase()
    if (alpha.includes(newInput[i])){
      for (let n = 0; n < alpha.length; n++){
        if (alpha[n] === newInput[i]){
          let yeet = n - shift
          if (yeet > 25){
             yeet = yeet - 26
          }
          if (yeet < 0){
            yeet = yeet + 26
          }
          result += alpha[yeet]
          }
        }
      }
    
     else result += newInput[i]
    }
 }    
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


console.log(caesarModule.caesar("This is a secret message!",-3)) //qefp fp x pbzobq jbppxdb!
console.log(caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false)) //this is a secret message!