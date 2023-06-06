let myArray = ["Cokelat", 43.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

myArray.push('Javascript');
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.shift();        
myArray.unshift("Apple");
console.log(myArray);

// delete myArray[1];      // Menghapus index 2
// console.log(myArray);

myArray.splice(2, 1);   // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);


const month = ['January', 'March', 'April', 'May'];
console.log('before splice: ', month);

month.splice(1, 0, 'February');
console.log('after splice: ', month);

/* output:
[ 'Cokelat', 43.5, 22, true, 'Programming' ]
Cokelat
43.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
[ 'Cokelat', 43.5, 22, true, 'Programming', 'Javascript' ]
[ 'Cokelat', 43.5, 22, true, 'Programming' ]
[ 'Apple', 43.5, 22, true, 'Programming' ]
[ 'Apple', 43.5, true, 'Programming' ]
before splice:  [ 'January', 'March', 'April', 'May' ]
after splice:  [ 'January', 'February', 'March', 'April', 'May' ]
*/