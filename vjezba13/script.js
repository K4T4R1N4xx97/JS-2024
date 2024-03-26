"use strict";

const osoba = ["Dina", "Horvat", 30, "kuharica", ["Marko", "Maja", "Josipa"]];

console.log(osoba);


/*u situaciji kad bi htjeli imenovati kljuceve za obuhvacanje podataka (sto ne mozemo u listama, jer tamo ih hvatamo po indexu, tj. broju na koje se nalaze u listi), mozemo koristiti objekte. Za razliku od listi, njih definitiramo viticastom zagradom i njezini clanovi imaju svoj kljuc/vrijednost par. Znaci mi definiramo kljuc pod kojim se sprema vrijednost i pomocu tog kljuca mozemo i dohvacati vrijednosti iz objekta. Znaci stvari iz liste dohvacamo indexom, tj. brojem a kod objekata dohvacamo kljucem koji smo dodijelili odredenoj vrijednosti */
const objekt = {
    firstName: "Dina",
    lastName: "Horvat",
    godine: 30,
    zanimanje: "kuharica",
    prijatelji: ["Marko", "Maja", "Josipa"],
};

console.log(objekt);
console.log(objekt.lastName);

/*dohvacanje odredene vrijednosti iz objekta pomocu kljuca se moze odraditi na 2 nacina*/

// 1. nacin je tzv. "dot" notacija
console.log(objekt.prijatelji[2]);

//2 nacin je tzv. "bracket" notacija, zagrada
console.log(objekt["godine"]);

// demonstracija kad bismo koristili bracket notaciju

console.log(objekt.firstName);
console.log(objekt["firstName"]);

//konkretno kada koristimo bracket notaciju

const spojnica = "Name";

console.log(objekt["first" + spojnica]);
console.log(objekt["first" + spojnica]);


/*
const upitnik = prompt("Sto vas zanima o osobi? Izameri izmedu firstName, lastName, godine, zanimanje, prijatelji");

// dot notacijom ovo ne mozemo ispisati, tj. ne zanamo sta je ovo, jer naravno upitnik nije clan objekta
console.log(objekt.upitnik);

// bracket notaccijom ovo mozemo upisati
console.log(objekt[upitnik]);

*/


/*Postoje 2 nacina da provjerimo na kojem mjestu se nalazi odredeni clan liste */

const prijatelji = ["Marko", "Maja", "Josipa"];
// indexOf metoda liste je nacin provjere da li je odredena vrijednost clan liste, ako je dat ce nam lokaciju, ako nije dat ce nam -1

console.log(prijatelji.indexOf("Josipa"));

// Includes je boolean metoda
console.log(prijatelji.includes("Josipa"));

if(prijatelji.includes("Josipa")){
    console.log("Imam prijateljicu Josipu.");
}

//NACINI SPAJANJA LISTI

let x;
const voce = ["jabuke", "kruske", "tresnje"];
const bobice = ["kupine", "maline", "borovnice"];

//1. nacin da stavimo listu unutar liste
/* voce.push(bobice);
console.log(voce);
 */
/* x = voce[3][1];
console.log(x); */

/* x = [voce, bobice];
console.log(x);
 */

// 2. nacin je konkateniranje listi, dugo koristeno
x = voce.concat(bobice);
console.log(x);

// Spread operator koji sluzi za extraktiranje listi/objekata u jednu varijablu, U biti cemo ga koristiti za spajanje objekata vise nego listi...
const brojevi = [1, 2, 3];
const noviBrojevi = [...brojevi, 4];
console.log(noviBrojevi);

const brojevi2 = [4, 5, 6];
const noviBrojevi2 = [...brojevi, ...brojevi2];
console.log(noviBrojevi2);


// prije se koristila flat metoda kako bismo eliminirali nepotrebne podliste 
const lista = [voce, bobice];
const slozenaLista = lista.flat();
console.log(slozenaLista);



