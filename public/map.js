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

const animeList = animes.map(function (anime) {
  return `${anime.title.toUpperCase()} - ${anime.rating}`;
});

console.log(animeList);
