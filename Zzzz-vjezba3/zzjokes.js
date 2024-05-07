const searchInput = document.getElementById('searchInput');
const loader = document.getElementById('loader');
const resultsDiv = document.getElementById('results');

async function fetchAndDisplayResults(searchTerm) {
  loader.style.display = 'block';
  try {
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&entity=song`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    loader.style.display = 'none';
    if (data.results.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
      return;
    }
    const songs = data.results.map(song => `<p>${song.trackName} by ${song.artistName}</p>`);
    resultsDiv.innerHTML = songs.join('');
  } catch (error) {
    console.log("error", error);
  }
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === '') {
    resultsDiv.innerHTML = '';
    return;
  }
  fetchAndDisplayResults(searchTerm);
});