// Side effects on impure functions

// Pure function: f(x) = x + 1
const f = x => x + 1;

// Ex 1 - global state
const ITEM_COST = 12;
const cartTotal = quantity => quantity * ITEM_COST;

// impure since, below fn print the same value with the same inputs but if we change the ITEM_COST value the result of the function changes
console.log("cartTotal(2) :", cartTotal(2));
console.log("cartTotal(2) :", cartTotal(2));

// Ex 2 - Same input, different output
const generateID = () => Math.floor(Math.random() * 10000);

// impure, every time we run the fn it prints a different result
console.log(generateID());
console.log(generateID());
console.log(generateID());

const createUser = (name, age) => ({
  id: generateID(),
  name,
  age
});

// Id of every user is different
console.log("createUser() :", createUser("Arturo", 34));
console.log("createUser() :", createUser("Arturo", 34));

// Ex. 3 - Side effects
let id = 0;
const createFoodItem = name => ({
  id: ++id,
  name
});

console.log("createFoodItem(Quesadilla) :", createFoodItem("Quesadilla"));
console.log("createFoodItem(Taco) :", createFoodItem("Taco"));
console.log("createFoodItem(Guacamole) :", createFoodItem("Guacamole"));

// Ex. 4 Side effects #2
const logger = value => console.log(value);
logger(1);
logger("Arturo");
