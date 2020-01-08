/* eslint-disable strict */
const toDecode =  'craft block argon meter bells brown croon droop';
const split = toDecode.split(' ');
const table = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

// function decode(word) {
//   let index = word.charAt[0];
//   if (Object.keys(table).find(letter => letter === index)) {
//     return word[table[index]];
//   } else {
//     return ' ';
//   }
// }

function decodeWords(words) {
  const arr = [];
  split.forEach(d => arr.push(decode(d)));
  return split.join('');
}

console.log(decode(table));

