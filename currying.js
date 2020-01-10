// Currying

function add(x) {
  return function(y) {
    return x + y;
  };
}

const addThree = add(3);
console.log(addThree(4));
console.log(addThree(6));
console.log(addThree(30));

const add2 = x => y => x + y;
const addTwo = add2(2);
console.log("addTwo(2) :", addTwo(2));

// Arity
// 1. Unary
// 2. Binary
// 3. Ternary
// 4. Quartery
