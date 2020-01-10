// Immutable data

// Mutable = can be changed after creation
// Immutable = cant't be changed after creation

// Mutable array
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log("a :", a);
console.log("b :", b);

// Mutable object
const objectA = { bar: "foo" };
const objectB = objectA;
objectB.bar = "baz";
console.log("objectA :", objectA);
console.log("objectB :", objectB);

// Immutable push method
const push = value => array => {
  const clone = [...array];
  clone.push(value);
  return clone;
};

const arrA = [1, 2, 3];
const arrB = push(4)(arrA);
console.log("arrB :", arrB);
console.log(arrA === arrB);
