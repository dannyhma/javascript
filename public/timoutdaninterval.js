// console.log('1');
// setTimeout(() => {
//   console.log('test setTimeout');
// }, 5000);
// console.log('2');

console.log('1');
const interval = setInterval(() => {
  console.log(Math.random() * 10);
}, 5000);
clearInterval(interval);
console.log('2');
