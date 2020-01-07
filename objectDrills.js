'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/ this.flour) * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

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

const meal = {
  meals: ['breakfast', 'second breakfast', 'elevenses','lunch', 'afternoon tea', 'dinner', 'supper']
};
console.log(meal.meals[3]);



const array = [
  {Sarah: 'engineer'},
  {Elise: 'developer'},
  {Tom: 'boss'}
];



array.forEach(obj => console.log(obj));