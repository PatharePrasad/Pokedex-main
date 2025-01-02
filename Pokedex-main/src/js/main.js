// Import data
import data from './data.json';

const inputEl = document.querySelector('input');
const rowEl = document.querySelector('#row');

// Function to render Pokémon list
function renderPokemonsList(list) {
  // Clear the current list
  rowEl.innerHTML = '';
  
  // Loop through the filtered Pokémon list and display them
  for (let pokemonObj of list) {
    const div = document.createElement('div');
    div.classList.add('col');

    div.innerHTML = `
      <div class="card">
        <img
          src=${pokemonObj.image}
          class="card-img-top"
          alt="${pokemonObj.name}"
        />
        <div class="card-body">
          <h5 class="card-title">${pokemonObj.name}</h5>
          <p class="card-text">
            ${pokemonObj.description}
          </p>
        </div>
      </div>
    `;

    rowEl.appendChild(div);
  }
}

// Initial render of all Pokémon
renderPokemonsList(data);

// Event listener for search input
inputEl.addEventListener('input', function () {
  const searchTerm = inputEl.value.toLowerCase();

  // Filter the Pokémon based on the search term
  const filteredList = data.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  // Render the filtered list
  renderPokemonsList(filteredList);
});

// Focus input on '/' key press
document.addEventListener('keypress', function (event) {
  if (event.key === '/') {
    event.preventDefault(); // Prevent '/' from being typed
    inputEl.focus();
  }
});
