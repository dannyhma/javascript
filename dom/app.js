// const h1 = document.querySelector('h1');

// for (let heading of headings) {
//   heading.style.color = "blue";
// }

// h1.getAttribute('class');
// h1.setAttribute('class', 'bg-info');

// let currentClass = h1.getAttribute('class');
// h1.setAttribute('class', `${currentClass} border-danger`);

// h1.classList.remove('border-danger');
// h1.classList.add('test');

const p = document.querySelector('p');
// p.innerText = 'lorem lorem lorem';
p.append('<b>test</b>');

const h2 = document.createElement('h2');
h2.append('Test createelement dan afterend');

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2);

// h2.parentElement;
// h2.parentElement.removeChild(h2);

h2.remove();
