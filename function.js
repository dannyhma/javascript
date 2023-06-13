// Parameter merupakan variabel yang didefinisikan sebagai input dari sebuah fungsi.
function multiply(a, b) {
    return a * b;
}

// Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi
let result = multiply(10, 2)
console.log(result)

// function greeting() {
//     console.log("Good Morning!")
// }
  
// greeting();
  
/* output
Good Morning!
*/

// Parameter & Argument

// function greeting(name, language) {
//     if(language === "English") {
//       console.log(`Good Morning ${name}!`);
//     } else if (language === "French") {
//       console.log(`Bonjour ${name}!`);
//     } else if (language === "Indonesia") {
//         console.log(`Halo ${name}!`);
//     }else {
//       console.log(`Selamat Pagi ${name}!`);
//     }
// }

// greeting("Danny", "Indonesia");

// function greeting(name, language) {
//     if(language === "English") {
//       return `Good Morning ${name}!`;
//     } else if (language === "French") {
//       return `Bonjour ${name}!`;
//     } else {
//       return `Selamat Pagi ${name}!`;
//     }
// }
  
// let greetingMessage = greeting("Harry", "French");
// console.log(greetingMessage);

// Expression Function

const greeting = function(name, language) {
    if(language === "English") {
      return "Good Morning " + name + "!";
    } else if (language === "French") {
      return "Bonjour " + name + "!";
    } else {
      return "Selamat Pagi " + name + "!";
    }
}
  
console.log(greeting('Ron', 'English'));