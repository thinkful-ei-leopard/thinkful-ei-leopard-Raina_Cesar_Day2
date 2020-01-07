/* eslint-disable strict */
const people = [
  {name: 'Sarah',
    jobTitle: 'engineer',
    boss: 'Tom'},
  {name: 'Elise',
    jobTitle: 'developer',
    boss: 'Tom'},
  {name: 'Tom',
    jobTitle: 'boss'}
];


    
people.forEach(person => {
    if (!person.boss) {
        console.log(`${person.jobTitle} ${person.name} doesn't report to anybody`)
    } else {
        console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`);
    }
});