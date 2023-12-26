// lexical scope

// function init(){
//      const name = 'Danny Himawan'; // Variabel lokal di dalam scope fungsi init

//      function greet(){ // Inner function, merupakan contoh closure
//         console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
//      }

//      greet();
// }

// init();

function init(){
   const name = 'Obi Wan';

   function greet(){
      console.log(`Halo, ${name}`);
   }

   return greet;
}

const myFunction = init();
myFunction();

// let counter = 0;

// const add = () => {
//   return ++counter;
// }

// console.log(add());
// console.log(add());
// counter = 23;
// console.log(add());

const add = () => {
  let counter = 0;
    return () => {
      return ++counter;
  };
}

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());