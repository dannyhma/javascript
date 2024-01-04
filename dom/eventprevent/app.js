const form = document.getElementById('form');
const input = document.querySelector('input');
const list = document.getElementById('notes');

// input.addEventListener('change', (e) => {
//   console.log('Nilai Berubah');
// });

input.addEventListener('input', (e) => {
  document.querySelector('h3').innerText = input.value;
  console.log('Nilai Berhasil Diinput');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement('li');
  newList.innerText = noteValue;
  list.append(newList);
  input.value = '';
});

// const link = document.querySelector('a');
// link.addEventListener('click', (e) => {
//   e.preventDefault();
//   console.log('harusnya ke google');
// });
