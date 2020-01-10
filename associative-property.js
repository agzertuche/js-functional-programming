// Associative property

// 1 + 2 + 3
// 1 + (2 + 3)
// (1 + 2) + 3

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const scream = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const repeat = str => `${str} ${str}`;

const withExuberation = compose(repeat, scream, exclaim);

const str = "Me gustan los tacos con aguacate";
console.log(withExuberation(str));

const repeatExcitedly = compose(repeat, exclaim);
console.log(compose(repeatExcitedly, scream)(str));

const screamLoudly = compose(scream, exclaim);
console.log(compose(repeat, screamLoudly)(str));
