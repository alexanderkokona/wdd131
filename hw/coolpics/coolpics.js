const button = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('hide');
});

const gallery = document.querySelector('.gallery');

const modal = document.createElement('dialog');
modal.innerHTML = `
  <img src="" alt="full-img">
  <button class="close-viewer">X</button>
`;
modal.classList.add('image-modal');
document.body.appendChild(modal);

const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', (event) => {
    const img = event.target.closest('img');

    if (!img) return; // Prevent errors when clicking non-image elements

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');

    const full = src.split('-')[0] + '-full.jpeg';

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
});

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
