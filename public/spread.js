// const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
// const others = ['Cake', 'Pie', 'Donut'];

// const allFavorites = [...favorites, ...others];
// console.log(allFavorites);

// const obj1 = { firstName: 'Obi-Wan', age: 30 };
// const obj2 = { lastName: 'Kenobi', gender: 'M' };

// const newObj = { ...obj1, ...obj2 };
// console.log(newObj);

// const angka = [1, 2, 3, 4, 5];

// const max = Math.max(...angka);
// console.log(max);

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const name = ['Alexander', 'John', 'Doe', 'Thomas', 'George', 'Smith', 'Jeff'];

// const numName = [...name, ...number];
// console.log(numName);

// const user = {
//   name: 'John',
//   email: 'john@example.com',
// };

// const credentials = {
//   password: 'password',
//   token: 'dadfajfoaj34014910fkaffakf123',
// };

// const newUser = { ...user, ...credentials, role: 'Admin' };
// console.log(newUser);

// const sumAll = (...nums) => {
//   return nums.reduce((total, el) => total + el);
// };

// console.log(sumAll(1, 2, 3, 4, 5, 6));

// function sumAll(...nums) {
//   let total = 0;
//   for (let n of nums) total += n;
//   return total;
// }

// console.log(sumAll(1, 2, 3, 4));

// const name = ['Alexander', 'John', 'Doe', 'Thomas', 'George', 'Smith', 'Jeff'];

// const winner = (gold, silver, bronze, ...peserta) => {
//   console.log(`Gold: ${gold}`);
//   console.log(`Silver: ${silver}`);
//   console.log(`Bronze: ${bronze}`);
//   console.log(`Peserta: ${peserta}`);
// };

// winner(...name);

// const [gold, silver, bronze, ...peserta] = name;

// console.log(`Gold: ${gold}`);
// console.log(`Silver: ${bronze}`);
// console.log(`Bronze: ${silver}`);
// console.log(`Peserta: ${peserta}`);

// const peserta = ['Batman', 'Ironman', 'Spiderman', 'Superman'];
// const [satu, dua, tiga] = peserta;

// const [juara, ...sisa] = peserta;
// console.log(`Juara: ${juara}`);
// console.log(`Peserta: ${sisa}`);

const user = {
  name: 'John',
  email: 'john@example.com',
  password: 'password',
};

const { name: nama, email, password, phone = '08123456789' } = user;

console.log(`Nama: ${nama}`);
console.log(`Phone: ${phone}`);
