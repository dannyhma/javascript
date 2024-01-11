const jokes = document.getElementById('jokes');
const button = document.getElementById('generate');

const addJoke = async () => {
  const jokeText = await getJokes();
  const newLi = document.createElement('li');
  newLi.append(jokeText);
  jokes.append(newLi);
};

const getJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (err) {
    return 'No Jokes Available!';
  }
};

button.addEventListener('click', addJoke);
