"use strict";
/*Zadatak 1
Imamo listu ljudi. Iz te liste koristeći map metodu prođite kroz sve članove liste, kreirajte za svakog od
njih karticu (div element) koji će sadržavati vrijednosti polja „name“ i „age“ iz liste.
Tu map metodu pozovi koristeći Event listener koji koristi click event. Taj click event složi na neki HTML
element koji kreirate po volji u vašem HTML fileu.
*/

    const dugme = document.getElementById("klikni");

    let data = [
    {
    name: "Marko",
    age: "30",
    },
    {
    name: "Luka",
    age: "32",
    },
    {
    name: "Ivan",
    age: "24",
    },
    {
    name: "Stjepan",
    age: "33",
    },
    {
    name: "Domagoj",
    age: "22",
    },
    {
    name: "Kristijan",
    age: "25",
    },
    ];

    const dodavanje = () => {
        data.forEach((imena) =>{
            const div = document.createElement("div");
            const paragraf = document.createElement("p");
            paragraf.textContent = `${imena.name}, ${imena.age}`;
            document.body.appendChild(div);
            div.appendChild(paragraf);
            div.style.margin="30px 0 0 30px";
        } );
     };
    dugme.addEventListener("click", dodavanje)

    /*
Zadatak 2
Kreiraj Event listener koji će ciljati gumb koji kreirate u HTML dokumentu.
Kao event postavite klik a u funkciji definirajte listu boja i složite izmjenu pozadinske boje body elementa
koristeći tu listu na način da svaki klik gumba za pozadinsku boju bodya postavi idućeg člana liste boja.
Bonus zadatak: osmislite rješenje kako se prebaciti na prvog člana liste kada dođete do kraja liste.
Primjer liste boja: */

const gumb = document.getElementById("klikni2");
const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "pink"];

let pozadina = 0;
const promjenaPozadina = () => {
    document.body.style.backgroundColor= boje[pozadina];
    pozadina = (pozadina + 1) % boje.length;
};

gumb.addEventListener("click", promjenaPozadina);