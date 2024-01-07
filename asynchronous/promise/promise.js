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

// requestPromise('movie.com')
//   .then((response) => {
//     console.log('Success', response);
//     requestPromise('movie.com')
//       .then((response) => {
//         console.log('Success', response);
//         requestPromise('movie.com')
//           .then((response) => {
//             console.log('Success', response);
//           })
//           .catch((error) => {
//             console.log('Error', error);
//           });
//       })
//       .catch((error) => {
//         console.log('Error', error);
//       });
//   })
//   .catch((error) => {
//     console.log('Error', error);
//   });

requestPromise('movie.com')
  .then((response) => {
    console.log('Page 1');
    console.log(response);
    return requestPromise('movie.com');
  })
  .then(() => {
    console.log('Page 2');
    return requestPromise('movie.com');
  })
  .then(() => {
    console.log('Page 3');
    return requestPromise('movie.com');
  })
  .catch((err) => {
    console.log(err);
  });
