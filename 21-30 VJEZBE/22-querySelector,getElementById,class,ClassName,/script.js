"use strict";

/*mozemo dohvatiti i odredeni element po HTML tagu , ali ce se od tih elemenata napraviti lista i uz pomoc te liste dohvacamo onaj element kojeg hocemo.*/
console.log(document.getElementsByTagName("h1")[0].innerHTML);

/*Mozemo dohvatiti odredeni element i na njega nakaciti novi atribut sa zeljenom vrijednosti.*/

document.getElementById("naslov").setAttribute("class", "naslov-h1");

const naslov = document.getElementById("naslov");
naslov.innerHTML = "<strong>Ovo je novi naslov</strong>";

/*Ovo medu ostalim mozemo onda elegantno koristiti i za izmjenu CSS-a.*/
naslov.style.color = "blue";
naslov.style.backgroundColor = "#eee";
naslov.style.padding = "2rem";
naslov.style.borderRadius = "5px";

/* Sa QuerySelectorom mozemo odabrati sto god hocemo po atributu. */
console.log(document.querySelector("#naslov"));
console.log(document.querySelector(".container"));

/* QuerySelectorAll funkcionira isto kao i QuerySelector ali s njim selektiramo sve instance koje imaju podesen atribut kojeg targetiramo */
const lista = document.querySelectorAll("ul li");
console.log(lista);
// za dohvacanje odredenog broja unutar liste
console.log(lista[2].innerHTML);

lista.forEach ((clan_liste, kljuc) =>{
    clan_liste.style.color = "red";
    if(kljuc === 1){
        clan_liste.remove();
    }
    if (kljuc === 2){
clan_liste.innerHTML = `kupi novine <mark>u trgovini</mark>`
    }
});

/* GetElementByClassName, buduci da je by class name ne moramo stavljati # ili . ispred naziva u zagradi */
const dijete = document.getElementsByClassName("dijete");
console.log(dijete);
// ako zelimo dohvatiti odredeni element
console.log(dijete[2].innerHTML);

// primjer...

let podaci;
const roditelj = document.querySelector(".roditelj");
console.log(roditelj);

// .children element mozemo koristiti za promjene elementa unutar kontejnera
podaci = roditelj.children;
podaci = roditelj.children[1].innerHTML;
podaci = roditelj.children[1].innerText;
podaci = roditelj.children[1].className; // ako zelimo saznati jel ima klasu taj element
console.log(podaci);

roditelj.children[1].innerText = "Promijenila sam tekst";
roditelj.children[1].innerHTML = "Promijenila sam tekst, <mark>opet</mark>"
roditelj.children[1].style.color = "red";

/*Pseudo klase kao i u CSS-u moze se koristiti za promjene clanova*/
roditelj.firstElementChild.innerText = "Ovako mijenjamo prvog clana";
roditelj.lastElementChild.innerText = "Ovako mijenjmo zadnjeg clana";


/* primjer drugog smjera kretanja, od djeteta do roditelja*/


const drugoDijete = document.querySelector(".dijete:nth-child(2)");
console.log(drugoDijete);

// za dohvacanje slijedeceg i prethodnog elementa
podaci = drugoDijete.nextElementSibling;
drugoDijete.nextElementSibling.style.fontSize = "3rem";
drugoDijete.previousElementSibling.style.fontSize = "3rem";
console.log(podaci);


