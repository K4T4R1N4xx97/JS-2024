"use strict";

const divTunes = document.getElementById("divTunes");
const search = document.getElementById("search")
const dugme = document.getElementById("dugmic")

 // funkcija za sohvatit s iTunes-a
const iTunesfunkcija = async () => {
    try{
        const res = await fetch("./iTUnes.txt");
        const data = await res.json();
        console.log(data)
        if(!res.ok){
            console.log("Nešto je pošlo krivo...");
            return;
    }
            data.results.forEach((pjesma) => {
            const songDiv = document.createElement("div");
            songDiv.classList.add("pjesma-div");
            songDiv.textContent = `${pjesma.artistName} - ${pjesma.trackName}`
            divTunes.appendChild(songDiv);
        })
    } catch(error){
        console.log(error);
    };
};
iTunesfunkcija();

// funkcija za pretrazivat pjesme
const pretrazi = () => {
    const glazba = divTunes.querySelectorAll("div");
    const nazivi = search.value.toLowerCase();
    
    glazba.forEach((mjuza) =>{
        const nazivPjesme = mjuza.textContent.toLowerCase();
        console.log(nazivPjesme);
        if(nazivPjesme.indexOf(nazivi) !=-1){
            mjuza.style.display="block";
        }else{
            mjuza.style.display="none";       
        }
    });
};

 dugme.addEventListener("click", () => {
    pretrazi();
 });

 search.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    event.preventDefault();
    pretrazi();
    }
});

