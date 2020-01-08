/* eslint-disable strict */
const dictionary = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function decode(word) {
  const letter = word[0];
  const listKeys = Object.keys(dictionary);
  let result = '';

  listKeys.forEach(key => {
    if (letter !== key) {
      return ' ';
    }
    if (letter ===  key) {
      result = word[dictionary[key]]; 
    }
  });
  return result;
}

const input = 'craft block argon meter bells brown croon droop';
const stringInArray = input.split(' ');

function decodedString() {
  return stringInArray.map(word => {
    return decode(word);
  }).join('');
}

console.log(decodedString());


