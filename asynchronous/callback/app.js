const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Error: Connection Timeout');
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

requestCallback(
  'movie.com',
  function (response) {
    console.log('Success', response);
    requestCallback(
      'movie.com',
      function (response) {
        console.log('Success', response);
        requestCallback(
          'movie.com',
          function (response) {
            console.log('Success', response);
          },
          function (error) {
            console.log('Error', error);
          }
        );
      },
      function (error) {
        console.log('Error', error);
      }
    );
  },
  function (error) {
    console.log('Error', error);
  }
);
