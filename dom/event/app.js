const button = document.getElementById('clickme');

button.onclick = () => {
  console.log('You clicked me');
};

const scream = () => {
  console.log('Dont touch me');
};

button.onmouseover = scream;

const eventbtn = document.getElementById('eventbtn');

eventbtn.addEventListener('click', () => {
  alert('test addEventListener');
});

const btn = document.getElementById('btn');

btn.addEventListener('click', stepSatu);
btn.addEventListener('click', stepDua);

function stepSatu() {
  console.log('Step Satu');
}

function stepDua() {
  console.log('Step Dua');
}

// btn.onclick = stepSatu;
// btn.onclick = stepDua;
