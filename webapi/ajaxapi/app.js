// const req = new XMLHttpRequest();
// let data;

// req.onload = function () {
//   data = JSON.parse(this.responseText);
//   console.log(data);
// };

// req.onerror = function () {
//   console.log('Error', this);
// };

// req.open('GET', 'https://swapi.dev/api/people/2', true);
// req.setRequestHeader('Accept', 'application/json');
// req.send();

// fetch('https://swapi.dev/api/people/1')
//   .then((res) => {
//     if (!res.ok) {
//       throw Error('Could not fetch the data for resource');
//     }
//     // console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log('json 1', data);
//     return fetch('https://swapi.dev/api/people/2');
//   })
//   .then((res) => {
//     console.log('request 2');
//     if (!res.ok) {
//       throw Error('Could not fetch the data for resource');
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log('json 2', data);
//   })
//   .catch((err) => {
//     console.log('error', err);
//   });

// const loadPeople = async () => {
//   try {
//     const res = await fetch('https://swapi.dev/api/people/1');
//     console.log('request 1');
//     const data = await res.json();
//     console.log(data);

//     const res2 = await fetch('https://swapi.dev/api/people/2');
//     console.log('request 2');
//     const data2 = await res2.json();
//     console.log(data2);
//   } catch (err) {
//     console.log('error', err);
//   }
// };

// loadPeople();

// axios
//   .get('https://swapi.dev/api/people/1')
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const getPeople = async (ids) => {
  try {
    // const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    // console.log(res.data);

    // Menggunakan Promise.all untuk mengambil beberapa data secara bersamaan
    const responses = await Promise.all(
      ids.map(
        async (id) => await axios.get(`https://swapi.dev/api/people/${id}`)
      )
    );

    // Menggunakan map untuk mendapatkan data dari masing-masing respons
    const data = responses.map((response) => response.data);

    console.log(data);
  } catch (err) {
    // console.log(err);
    // console.log(err.message);
    // console.log(err.response.status);
    // console.log(err.response.data);

    console.error('Error:', err.message);
    if (err.response) {
      console.error('Status Code:', err.response.status);
      console.error('Response Data:', err.response.data);
    }
  }
};

// getPeople(1);
const characterIds = [1, 2, 3, 4, 5];
getPeople(characterIds);
