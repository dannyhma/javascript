const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
const others = ['Cake', 'Pie', 'Donut'];

const allFavorites = [...favorites, ...others];
console.log(allFavorites);

const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };
console.log(newObj);

const angka = [1, 2, 3, 4, 5];

const max = Math.max(...angka);
console.log(max);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const name = ['Alexander', 'John', 'Doe', 'Thomas', 'George', 'Smith', 'Jeff'];

const numName = [...name, ...number];
console.log(numName);
