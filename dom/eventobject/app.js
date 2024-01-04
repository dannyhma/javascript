const button = document.querySelector('button');

button.addEventListener('click', (e) => {
  console.log(e);
});

const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
  //   console.log(e.key);
  //   console.log(e.code);
  switch (e.code) {
    case 'ArrowUp':
      console.log('Tobol Atas');
      break;
    case 'ArrowDown':
      console.log('Tobol Bawah');
      break;
    case 'ArrowRight':
      console.log('Tobol Kanan');
      break;
    case 'ArrowLeft':
      console.log('Tobol Kiri');
      break;
    default:
      console.log('Diabaikan');
  }
});

// input.addEventListener('keyup', () => {
//   console.log('Tombol dirilis!');
// });
