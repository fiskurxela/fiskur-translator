/**
 * @file reverseYuko.js
 * @desc converts from yukoshi to latin characters and symbols
 * @author xela
 * 
 * reverses yukoshi
 */

(() => {

const letterKey = {
  '0101111010': 'a',
  '0110110100': 'b',
  '0111100111': 'c',
  '0011011001': 'd',
  '0111110111': 'e',
  '0100110111': 'f',
  '1001011011': 'g',
  '0101111101': 'h',
  '0111010111': 'i',
  '0110010111': 'j',
  '0101110101': 'k',
  '0111100100': 'l',
  '0111111100': 'm',
  '0101101111': 'n',
  '0111101111': 'o',
  '0100110110': 'p',
  '1111101111': 'q',
  '0010010011': 'r',
  '0111011001': 's',
  '0010111010': 't',
  '0111101101': 'u',
  '0010101101': 'v',
  '0111111101': 'w',
  '0101010101': 'x',
  '1001011101': 'y',
  '0011010110': 'z',
  '1001000000': ',',
  '0010000000': '.',
  '1000010010': '!',
  '1000010110': '?',
  '0000000010': "'",
  '0000000101': '"',
  '0010111101': '<3',
  '0111000111': '=',
  '0000111000': '-',
  '0111000000': '_',
  '0010100010': '(',
  '0010001010': ')',
  '0010000010': ':',
  '1010000010': ';',
  '0100010001': '/',
  '0001010100': '\\',
  '0011100011': '<',
  '0110001110': '>',

  //special cases
  
  '0110110110': 'i love you',
  //'0110110110': 'i love u', not using most likely
  '1111100111': 'ily',
  '1111000101': 'fiskur',
};

let input = '';
let output = '';

//get user input
function takeInput() {
  return new Promise((resolve) => {
    input = '';
    output = '';
    input = document.getElementById('lebron').value;
    resolve();
  });
}

function reverseYukoshi() {
    
    for (let n=0; n<input.length; n++){

        // check for spaces
        if (input[n] === ' ') {
        output += ' ';
        continue;
        }

        const temp = input.substring(n, n+10);

        if (Object.prototype.hasOwnProperty.call(letterKey, temp)) {
            output += letterKey[temp];
            n += 9;
            continue;
        }
    }
}

async function main() {
  await takeInput();
  reverseYukoshi();
  document.getElementById('result').textContent = output;
  input = '';
  output = '';
}

document.getElementById('init').addEventListener('click', function () {
    if (document.getElementById('lebron').value.length < 1) return;
    if (document.getElementById('mode').value == 'yukoshi') {
      main();
    }
});

})();