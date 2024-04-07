/* Napisat cemo IIFE ' immediately Function Expression - ovo ce biti funkcija koja ce se odmah izvrsiti nakon sto se definira*/
/*Sintaksa IIFE je takva da ju postavljamo unutar okruglih zagrada i unutar prve pisemo funkciju, a druga sluzi za definiranje pokretanja.*/

"use strict";

/* const user = "igor";
console.log(user); */

(function () {
    const user = "igor";
    console.log(user);
})(); 

(function () {
    const user = "maja";
    console.log(user);
    const ifi = () => console.log ("ovo ce bla bla");
    ifi();
})();

(function (ime, godine) {
    console.log(`pozz, ja sam ${ime} i imam ${godine} godine`);
})("Ivana", 33);