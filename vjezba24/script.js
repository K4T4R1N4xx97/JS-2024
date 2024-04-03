"use strict";

/* EventListener - addEventListener postavljamo na element koji smo spremili iz DOM-a i na njega postavljamo 2 stvari "cekamo" da se dogodi, a drugi je funkcija koja ce se pokrenuti kada se dogodi event koji "cekamo" */

const clearBtn = document.querySelector("#clear");

// napisano kao klasicna funkcija
clearBtn.addEventListener("click", function(){
    console.log("EVENT LISTENER SE POKRENUO!")
});

// napisano kao arrow funkcija

clearBtn.addEventListener("click", () => {
    console.log("TESTIRAJ ME ODMAH SAD!");
});

// odvojeno definirano

function konzola() {
    console.log("BLA BLABLABLA");
}

clearBtn.addEventListener("click", konzola);

/* Ajmo sada stvarno sloziti brisanje postojecih zadataka*/
const pocisti = () => {
    const listaZadataka = document.querySelector(".zadatak");
    const zadaci = listaZadataka.querySelectorAll(".pojedinacni.zadatak");

    zadaci.forEach((zadatak) =>{
        zadatak.remove();
    });
};
clearBtn.addEventListener("click", pocisti);

// MOuse events

const naslov = document.querySelector("h1");
naslov.addEventListener("click", () => console.log("klik")); // lijevi klik misa
naslov.addEventListener("dblclick", () => console.log("klikklik")); // dupli klik
naslov.addEventListener("mousedown", () => console.log("drzim tipku misa")); // stisni i drzi tipku misa
naslov.addEventListener("mouseup", () => console.log("pusti ju")); // pusti tipku misa
naslov.addEventListener("wheel", () => console.log("vozi nja")); // kotacic misa
naslov.addEventListener("mouseover", () => console.log("hover in misa")); // hover in misa
naslov.addEventListener("mouseout", () => console.log("hover out misa")); // hover out misa

/*----------------------------------------------------------------*/
// Pointer events
const pointer = document.querySelector("h2");

const pointerEvent = (e) => {
    console.log(e.target); // sadrzaj tog elementa .target
    console.log(e.type); // daje nam vrstu/tip eventa pomocu kojeg je aktivirana funkcija
    console.log(e.clientX); // daje rezultate (kordinate) tamo gdje smo kliknuli na taj h2, horizontala
    console.log(e.clientY); // daje rezultate (kordinate) tamo gdje smo kliknuli na taj h2, vertikala
    console.log(e.offsetY); // daje nam vrijednost po vertikali relativno prema elementu
    console.log(e.clientX); // daje nam vrijednost po horizontali relativno prema elementu
    console.log(e.pageY); // daje nam vrijednost po vertikali relativno prema stranici
    console.log(e.pageX);// daje nam vrijednost po horizontali relativno prema stranici
    console.log(e.screenX); // daje nam vrijednost po horizontali relativno prema monitoru
    console.log(e.screenY); // daje nam vrijednost po vertikali relativno prema monitoru
};

pointer.addEventListener("click", pointerEvent);


/*PreventDefault metoda - sprijecava defaultno ponasanje odredenog HTMl elementa, najcesce ce te ju korisiti da bi sprijecili recimo refresh stranice prilikom klika na gumb*/

document.querySelector("#clear").addEventListener("click", () => {
    e.preventDefault();
    console.log("sprijecili smo defaultno ponasanje buttona");
});

