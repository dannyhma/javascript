// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}. Soal nomor ${i}:`);

//   const pilihan = "abcde";
//   const animals = ["Burung", "Ayam", "Ikan", "Bebek", "Kambing"];
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(`${pilihan[j]}. ${animals[j]}`);
//   }

//   console.log("");
// }

// const studentRow = [
//   ["Danny", "Himawan", "King"],
//   ["Dziky", "Andrian", "Dzukik"],
//   ["TheKing", "D", "Lozer"],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   // console.log(row);
//   console.log(`Seat row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }

// let num = 0;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

// const PASSWORD = "pass123";

// let guess = prompt("enter the password");
// while (guess !== PASSWORD) {
//   guess = prompt("enter the password");
// }

// alert("congrats! the password is correct");

// let input = prompt("Hei, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop") break;
// }

// alert("ok");

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// for (let fruit of fruits) {
//   console.log(`Buah ${fruit}`);
// }

// const studentRow = [
//   ["Danny", "Himawan", "King"],
//   ["Dziky", "Andrian", "Dzukik"],
//   ["TheKing", "D", "Lozer"],
// ];

// for (let [index, row] of studentRow.entries()) {
//   // console.log(row);
//   console.log(`Seat row #${index + 1}`);
//   for (let students of row) {
//     console.log(`   ${students}`);
//   }
// }

const students = {
  Olivia: 20,
  Liam: 13,
  Emma: 40,
  Noah: 18,
};

// for (let student in students) {
//   console.log(`${student} memiliki skor ${students[student]}`);
// }

// let total = 0;
// let scores = Object.values(students);
// for (let [name, score] of Object.entries(students)) {
//   total += score;
//   console.log(`${name}: ${score}`);
// }

// console.log("Average score:", total / scores.length);

function lamarKerja() {
  const jabatan = "Programmer";

  function orangDalam() {
    let kenalan = `Orang dalam bisa menjadi ${jabatan}`;
    console.log(kenalan);
  }

  orangDalam();
}

lamarKerja();
