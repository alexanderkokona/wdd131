const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description: "If you enjoy stories...",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "****"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description: "The anticipated new novel...",
    imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "⭐⭐⭐⭐"
  },
  {
  id: 3,
  title: "Belgariad Book One: Pawn of Prophecy",
  date: "Feb 12, 2022",
  description: "A fierce dispute among the Gods...",
  imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
  imgAlt: "Book cover for Pawn of Prophecy",
  ages: "12-16",
  genre: "Fantasy",
  stars: "⭐⭐⭐⭐⭐"

  }
];

const container = document.querySelector('#reviews-container');

function renderArticle(item) {
  const article = document.createElement('article');
  article.classList.add('review');

  const template = `
    <div class="review-meta">
      <p>${item.date}</p>
      <p>${item.ages}</p>
      <p>${item.genre}</p>
      <p>${item.stars}</p>
    </div>
    <div class="review-content">
      <h2>${item.title}</h2>
      <img src="${item.imgSrc}" alt="${item.imgAlt}" />
      <p>${item.description}</p>
    </div>
  `;

  article.innerHTML = template;
  container.appendChild(article);
}

articles.forEach(renderArticle);