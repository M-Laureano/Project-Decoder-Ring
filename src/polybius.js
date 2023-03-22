// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
  input = input.toLowerCase() 
    function isOdd(n) {
      return Math.abs(n % 2) == 1;
   }


let oddCheck = input.split(' ')
let oddCheckStr = oddCheck.join('')
if(encode == false && isOdd(oddCheckStr.length)){return false}
console.log(oddCheck)


    let finalFinalSolution

    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let alphaArr = alpha.split('')
    const squareAlpha = 
    [
    {name: 11,letter: 'a'},
    {name: 21, letter: 'b'},
    {name: 31, letter:'c'},
    {name: 41, letter:'d'},
    {name: 51, letter:'e'},
    {name: 12, letter:'f'},
    {name: 22, letter:'g'},
    {name: 32, letter:'h'},
    {name: 42, letter:'(i/j)'},
    {name: 52, letter:'k'},
    {name: 13, letter:'l'},
    {name: 23, letter:'m'},
    {name: 33, letter:'n'},
    {name: 43, letter:'o'},
    {name: 53, letter:'p'},
    {name: 14, letter:'q'},
    {name: 24, letter:'r'},
    {name: 34, letter:'s'},
    {name: 44, letter:'t'},
    {name: 54, letter:'u'},
    {name: 15, letter:'v'},
    {name: 25, letter:'w'},
    {name: 35, letter:'x'},
    {name: 45, letter:'y'},
    {name: 55, letter:'z'}
    ]
    
    
    const alphaSquare = 
    [
    {name: 'a', number: 11},
    {name: 'b', number: 21},
    {name: 'c', number: 31},
    {name: 'd', number: 41},
    {name: 'e', number: 51},
    {name: 'f', number: 12},
    {name: 'g', number: 22},
    {name: 'h', number: 32},
    {name: 'i', number: 42},
    {name: 'j', number: 42},
    {name: 'k', number: 52},
    {name: 'l', number: 13},
    {name: 'm', number: 23},
    {name: 'n', number: 33},
    {name: 'o', number: 43},
    {name: 'p', number: 53},
    {name: 'q', number: 14},
    {name: 'r', number: 24},
    {name: 's', number: 34},
    {name: 't', number: 44},
    {name: 'u', number: 54},
    {name: 'v', number: 15},
    {name: 'w', number: 25},
    {name: 'x', number: 35},
    {name: 'y', number: 45},
    {name: 'z', number: 55}
    ]

//THIS FUNCTION IS FOR WHEN THERE IS A LETTER INPUT
    function polybiusLetter(input){
     
      ///hello world
    let inputArr = input.split(' ')
  let solution = []


//FIRST LOOP: Find the individual letters within the input
for(let l = 0; l < inputArr.length; l++){
  let smallerArr = inputArr[l].split('')
    for(let i = 0; i < smallerArr.length; i++){
      let currentLetter = smallerArr[i]

//SECOND LOOP: Find the "coordinates" IE Number that relates with each letter
for(let j = 0; j < alphaSquare.length; j++){
if(alphaSquare[j].name == currentLetter){solution.push(alphaSquare[j].number)}
}
    }
    solution.push(' ')
  }
//Finally, join the array to find the solution
let finalSolution = solution.join('')
console.log(finalSolution)
finalFinalSolution = finalSolution


  }



//THIS FUNCTION IS FOR WHEN THERE IS A NUMBER INPUT
function polybiusNumber(input){
  let inputArr = input.split(' ')
  let solution = []
let solutionArr = []

//First, we must find the different words (if there are any), so we can iterate over them individually[["1234"],["5678"]]
for(let i = 0; i < inputArr.length; i++){

  let currentSolution = []
  let currentWord = inputArr[i]
//Second, we must slice the coordinates out ("1234") --> ["12","34"]
for(let j = 0; j < currentWord.length; j+=2){
let iPlusTwo = (j + 2)
let currentSlice = currentWord.slice(j,iPlusTwo)
currentSolution.push(currentSlice)
}
solutionArr.push(currentSolution)
}



//First we must access the individual words found at the start of the first loop ["12","34"]
for(let i = 0; i < solutionArr.length; i++){
  let currentWord = solutionArr[i]
//Second, we must access the individual pairs["12"] within those words
for(let l = 0; l < currentWord.length; l++){
  let currentLetter = currentWord[l]
/////////////Third, we must translate those numbers "12" --> "F"
for(let j = 0; j < squareAlpha.length; j++){
if(squareAlpha[j].name == currentLetter){solution.push(squareAlpha[j].letter)}
}
}
//Adding a space between words
solution.push(' ')

}
// console.log(solutionArr)
// console.log(solution)
let finalSolution = solution.join("")
console.log(finalSolution)
finalFinalSolution = finalSolution


}
let inputTest = input.split(' ')
if(isNaN(inputTest[0]) == true){
  polybiusLetter(input)
  
}else{polybiusNumber(input) }




console.log(typeof(finalFinalSolution))
return finalFinalSolution.trim()

}
console.log(polybius("thinkful"))
console.log(polybius("my day"))
console.log(polybius("4432423352125413"))
console.log(polybius('3251131343 2543241341'))




return {
  polybius,
};
})();

module.exports = { polybius: polybiusModule.polybius };

console.log(polybiusModule.polybius("thinkful"))