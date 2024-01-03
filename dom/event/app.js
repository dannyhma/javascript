const button = document.getElementById('clickme');

button.onclick = () => {
  console.log('You clicked me');
};

const scream = () => {
  console.log('Dont touch me');
};

button.onmouseover = scream;
