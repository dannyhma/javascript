// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext();
//   }, delay);
// };

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000));

const colorSequence = ['red', 'yellow', 'green', 'blue'];

const repeatColorChange = (index) => {
  if (index < colorSequence.length) {
    delayedColorChange(colorSequence[index], 2000).then(() =>
      repeatColorChange(index + 1)
    );
  } else {
    repeatColorChange(0);
  }
};

repeatColorChange(0);
