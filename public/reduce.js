const subTotal = [2000, 2000, 2000, 2000, 2000];
const total = subTotal.reduce((currentTotal, singleSubTotal) => {
  return currentTotal + singleSubTotal;
});

console.log(total);

const examScore = [80, 85, 79, 90, 93, 77, 95];
// let defaultScore = 0;
// for (let scores of examScore) {
//   defaultScore += scores;
// }

// console.log(defaultScore);

const defaultScore = examScore.reduce((currentScore, singleScore) => {
  return currentScore + singleScore;
});

console.log(defaultScore);

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

const bestAnime = animes.reduce((currentRating, singleRating) => {
  console.log(currentRating, singleRating);
  if (singleRating.rating > currentRating.rating) {
    return singleRating;
  }
  return currentRating;
});

console.log(bestAnime);
