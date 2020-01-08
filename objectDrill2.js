/* eslint-disable strict */
const obj = {
  foo: 'a',
  bar: 'b',
  fum: 'c',
  quux: 'd',
  spam: 'e'
};
  
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
};