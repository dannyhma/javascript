// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.getElementById("container"); // ambil element berdasarkan id
const baseImgURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; // ambil image

// lakukan perulangan
for (let i = 1; i <= 1000; i++) {
  const pokeBall = document.createElement("div"); // buat element div simpan ke pokeBall
  pokeBall.classList.add("pokemon"); // buat class untuk div

  const imgPokemon = document.createElement("img"); // buat element img simpan ke imgPokemon
  imgPokemon.src = `${baseImgURL}${i}.png`; // simpan source image ke imgPokemon

  const label = document.createElement("span"); // buat element label simpan ke label
  label.innerText = `#${i}`; // simpan perulangan ke label

  pokeBall.appendChild(imgPokemon); // tampilkan image di div
  pokeBall.appendChild(label); // tampilkan label di div
  container.appendChild(pokeBall); // tampilkan div di container
}
