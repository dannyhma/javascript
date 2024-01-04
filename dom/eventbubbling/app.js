const button = document.getElementById('changeColor');
const container = document.getElementById('container');
const view = document.getElementById('view');

button.addEventListener('click', (e) => {
  container.style.backgroundColor = generateRandomColor();
  e.stopPropagation();
});

container.addEventListener('click', () => {
  container.classList.toggle('hide');
});

view.addEventListener('click', () => {
  container.classList.toggle('show');
});

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r}, ${g}, ${b})`;
};
