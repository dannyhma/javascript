const form = document.getElementById('search-form');
const images = document.getElementById('images');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  document
    .querySelectorAll('#images img, #images p, #images div')
    .forEach((element) => element.remove());
  const keyword = form.elements.query.value;
  const config = {
    params: {
      q: keyword,
    },
  };
  const res = await axios.get('http://api.tvmaze.com/search/shows', config);
  getImages(res.data);
  form.elements.query.value = '';
});

const getImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      // Create a new div element
      const containerDiv = document.createElement('div');

      // Create image element
      const img = document.createElement('img');
      img.src = result.show.image.medium;

      // Create element for show name
      const nameElement = document.createElement('p');
      nameElement.textContent = result.show.name;

      // Append image and name elements to the container div
      containerDiv.append(img, nameElement);

      // Append the container div to the images container
      images.append(containerDiv);
    }
  }
};
