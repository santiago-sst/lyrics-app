const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

//search by song or artist

async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  console.log(data);
}

// Event listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('type someting....');
  } else {
    searchSongs(searchTerm);
  }
});
