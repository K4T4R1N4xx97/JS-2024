"use strict";

const searchInput = document.getElementById("search");
const songDivs = document.getElementById("songDivs");

const catchiTunes = async (term) => {
    try{
    const res = await fetch(`https://itunes.apple.com/search?term=${term}&indie&entity=song`);
    if(!res.ok){
        console.log("Something went wrong.");
    }; 
    const data = await res.json();

    if(data.results.length === 0){
        alert("Nothing to search!");
        return;
    };

    data.forEach((song) => {
        const songs = document.createElement("div");
        songs.textContent = `${song.artistName} - ${song.trackName}`;
        songDivs.appendChild(songs);
    });
    } catch (error) {
        console.log("Error", error);
        return;
    };
};

