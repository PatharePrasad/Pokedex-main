import data from './data.json';

const inputEl = document.querySelector('input');
const rowEl = document.querySelector('#row');

for (let pokemonObj of data) {
  // Craete Paragraph
  const div = document.createElement('div');
  // Add content inside div
  div.classList.add('col');

  div.innerHTML = `
  <div class="card">
        <img
          src=${pokemonObj.image}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${pokemonObj.name}</h5>
          <p class="card-text">
            ${pokemonObj.description}
          </p>
        </div>
  `;

  rowEl.appendChild(div);
}

function renderPokemonsList(list) {}

// Log the input element
document.addEventListener('keypress', function (event) {
  if (event.key === '/') {
    event.preventDefault(); // exclude (/) - don't write it
    inputEl.focus();
  }
});
