// main.js

// Returns a random integer from 0 to num - 1
function random(num) {
  return Math.floor(Math.random() * num);
}

// Returns a random item from a given array
function getRandomListEntry(list) {
  return list[random(list.length)];
}

// Returns HTML string for tags list items
function tagsTemplate(tags) {
  if (!tags || tags.length === 0) return '';
  return tags
    .map(
      (tag) =>
        `<li class="recipe__tag">${tag.charAt(0).toUpperCase() + tag.slice(1)}</li>`
    )
    .join('');
}

// Returns HTML string for rating stars with accessibility info
function ratingTemplate(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else if (i === fullStars + 1 && halfStar) {
      html += `<span aria-hidden="true" class="icon-star-half">⭐</span>`; // Optional half star styling
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

// Returns full recipe card HTML string for one recipe object
function recipeTemplate(recipe) {
  return `
  <figure class="recipe-card">
    <img src="${recipe.image}" alt="Image of ${recipe.name}" />
    <figcaption>
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>
      <h2><a href="${recipe.url || '#'}">${recipe.name}</a></h2>
      <p class="recipe__ratings">
        ${ratingTemplate(recipe.rating || 0)}
      </p>
      <p class="recipe__description">${recipe.description}</p>
      <p class="recipe__meta">
        ${recipe.recipeYield || ''} &bull; Prep time: ${recipe.prepTime || 'N/A'}
      </p>
    </figcaption>
  </figure>
  `;
}

// Renders given list of recipes to the page
function renderRecipes(recipeList) {
  const container = document.querySelector('.recipes');
  if (!container) return;
  if (!recipeList || recipeList.length === 0) {
    container.innerHTML = '<p>No recipes found.</p>';
    return;
  }
  container.innerHTML = recipeList.map(recipeTemplate).join('');
}

// Filters recipes based on query matching name, description, tags, or ingredients
function filterRecipes(query) {
  if (!query) return recipes.slice(); // return all if empty query

  const lowerQuery = query.toLowerCase();

  return recipes
    .filter((recipe) => {
      const inName = recipe.name.toLowerCase().includes(lowerQuery);
      const inDesc = recipe.description.toLowerCase().includes(lowerQuery);
      const inTags =
        recipe.tags && recipe.tags.find((tag) => tag.toLowerCase().includes(lowerQuery));
      const inIngredients =
        recipe.recipeIngredient &&
        recipe.recipeIngredient.find((ing) => ing.toLowerCase().includes(lowerQuery));

      return inName || inDesc || inTags || inIngredients;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

// Handles search form submission, filtering recipes accordingly
function searchHandler(event) {
  event.preventDefault();
  const input = document.querySelector('form input[type="text"]');
  if (!input) return;
  const query = input.value.trim().toLowerCase();
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

// Initializes page: shows one random recipe and sets up search event listener
function init() {
  renderRecipes([getRandomListEntry(recipes)]);

  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', searchHandler);
  }
}

document.addEventListener('DOMContentLoaded', init);
