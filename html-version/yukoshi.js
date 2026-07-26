/**
 * @file yukoshi.js
 * @file converts from text input to yukoshi
 * @author xela
 * 
 * HTML VERSION
 * this is a dialect of fiskur :)
 */


const letterKey = {
  a: '0101111010',
  b: '0110110100',
  c: '0111100111',
  d: '0011011001',
  e: '0111110111',
  f: '0100110111',
  g: '1001011011',
  h: '0101111101',
  i: '0111010111',
  j: '0110010111',
  k: '0101110101',
  l: '0111100100',
  m: '0111111100',
  n: '0101101111',
  o: '0111101111',
  p: '0100110110',
  q: '1111101111',
  r: '0010010011',
  s: '0111011001',
  t: '0010111010',
  u: '0111101101',
  v: '0010101101',
  w: '0111111101',
  x: '0101010101',
  y: '1001011101',
  z: '0011010110',
  ',': '1001000000',
  '.': '0010000000',
  '!': '1000010010',
  '?': '1000010110',
  "'": '0000000010',
  '"': '0000000101',
  '<3': '0010111101',
  '=': '0111000111',
  '-': '0000111000',
  '_': '0111000000',
  '(': '0010100010',
  ')': '0010001010',
  ':': '0010000010',
  ';': '1010000010',
  '/': '0100010001',
  '\\': '0001010100',
  '<': '0011100011',
  '>': '0110001110'
};

const specialCases = {
  'i love you': '0110110110',
  'i love u': '0110110110',
  'ily': '1111100111',
  'fiskur': '1111000101'
};

let input = '';
let output = '';

//get user input
function takeInput() {
  return new Promise((resolve) => {
    console.log('Enter text to translate');
    let answer = document.getElementById('lebron').value;
    input = answer.toLowerCase();
    resolve();
  });
}

function translateToYukoshi() {

  for (let n = 0; n < input.length; n++){

    // check for spaces
    if (input[n] === ' ') {
      output += ' ';
      continue;
    }

    // check for <3 mid text
    if (n < input.length - 1) {
      const midHeart = input.substring(n, n + 2);
      if (Object.prototype.hasOwnProperty.call(letterKey, midHeart)) {
        output+=letterKey[midHeart];
        n++;
        continue;
      }
    }
    // check for ily mid text
    if (n < input.length - 2) {
      const midILY = input.substring(n, n + 3);
      if (Object.prototype.hasOwnProperty.call(specialCases, midILY)) {
        output+=specialCases[midILY];
        n += 2;
        continue;
      }
    }
    // check for i love u mid text
    if (n < input.length - 7) {
      const midILoveU = input.substring(n, n + 8);
      if (Object.prototype.hasOwnProperty.call(specialCases, midILoveU)) {
        output+=specialCases[midILoveU];
        n += 7;
        continue;
      }
    }
    // check for i love you mid text
    if (n < input.length - 9) {
      const midILoveYou = input.substring(n, n + 10);
      if (Object.prototype.hasOwnProperty.call(specialCases, midILoveYou)) {
        output+=specialCases[midILoveYou];
        n += 9;
        continue;
      }
    }
    //check for fiskur mid text
    if (n < input.length - 5) {
      const midFiskur = input.substring(n, n + 6);
      if (Object.prototype.hasOwnProperty.call(specialCases, midFiskur)) {
        output+=specialCases[midFiskur];
        n += 5;
        continue;
      }
    }
    
    const char = input.substring(n, n + 1);
    if (Object.prototype.hasOwnProperty.call(letterKey, char)) {
      output+=letterKey[char];
      continue;
    }
  }
}

async function main() {
  await takeInput();
  translateToYukoshi();
  console.log('Output: ' + output);
  document.getElementById("result").textContent = output;
  input = "";
  output = "";
}

document.getElementById("init").addEventListener("click", function () {
    if (document.getElementById('lebron').value.length < 1) return
    else {
        if (document.getElementById("mode").value == "yukoshi") {
          main();
        }
    }
});