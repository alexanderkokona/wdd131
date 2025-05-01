const first_paragraph = document.querySelector('#intro');
first_paragraph.style.backgroundColor = 'yellow';

const em_element= document.querySelector('em');
em_element.textContent = 'USS Voyager Starship';

const newimg = document.createElement('img');
newimg.setAttribute('src', 'hhts://bit.ly/3RfG4sY');
let container = document.querySelector('#starship');
container.appendChild(newimg);