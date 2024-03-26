"use strict";

/*
FOREACH metoda

forEach metoda prolazi listu clan po clan (svaki vlan ulazi kao parametar) i na njemu radi odredene izmjene. Te izmjenjene clanove mozemo spremiti u neku novu listu.
*/

let brojevi = [10, 20, 30, 40, 50];

brojevi.forEach (function(pojedinacni_clan_liste, redno_mjesto_clana_liste){
console.log(pojedinacni_clan_liste, redno_mjesto_clana_liste);
});

// idemo vidjeti kako ovo napisati kao arrow funkciju
brojevi.forEach ((vrijednost, index, lista) =>{
console.log(`${index} - ${vrijednost} i cijela lista ${lista}`);
});

// kako bismo ovo napravili na listi objekata

const useri = [
    {ime: "Davor"},
    {prezime: "Horvat"},
    {godine: 30},
    {ime: "Maja"},
    {prezime: "majic"},
    {godine: 25},
    {ime: "stjepan"},
    {prezime: "stjepic"},
    {godine: 25},
];
useri.forEach((user) => console.log(user.ime));

/* // FOREACH ne moze spremiti novu listu, ostat ce UNDEFINED
const imenaUsera = useri.forEach((user) => user);
console.log(imenaUsera);
 */