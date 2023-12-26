// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
 
// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);
 
// const [, , thirdFood ] = favorites;
 
// console.log(thirdFood);

// Destructuring Assignment
// let myFood = "Ice Cream";
// let herFood = "Noodles";
 
// [myFood, herFood] = favorites;

// console.log(myFood);
// console.log(herFood);

// menukar nilai antara dua variabel
// var a = 1;
// var b = 2;
// var temp;

// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// temp = a;
// a = b;
// b = temp;

// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// array destructuring assignment
let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// Default Values
const favorites = ["Seafood"];
const [myFood, herFood = "Salad"] = favorites;

console.log(myFood);
console.log(herFood);