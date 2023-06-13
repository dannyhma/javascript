// Regular function

// function declaration
// function sayHello(greet) {
//     console.log(`${greet}!`);
// }
   
// function expression
// const sayName = function (name) {
//     console.log(`Nama saya ${name}`)
// }


// Arrow function
// function expression
// const sayHello = (greet) => {
//     console.log(`${greet}!`)
//  }
   
// const sayName = (name) => {
//     console.log(`Nama saya ${name}`)
// }

// const sayName = name => {
//     console.log(`Nama saya ${name}`)
// }
  
// sayName("Leia");

// const sayHello = () => {
//     console.log("Selamat pagi semuanya!")
// };
  
// sayHello();

const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));