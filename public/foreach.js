// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// angka.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

const animes = [
  {
    title: 'Attack on Titan',
    rating: 82,
  },
  {
    title: 'One Piece',
    rating: 95,
  },
  {
    title: 'Naruto',
    rating: 93,
  },
  {
    title: 'Bleach',
    rating: 85,
  },
];

animes.forEach(function (anime) {
  if (anime.rating >= 90) {
    console.log(`${anime.title} - ${anime.rating}/100`);
  }
});
