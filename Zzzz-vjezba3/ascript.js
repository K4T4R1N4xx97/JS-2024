"use strict";

const inputDiv = document.getElementById("inputDiv");
const resultsDiv = document.getElementById("resultsDiv");

const catchiTunes = async (song) => {
    try{
        const res = await fetch(`https://itunes.apple.com/search?term=${song}&indie&entity=song`);
        if (!res.ok) {
            console.log("Something went wrong");
        };

        const data = await res.json();
        if (data.results.length === 0){
            resultsDiv.innerHTML = `<p>There are no results.</p>`;
            return;
        };

        const songsHTML = data.results.map(song => `<p>${song.artistName} - ${song.trackName}</p>`);
        resultsDiv.innerHTML = songsHTML.join("");

    } catch (error) {
        console.log("Something went wrong", error);
    };
};

inputDiv.addEventListener("input", () => {
    const song = inputDiv.value.trim();
    if(song === ""){
        song.innerHTML = "";
        return;
    }
    catchiTunes(song);
});