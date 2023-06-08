/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

// Tulis kode di bawah ini

const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500],
 ]);


const priceInIDR = priceInJPY * (currency.get("JPY"));

console.log(priceInIDR);

const phoneticAlphabet = ["Alpha", "Bravo", "Delta"];

// TODO: Kode untuk menambahkan item Charlie pada index ke-2

// phoneticAlphabet.shift();        
// phoneticAlphabet.unshift("Charlie");

phoneticAlphabet.splice(2, 0, "Charlie");
console.log(phoneticAlphabet);

// const artistsAndSongs = {
//     "Keyakizaka46": ["Silent Majority"],
//     "Blackpink": ["How You Like That", "Ice Cream"],
//     "JKT48": ["Rapsodi", "Heavy Rotation"],
//     "Twice": ["What is Love?"],
// }

// artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

// delete artistsAndSongs["Keyakizaka46"];

// console.log(artistsAndSongs);

// const capital = {
//     "Jakarta": "Indonesia",
//     "London": "England",
//     "Tokyo": "Japan"
// }
// capital["New Delhi"] = "Indonesia";

// console.log(capital["Indonesia"]);