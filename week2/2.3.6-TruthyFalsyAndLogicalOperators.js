// Logical Operators
// what do you expect each line to print?
console.log(true && false);//false
console.log(true || false);//true
console.log(!true);//false
console.log(!(true && false));//false
console.log(false || !false);//true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log("" && 0);
console.log(undefined || null);
console.log(!``);//true
console.log(!(1 && "false"));
console.log(NaN || !"true");

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age;
if (age > 100 ){
console.log("Full Menu");
} else {
  console.log
}
// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;
if(!num){
console.log("The number is zero");
}
// Write your if statement here *
