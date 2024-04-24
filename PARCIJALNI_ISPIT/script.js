"use strict";
 
// funkcija za shvatit s iTunes-a
const divTunes = document.getElementById("divTunes");
 
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
const search = document.getElementById("search")

const pretrazi = (e)=>{
    const glazba = divTunes.querySelectorAll("div");
    const nazivi = e.target.value.toLowerCase();
    
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

 search.addEventListener("input", pretrazi);