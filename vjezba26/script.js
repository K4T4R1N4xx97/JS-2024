"use strict";

// definiranje varijabli
const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const brisiSve = document.getElementById("clear");

// definiranje funkcija

// funkcija za kreiranje novog zadatka

const dodajZadatak = (e) => {
    e.preventDefault();

    if(zadatakInput.value === "" ){
        alert("Molimo unesite zadatak");
        return;
    }

    /*Kreiramo novi (li) element, zadatak cemo pokupiti iz input polja i zapisati ga u li koristeci createTextNode metodu. ona za razliku od innerTexta kreira novi element, dok innerText samo mijenja postojeci sadrzaj iz postojeceg elementa*/
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(zadatakInput.value));
    console.log(li); // provjera jel nam element kreiran i da sadrzi sadrzaj iz input polja

    // kreiranje buttona i njegovih classova
    const delGumb = document.createElement("button");
    delGumb.className = "ukloni-zadatak btn-link";

    // kreiranje ikona font-awesome i klasa
    const ikona = document.createElement("i");
    ikona.className ="fa-solid fa-xmark";

    // dodavanja ikone unutar buttona
    delGumb.appendChild(ikona);

    // dodavanje button za brisanje unutar liste itema
    li.appendChild(delGumb);

    listaZadataka.appendChild(li); // s ovime na kraju dodajemo taj element na stranicu

    //resetiranje input polja da opet bude prazno
    zadatakInput.value ="";
};

// funkcija za brisanje pojedinacnog zadatka
const obrisiZadatak = (e) => {
    if (e.target.parentElement.classList.contains("ukloni-zadatak")){
        e.target.parentElement.parentElement.remove();
    }
};


// funkcija za brisanje svega od jednom
const obrisiZadatke = () => {
    listaZadataka.innerHTML= "";
}

// Event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);

