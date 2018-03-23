// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

console.log('%c Copy an array', 'font-size: 20px; font-weight: bold');
// one way
console.log('%c Using Slice', 'font-size: 14px; font-weight: bold');
const team1 = players.slice();
team1[2] = 'Ganesh';
console.log(players);
console.log(team1);

// or create a new array and concat the old one in
console.log('%c Using Concat', 'font-size: 14px; font-weight: bold');
const team2 = [].concat(players);
team2[2] = 'Ganesh';
console.log(players);
console.log(team2);

// or use the new ES6 Spread
console.log('%c Using ES6 Spread Operator', 'font-size: 14px; font-weight: bold');
const team3 = [...players];
team3[2] = 'Ganesh';
console.log(players);
console.log(team3);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80
};

console.log('%c Copy Object', 'font-size: 20px; font-weight: bold');

console.log('%c Using Object.assing', 'font-size: 14px; font-weight: bold');
const captain1 = Object.assign({}, person, {number : 12});
captain1.name = 'Ganesh';
console.log(person);
console.log(captain1);

console.log('%c Using JSON.stringify and JSON.parse', 'font-size: 14px; font-weight: bold');
const captain2 = JSON.parse(JSON.stringify(person));
captain2.name = 'Ganesh';
console.log(person);
console.log(captain2);
// and think we make a copy:

// how do we take a copy instead?

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
