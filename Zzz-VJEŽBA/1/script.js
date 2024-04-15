"use strict";

const unesiZadatak = document.getElementById("zadatak-input");
const forma = document.getElementById("zadatak-forma")
const lista = document.getElementById("zadatak-list");
const brisanjeSvega = document.getElementById("clear");
const filter = document.getElementById("filter");


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

  const gumbX = (e) => {
    if (e.target.parentElement.classList.contains("ukloni-zadatak")){
    e.target.parentElement.parentElement.remove(); /*moramo dohvatiti zeljene elemente unutar buttona kako bi se obrisali kad kliknemo na njih. to mozemo s contains, i onda remove, koristeci IF petlju(ako element sadrzi classlist po imenu ukloni zadatak onda brise)*/
    }
      };

    const brisiSve = () => {
        lista.innerHTML=""; /* stavlja se inner HTML na varijablu lista kako bi mogli dohvatiti sve iz nje te kad kliknemo na gumb da on obrise sve iz nje, to postizemo tako da stavljamo prazan string " ";*/
    }
    
    const pretrazivanje = (e) =>{
        const zadatci = lista.querySelectorAll("li"); /*sa querySelectorAll unutar liste izabiremo sve li elemente*/
        const malaSlova = e.target.value.toLowerCase();

        zadatci.forEach((zadatak) => {
            const tekstListe = zadatak.firstChild.textContent.toLowerCase(); /*stavljamo 'zadatak' kao parametar, firstChild da bismo dohvatili prvi element unutar, i textContent da bismo selektirali text unutar toga, toLowerCase pretvara sve u mala slova*/
            if(tekstListe.indexOf(malaSlova) != -1){/*indexOf pronalazi ima lil u nizu rijec koju mi trazimo i upisujemo u input*/
             zadatak.style.display="flex";/*flex stavljam ako pretrazimo i ima pretrazene rijeci da se pokaze ta rijec*/
            } else{
             zadatak.style.display="none";/*none stavljam da ako pretrazene rijeci nema onda se nece nista ni pokazati*/
            }
         });
        };
   

    filter.addEventListener("input", pretrazivanje); // na varijablu filter dodajem eventlistener kao input i funkciju pretrazivamje
    brisanjeSvega.addEventListener("click", brisiSve);// kada kliknemo na gumb sve ce pobrisati
    lista.addEventListener("click", gumbX);
    forma.addEventListener('submit', zadatakIzrada); // obavezno stavljati addEventListener da bi se pokrenulo sve na stranici
    
    