// const hello = async () => {
//   // return 'Hello, world!';
//   throw 'Maaf tidak kenal';
// };

// hello()
//   .then((res) => {
//     console.log('response', res);
//   })
//   .catch((err) => {
//     console.log('error', err);
//   });

const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Error: Connection Timeout');
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

async function requestHandler() {
  try {
    let result = await requestPromise('movie.com');
    console.log('result', result);
  } catch (err) {
    console.log('error', err);
  }
}
requestHandler();
