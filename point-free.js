// Pointfree programming

const array = [1, 2, 3];
const double = x => x * 2;
array.map(double);

// Benefits:
// Legibility
// Reduce surface area for bugs
// Unit test our named functions
