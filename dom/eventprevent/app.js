const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submitted form');
});

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('harusnya ke google');
});
