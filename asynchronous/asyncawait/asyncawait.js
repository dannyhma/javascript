const hello = async () => {
  // return 'Hello, world!';
  throw 'Maaf tidak kenal';
};

hello()
  .then((res) => {
    console.log('response', res);
  })
  .catch((err) => {
    console.log('error', err);
  });
