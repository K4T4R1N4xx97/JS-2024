"use strict";

// Funkcija za dohvaćanje podataka s iTunes search stranice
async function fetchSongs(term) {
    try {
        const response = await fetch(`https://itunes.apple.com/search?term=${term}&country=us&entity=song`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Greška prilikom dohvaćanja podataka:', error);
        return [];
    };
};

// Funkcija za ispisivanje rezultata
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Očisti prethodne rezultate
    if (results.length === 0) {
        resultsDiv.textContent = 'Nema rezultata za traženi pojam.';
    } else {
        results.forEach((song, index) => {
            const divs = document.createElement('div');
            divs.textContent = `${song.trackName} - ${song.artistName}`;
            resultsDiv.appendChild(divs);
        }); 
    };
};

// Funkcija za pretraživanje
async function search() {
    const searchInput = document.getElementById('searchInput');
    const term = searchInput.value.trim();
    if (term === '') {
        alert('Molimo unesite termin za pretragu.');
        return;
    };
    
    const results = await fetchSongs(term);
    displayResults(results);
};