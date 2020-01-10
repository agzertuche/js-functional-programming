//  Argument order

// const map = array => cb => array.map(cb);
const map = cb => array => array.map(cb);

const arr = [1, 2, 3, 4];
const double = n => n * 2;

// const withArr = map(arr);

// console.log(withArr(double));
// console.log(withArr(n => n * 3));
// console.log(arr.map(n => n * 4));

const withDouble = map(double);
console.log(withDouble(arr));
console.log(withDouble([2, 4, 6, 8, 9]));

// Arguments should be from Most specific => least specific

const prop = key => obj => obj[key];
const getPropertyName = prop("name");
const people = [
  { name: "Arturo" },
  { name: "Gustavo" },
  { name: "Guillermo" },
  { name: "Alma" }
];

console.log(map(getPropertyName)(people));
