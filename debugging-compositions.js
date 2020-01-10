// Debugging compositions

const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const map = cb => array => array.map(cb);
const split = char => array => array.split(char);
const join = char => array => array.join(char);
const lowerCase = str => str.toLowerCase();

const books = ["The culture code", "Clean code", "Algorithms to live by"];

const trace = msg => x => (console.log(msg, x), x);

const slugify = compose(
  map(join("-")),
  trace("after split"),
  map(split(" ")),
  trace("after lowerCase"),
  map(lowerCase),
  trace("before lowerCase")
);

const slugs = slugify(books);
console.log(slugs);
