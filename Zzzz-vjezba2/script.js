const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const statusMessageDiv = document.getElementById("statusMessage");

// Funkcija za dohvaćanje podataka s iTunes Search API-ja
async function searchiTunes(term) {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Došlo je do pogreške prilikom dohvaćanja podataka:', error);
        return [];
    }
}

// Funkcija za ispis poruke o stanju
function printStatusMessage(message) {
    statusMessageDiv.textContent = message;
}

// Funkcija za prikaz rezultata
function displayResults(results) {
    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>Nema rezultata za traženi termin.</p>";
    } else {
        const listItems = results.map((result, index) => {
            return `<li>${index + 1}. ${result.trackName} - ${result.artistName}</li>`;
        });
        resultsDiv.innerHTML = `<ul>${listItems.join("")}</ul>`;
    }
}

// Funkcija za pretraživanje i prikaz rezultata
async function searchAndDisplayResults(term) {
    printStatusMessage('Pretražujem podatke...');
    const results = await searchiTunes(term);
    displayResults(results);
}

// Event listener za promjenu unosa u input polje
searchInput.addEventListener("input", (e) => {
    const term = e.target.value.trim();
    if (term.length > 0) {
        searchAndDisplayResults(term);
    } else {
        resultsDiv.innerHTML = "";
        printStatusMessage("");
    }
});