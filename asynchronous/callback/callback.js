// console.log('Pertama');
// setTimeout(() => {
//   console.log('3 Detik');
// }, 3000);
// console.log('Kedua');

// setTimeout(function () {
//   document.body.style.backgroundColor = 'red';
//   setTimeout(function () {
//     document.body.style.backgroundColor = 'yellow';
//   }, 1000);
// }, 1000);

serchMovieApi(
  'naruto',
  function (movies) {
    saveToMyDb(
      movies,
      function () {
        // kalau berhasil simpan
        filteringMovie(
          movies,
          () => {},
          () => {}
        );
      },
      () => {
        // kalau gagal coba lagi
      }
    );
  },
  () => {
    // server error coba lagi
  }
);
