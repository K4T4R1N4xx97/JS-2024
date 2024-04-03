"use strict";

/*Idemo koristeci createElement metodu kreirati novi DIV element, na njemu napraviti klasu i postaviti ga...*/

const noviZadatak = document.createElement("div");
noviZadatak.className = "novi-element";
noviZadatak.id = "id-novog-elementa";
noviZadatak.setAttribute("name", "ovo je ime ovog atributa");
noviZadatak.innerText = "Ja sam novi Zadatak.";
console.log(noviZadatak);

// idemo ga sad ubaciti bas na PAGE, pomocu appendChild metodom
// document.querySelector("#zadatak-list").appendChild(noviZadatak);


// idemo kreirati novi zadatak(element) da izgleda isto kao i ostali zadaci
function kreirajZadatak(zadatak){
    const li = document.createElement("li");
    li.innerHTML = `${zadatak}
    <button class="ukloni-zadatak btn-link">
    <i class="fa-solid fa-xmark"></i>
    </button>`;
    document.querySelector("#zadatak-list").appendChild(li);
}
kreirajZadatak("kupi novine");


/*.........................................................*/
// kako mozemo zamijeniti postojece elemente


// 1. koristeci replace metodu
function zamijeniZadatak() {
    const zadatak = document.querySelector("li:first-child");
    const li = document.createElement("li");
    li.innertext = "Zamijenili smo prvi zadatak";

    zadatak.replaceWith(li);
}
zamijeniZadatak();


// 2. koristeci outerHTML metodu
function zamijeniDrugiZadatak (){
    const zadatak = document.querySelector("li:nth-child(2)");
    zadatak.outerHTML= "<li>Zamijenili smo drugi zadatak.</li>";
}
zamijeniDrugiZadatak();


// 3. koristeci neku drugu metodu
function zamijeniTreciZadatak() {
    const lista = document.querySelectorAll("li");
    lista.forEach((zadatak, kljuc) => {
        if (kljuc === 2) {
            zadatak.outerHTML = "<li>Ipak radi hehe</li>";
        }
    });
}
zamijeniTreciZadatak();


// Brisanje elementa
function ukloniZadatak(){
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");
    ul.removeChild(li);
}
ukloniZadatak();

/*-----------------------------------------------------*/
// OnClick metoda
const naslov = document.querySelector("h1");
const listaZadataka = document.querySelector(".zadatak");
const zadaci =  listaZadataka.querySelectorAll("li");

function pokreni(){
    naslov.className = "klasa-zadatak"; // dodavanje klase putem className metode
    console.log("ovo ce se ispisati kad kliknem na button");
    // dodavanje nove klase u postojecu listu klasa
    listaZadataka.classList.add("promjena");
    // uklanjanje klase iz postojece liste klasa
    listaZadataka.classList.remove("zadatak");
    // zamjena klase sa drugom
    naslov.classList.replace("klasa-zadatak", "nova-klasa");

    }
document.querySelector("#clear").onclick = pokreni;
