"use strict";

const divTunes = document.getElementById("divTunes");
const search = document.getElementById("search");
const dugme = document.getElementById("dugmic");

 // funkcija za sohvatit s iTunes-a
const iTunesfunkcija = async () => {
    try {
        const res = await fetch("./iTUnes.txt");
        const data = await res.json();
        console.log(data);
        data.results.forEach((pjesma) => {
          const songDiv = document.createElement("div");
          songDiv.classList.add("pjesma-div");
          songDiv.textContent = `${pjesma.artistName} - ${pjesma.trackName}`
          divTunes.appendChild(songDiv);
        });
        if (!res.ok) {
          console.log("Nešto je pošlo krivo...");
          return;
        };
    } catch(error){
        console.log(error);
    };
};
iTunesfunkcija();

// funkcija za pretrazivat pjesme

const pretrazi = (e) => {
    pretragaTime = setTimeout(() => {
        const glazba = divTunes.querySelectorAll(".pjesma-div");
        const naziv = e.target.value.toLowerCase();
       

        glazba.forEach((mjuza) => {
          const nazivPjesme = mjuza.textContent.toLowerCase();
          console.log(nazivPjesme);
          if (nazivPjesme.indexOf(naziv) !=-1) {
            mjuza.style.display="block";  
           } else {
              mjuza.style.display="none";   
           };
        });
   }, 1000);  
};

 dugme.addEventListener("click", (event) => {
    pretrazi(event);
 });

 search.addEventListener("input", pretrazi);

