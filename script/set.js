// const numberSet = new Set([1, 4, 6, 4, 1]);

// console.log(numberSet);

const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(1);

console.log(numberSet);
