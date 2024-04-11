"use strict";

const unesiZadatak = document.getElementById("zadatak-input");
const forma = document.getElementById("zadatak-forma")
const lista = document.getElementById("zadatak-list");


    const zadatakIzrada = (e) => {
        e.preventDefault(); // sprijecava refreshanje stranice
    
        if(unesiZadatak.value === "" ){
            alert("Nisi nista unijela dumbass");
            return; // return moram staviti da se funkcija zavrsi a ne da se nastavlja nakon sto kliknem okej u alertu
        }
      
        const li = document.createElement("li"); // kreiram listu
        li.appendChild(document.createTextNode(unesiZadatak.value));
        // kreiram listu i unutar nje stavljam .createTextNode koji sluzi za unos teksta u inputu direktno na stranici, zasto stavljam unesiZadatak.value
        
        console.log(li);

        // kreiranje malo X gumba
        const maliX = document.createElement("button");
        maliX.className= "ukloni-zadatak btn-link";

        // kreiranje i elementa unutar gumba
        const maloI = document.createElement("i");
        maloI.className="fa-solid fa-xmark";

        // prvo se stavlja Parent onda appendChild i unutar zagrade child element (tako se dodaju elementi unutar elementa)
       lista.appendChild(li);
       li.appendChild(maliX);
       maliX.appendChild(maloI);

       unesiZadatak.value=""; // moram staviti prazan string na kraju kako tekst ne bi ostao unutar inputa nakon sto ga unesem i kreira listu
        
    };


    forma.addEventListener('submit', zadatakIzrada); // obavezno stavljati addEventListener da bi se pokrenulo sve na stranici
    