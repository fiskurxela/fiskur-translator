/**
 * @file fiskur.js
 * @desc converts text input into fiskur
 * @author xela
 * 
 * Note that there aren't gonna be many comments bc
 * I don't know if I wanna reveal how the language
 * works yet :p
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const letterKey = {
  a: 0b0101111010,
  b: 0b0110110100,
  c: 0b0111100111,
  d: 0b0011011001,
  e: 0b0111110111,
  f: 0b0100110111,
  g: 0b1001011011,
  h: 0b0101111101,
  i: 0b0111010111,
  j: 0b0110010111,
  k: 0b0101110101,
  l: 0b0111100100,
  m: 0b0111111100,
  n: 0b0101101111,
  o: 0b0111101111,
  p: 0b0100110110,
  q: 0b1111101111,
  r: 0b0010010011,
  s: 0b0111011001,
  t: 0b0010111010,
  u: 0b0111101101,
  v: 0b0010101101,
  w: 0b0111111101,
  x: 0b0101010101,
  y: 0b1001011101,
  z: 0b0011010110,
  ',': 0b1001000000,
  '.': 0b0010000000,
  '!': 0b1000010010,
  '?': 0b1000010110,
  ' ': 0,
  "'": 0b0000000010,
  '"': 0b0000000101,
  '<3': 0b0010111101,
  '=': 0b0111000111,
  '-': 0b0000111000,
  '_': 0b0111000000,
  '(': 0b0010100010,
  ')': 0b0010001010,
  ':': 0b0010000010,
  ';': 0b1010000010,
  '/': 0b0100010001,
  // "\": 0b0001010100 idk how to do this
};

const specialCases = {
  'i love you': 0b0110110110,
  'fiskur': 0b1111000101
};

let input = '';
const convertedLetters = [];
let output = '';

//get user input
function takeInput() {
  return new Promise((resolve) => {
    console.log('Enter text to translate');
    console.log();
    rl.question('', (answer) => {
      input = answer;
      resolve();
    });
  });
}

//yukoshi is a dialect that's necessary for program to convert to fiskur
function convertToYukoshi() {
  input = input.toLowerCase();
  if (Object.prototype.hasOwnProperty.call(specialCases, input)) {
    convertedLetters.push(specialCases[input]);
    return;
  }
  for (let n = 0; n < input.length; n++) {
    // check for <3 mid text
    if (n < input.length - 1) {
      const twoChar = input.substring(n, n + 2);
      if (Object.prototype.hasOwnProperty.call(letterKey, twoChar)) {
        convertedLetters.push(letterKey[twoChar]);
        n++;
        continue;
      }
    }
    // check for i love you mid text
    if (n < input.length - 9) {
      const midILoveYou = input.substring(n, n + 10);
      if (Object.prototype.hasOwnProperty.call(specialCases, midILoveYou)) {
        convertedLetters.push(specialCases[midILoveYou]);
        n += 9;
        continue;
      }
    }
    //check for fiskur mid text
    if (n < input.length - 5) {
      const midFiskur = input.substring(n, n + 6);
      if (Object.prototype.hasOwnProperty.call(specialCases, midFiskur)) {
        convertedLetters.push(specialCases[midFiskur]);
        n += 5;
        continue;
      }
    }
    const char = input.substring(n, n + 1);
    if (Object.prototype.hasOwnProperty.call(letterKey, char)) {
      convertedLetters.push(letterKey[char]);
    }
  }
}

//translate from yukoshi to fiskur
function convertToFiskur(){
  for (let n = 0; n < convertedLetters.length; n++){  
    if (convertedLetters[n] === 0) {
      output += ' ';
      continue;
    }
    const binary = convertedLetters[n].toString(2).padStart(10, '0');
    const temporary = new Array(countOnes(binary)).fill(-1);
      for (let m=0; m<binary.length; m++){
          if (binary.substring(m, m+1) === '1'){ 
              randomOrder(temporary, m);
          }
      }
      for (let a=0; a<temporary.length; a++){
          output+=temporary[a];
      }      
  }
  console.log('Output: ' + output);
}


//helpers for convertToFiskur()
function countOnes(given){
    let count = 0;
    for (let n=0; n<given.length;n++){
        if (given.substring(n, n+1) ==='1'){
            count++;
        }
    }
    return count;
}

function randomOrder(array, x){
    const randomIndex = Math.floor(Math.random() * array.length);
    if (array[randomIndex] === -1){
        array[randomIndex] = x;
    }
    else {
        randomOrder(array, x);
    }
}

async function main() {
  await takeInput();
  convertToYukoshi();
  convertToFiskur();
  rl.close();
}

main();