/*----------------------PRVI-ZADATAK----------------------*/

"use strict";

let broj = document.getElementById("broj");
const dugmeSmanji = document.getElementById("smanji");
const dugmeDodaj = document.getElementById("dodaj");


const povecanjeBroja = () => {
    let trenutniBroj = JSON.parse(broj.textContent);
    let noviBroj = trenutniBroj + 1;
    broj.textContent = noviBroj;
};

dugmeDodaj.addEventListener("click", povecanjeBroja);

const smanjenjeBroja = () => {
    let trenutniBroj = JSON.parse(broj.textContent);
    let noviBroj = trenutniBroj - 1;
    broj.textContent = noviBroj;
};

dugmeSmanji.addEventListener("click", smanjenjeBroja);

/*----------------------DRUGI-ZADATAK----------------------*/


const hover = document.getElementById("hover");

const duplanjeGumba = () => {
    hover.addEventListener("mouseenter", () => {
        hover.style.width="400px";
        hover.style.height="400px";
    });
  };

const vracanjeGumba = () => {
    hover.addEventListener("mouseleave", () => {
        hover.style.width="200px";
        hover.style.height="200px";
    });
};

duplanjeGumba();
vracanjeGumba();



