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

/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/

//FILTER METODA
/*Filer metoda za razliku od forEach vraca odredenu vrijednost. Ta vrijednost je kopija dijela liste filtrirana na nacin da ukljucuje u tu novi listu samo one elemente koji zadovolje trazene parametre filtera.*/

/*---------PRIMJER1-------------*/
const rijeci = ["prozor", "apartman", "autocesta", "lopata", "zvrk"];
//primjer ako zelimo rijeci koje imaju vise od 6 slova u rijeci
const rezultat = rijeci.filter((rijec)=> rijec.length > 6);
console.log(rezultat);

/*---------PRIMJER2-------------*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//provjera koji su parni brojevi unutar liste, mozemo tako da vidimo jel su djeljivi s 2
const parniBrojevi = numbers.filter((broj) =>{
    return broj % 2 === 0;
});
console.log(parniBrojevi);

/*---------PRIMJER3-----------*/
/*
const brojevi2 = []

numbers.forEach ((parniBrojevi) => {
    if (broj % 2 === 0) {
        brojevi2.push(broj);
    }
});
*/
/*.................................*/

const auti = [
    { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
    { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
    { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
    { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
    { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
  ]; 

  // koristeci filter metodu iz postojece liste auta u novu list npr. limuzine, spremite aute koji su limuzine

 const limuzine = auti.filter((auto) => auto.kategorija === "limuzina");
 console.log(limuzine);

/*..................................................................................*/
/*..................................................................................*/

// MAP METODA
// Map metoda nam omogucava da uzmemo jednu listu i iz nje napravimo drugu listu u kojoj ce nasi clanovi liste izgledati malo drugacije.

const lista = [
    {proizvod: "bicikl", cijena: 1500},
    {proizvod: "frizider", cijena: 2500},
    {proizvod: "perilica", cijena: 2000},
    {proizvod: "romobil", cijena: 800},
    {proizvod: "automobil", cijena: 60000},
    {proizvod: "tipkovnica", cijena: 80},
];
// iz postojece liste zelim izvuci samo proizvode, bez cijena, evo kako;
const listaProizvoda = lista.map((objekt) => objekt.proizvod);
console.log(listaProizvoda);

/*..................................................................................*/
/*..................................................................................*/

// FIND metoda - pronalazi odredenu vrijednost iz postojece liste i sprema ih u novu listu, 

//!!!!!!!!ALI NAĐE SAMO PRVU VRIJEDNSOT DOK NPR FILTER NAĐE SVE!!!!!!!!

const findLista = lista.find((auto) => auto.proizvod === "automobil");
console.log(findLista);

/*..................................................................................*/
/*..................................................................................*/

// SOME METODA - recimo da zelimo saznati ima li koji proizvod cijenu manju od 150. Funkcionira kao "ili"/|| provjera

//true je jer je jedan proizvod manji od 150, a to je tastatura
const manjaCijena = lista.some((objekt) => objekt.cijena <=150);
console.log(manjaCijena);


/*..................................................................................*/
/*..................................................................................*/

//EVERY METODA . funkcionira isto kao Some metoda, ali recimo kao "i"/&& provjera
//samo je jedan proizvod manji od 150 to je tastatura, tako da je false (moraju biti svi manji da bi bilo true)
const manjaCijena2 = lista.every((objekt) => objekt.cijena <= 150);
console.log(manjaCijena2);


/*..................................................................................*/
/*..................................................................................*/

// INCLUDES metoda - ona je zgodna za brojevne liste. Kad nabrzinu zelimo saznati sadrzi li odredena lista odredenu vrijednost
// mogu pretraziti ima li unutar nje odredena brojka, buduci da unutar liste ima brojka 2, bit ce true
const listaBrojeva = [1,2,3,4,5,6];
const includesDva = listaBrojeva.includes(2);
console.log(includesDva);



