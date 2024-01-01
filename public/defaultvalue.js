function lemparDadu(sisi = 6) {
  return Math.floor(Math.random() * sisi) + 1;
}
console.log(lemparDadu());

function sapa(name = 'Danny', msg = 'Selamat bekerja') {
  return `${name} ${msg}`;
}
console.log(sapa());
