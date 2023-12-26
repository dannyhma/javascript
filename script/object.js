// const user = {
//     firstName: "Danny",
//     lastName: "Himawan",
//     age: 22,
//     isJedi: true,
//     "home world": "Indonesia"
// };

// console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
// console.log(`Umur saya ${user.age} tahun`);
// console.log(`Saya berasal dari ${user["home world"]}`);

/* output
Halo, nama saya Danny Himawan
Umur saya 22 tahun
Saya berasal dari Indonesia
*/

const spaceship = {
    name: "Danny Himawan",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};

spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.class = "Light freighter";
delete spaceship.manufacturer;
console.log(spaceship);

/* output
{
  name: 'Danny Himawan',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
 */