const h1 = document.querySelector('h1');

// for (let heading of headings) {
//   heading.style.color = "blue";
// }

h1.getAttribute('class');
h1.setAttribute('class', 'bg-info');

let currentClass = h1.getAttribute('class');
h1.setAttribute('class', `${currentClass} border-danger`);

h1.classList.remove('border-danger');
h1.classList.add('test');
