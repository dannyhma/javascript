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

const animeRating = animes.filter((anime) => {
  return anime.rating >= 90;
});

console.log('Judul anime rating bagus :');
animeRating.forEach((anime) => {
  console.log(`${anime.title} - Rating ${anime.rating}/100`);
});

const judulAnime = animeRating.map((anime) => anime.title);
console.log('Judul anime bagus :');
console.log(judulAnime.join('\n'));
