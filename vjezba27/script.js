"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// funkcija za kreiranje novog zadatka
const dodajZadatak = (e) => {
    e.preventDefault();

    if(zadatakInput.value === "" ){
        alert("Molimo unesite zadatak");
        return;
    }
    
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(zadatakInput.value));
    console.log(li);

    const delGumb = document.createElement("button");
    delGumb.className = "ukloni-zadatak btn-link";

    const ikona = document.createElement("i");
    ikona.className ="fa-solid fa-xmark";

    delGumb.appendChild(ikona);
    li.appendChild(delGumb);
    listaZadataka.appendChild(li);
    
    provjeriListu();

    zadatakInput.value ="";
};




// funkcija za brisanje zadataka pojedinacno
const obrisiZadatak = (e) => {
    if (e.target.parentElement.classList.contains("ukloni-zadatak")){
        e.target.parentElement.parentElement.remove();
    }
    provjeriListu();
};

// funkcija za brisanje svih zadataka od jednom
const obrisiZadatke = () => {
    listaZadataka.innerHTML= "";
    provjeriListu();
}

// funkcija za filtriranje zadataka
const filtrirajZadatke = (e) =>{
    const zadaci = listaZadataka.querySelectorAll("li");
    const tekst = e.target.value.toLowerCase(); //to ce sve prebacivati u mala slova kad bude usporedivao
    
    zadaci.forEach((zadatak) =>{
        const imeZadatka =  zadatak.firstChild.textContent.toLowerCase();//to ce sve prebacivati u mala slova kad bude usporedivao
        console.log(imeZadatka);
        if (imeZadatka.indexOf(tekst) != -1) {
            zadatak.style.display="flex";
        } else {
            zadatak.style.display="none";
        }
    });
};



// funkcija za provjeru ima li elemenata u listi
const provjeriListu = () => {
    const zadaci = listaZadataka.querySelectorAll("li");
    if(zadaci.length === 0){
        filter.style.display= "none";
        brisiSve.style.display= "none";
    }else{
        filter.style.display ="block";
        brisiSve.style.display ="block";
    }
};

// event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);
provjeriListu();

