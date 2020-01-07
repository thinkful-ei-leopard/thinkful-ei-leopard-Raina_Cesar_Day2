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
