const kataKata = ['kita', 'kamu', 'saya', 'dia'];
// const isKata = kataKata.every((kata) => {
//   return kata.length === 4;
// });
const isKata = kataKata.some((kata) => {
  return kata.length === 4;
});

console.log(isKata);

const examScore = [80, 85, 79, 90, 93, 77, 95];
const isGraduate = examScore.every((score) => score >= 75);
console.log(isGraduate);

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

const isAnimeListRate = animes.some((anime) => anime.rating >= 100);
console.log(isAnimeListRate);
