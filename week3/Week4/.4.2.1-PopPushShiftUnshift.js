console.log(str.)
const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let Return1 = nums.pop() // 0
let Return2 = nums.pop() // 1
// remove each of the first two items with shift(), saving each item to a variable
let Return3 = nums.shift() // 6
let Return4 = nums.shift() // 5

console.log(nums); // [2,3,4]
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(return4,return3); // [2,3,4,5,6]
nums.push(return2, return1); // [0,1,2,3,4,5,6]
