"use strict";

console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");
console.log("gol 10");
/*RJEŠAVANJE OVAKVOG PROBLEMA MOŽEMO NAPRAVITI REKURZIJU ILITI PONAVLJANJE IZVOĐENJA DOK SE ODREĐENI UVJET ISPUNI, PRVO DEFINIRAMO UVJET KADA SE REKURZIJA ZAVRŠAVA, A ONDA TEK DEFINIRAMO OPERACIJU UNUTAR FUNKCIJE, KOJA ĆE SAMU SEBE POZIVATI IZNOVA DOK SE OVAJ UVJET NA POČETKU NE ISPUNI*/

function golovi(gol){
    // 1. korak - cim otvorimo funkciju definiramo uvjet kad ce rekurzija zavrsiti
    if (gol > 10) return;
    // 2. korak . definiranje rekurzivnog poziva i sto ce on raditi
    else console.log(`gol ${gol}`);
    return golovi(gol + 1);
};
golovi(1);

// kako bi ovo isto napisali sa FOR petljom?
for (let i = 1; i <= 10; i++) {
console.log(`gol ${i}`);    
}

// moderan način za pisati FOR petlje

const predmeti = ["stol", "stolice", "stoljnjak", "vaza"];

for (let i = 0; i < predmeti.length; i++){
console.log(predmeti[i]);
};

//novi nacin pisanja FOR petelje, TZV metoda "OF", ideja je da definiramo elemente kao jednog clana liste lemenataa i prodemo kroz sve clanove liste

for (const predmet of predmeti){
    console.log(predmet);
};

// kako to iskoristiti kod liste objekata

const korisnici = [
    {ime: "davor"},
    {ime: "maja"},
    {ime: "iva"},
    {ime: "stejapn"},
    {ime: "jelena"},
];

for (const korisnik of korisnici){
    console.log(korisnik.ime);
}

//mozemo loopati i string npr. : 

const rijec = "algebra";
for (const slovo of rijec){
    console.log(slovo);
};

const boje = [
    "crvena", "zelena", "plava", "zuta", "crvena"
];
/*ZA DOHVACANJE KLJUCEVA/ REDNOG CLANA I NJIHOVIH VRIJEDNOSTI MOZEMO KORISTITI "IN" METODU*/
for (const boja in boje){
    console.log(boja, boje[boja]);
};

// PRAKTICAN PRIMJER

const osoba = [
    "Davor",
    "Horvat",
    30,
    "Postar",
    ["luka", "bernarda", "zvonimir", "branimir"],
    true,
 ];

 const tipovi = [];

 for (let i = 0; i < osoba.length; i++){
  tipovi[i] = typeof osoba[i];  
 };

 console.log(tipovi);

 // PETLJA UNUTAR PETLJE PRIMJER(ugnijezdena petlja):

 for (let i = 1; i <= 3; i++){
    console.log(`broj ${i}`);
    for (let j = 1; j <= 3; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
 };
/*OVAKVO PONASANJE SE DOGADA JER IMAMO PETLJU UNUTAR PETLJE, KADA PRVA PETLJA KRENE I NALETI NA UGNJEZDENU PETLJU, TA PETLJA SE MORA VRTITI DO KRAJA I TEK KAD SE ODVRTI DO KRAJA, KRECE IDUCA ITEREACIJA VANJSKE PETLJE, KOJA ONDA PONOVO POKRECE U TOJ IDUCOJ ITERACIJI UNUTARNJU PETLJU DA SE VRTI IZ POCETKA ZA TU ITERACIJU VANJSKE PETLJE*/

const godine = [1999, 2001, 2005, 1995];
const dob = [];

for (let i = 0; i < godine.length; i++) {
    dob.push(2024 - godine[i]);
};
console.log(dob);

/*napravit cemo for petlju koja ide do 20, ali zelimo napraviti prekid izvrenja petlja ako dodde do toga da se neki uvjet ispuni*/
for (let i = 0; i <= 20; i++){
    if (i === 10){
        console.log("STOP!");
        break;
    }
    console.log(i);
}

/*napravit cemo for petlju koja ide do 20, ali zelimo na odredenom mjestu umjesto ispisa onog sto bi se trebalo ispisati po redosljedu izvodenja postaviti da se odradi nesto drugo i nakon toga nastavi izvrsavanje petlje.*/

for (let i = 0; i <=20; i++){
if (i===10){
console.log("Umjesto broja 10, ide deset");
continue;
}
console.log(i);
}

// izvodenje petlje od zadnje prema prvom clanu liste.
for (let i = godine.length - 1; i >= 0; i--){
    console.log(godine[i]);
}

