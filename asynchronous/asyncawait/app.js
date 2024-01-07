const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function changeColor() {
  await delayedColorChange('red', 2000);
  await delayedColorChange('blue', 2000);
  await delayedColorChange('yellow', 2000);
  await delayedColorChange('green', 2000);
  return 'All Done';
}

changeColor().then((res) => alert(res));

// async function printRainbow() {
//   await changeColor();
//   console.log('All Done Dari printRainbow');
// }

// printRainbow();
