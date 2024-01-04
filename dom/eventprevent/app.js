const form = document.getElementById('form');
const input = document.querySelector('input');
const list = document.getElementById('notes');

form.addEventListener('submit', function (e) {
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
