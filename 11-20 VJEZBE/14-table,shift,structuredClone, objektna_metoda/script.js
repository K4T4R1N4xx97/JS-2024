"use strict"

const osoba1 = {
    ime: "Iva",
};

//ovakav pristup ce samo kopirati putanju prema vrijednostima iz objekta koje su zapisane u heap memoriji
const osoba2 = osoba1;
console.log(osoba1, osoba2);


osoba2.ime = "Luka";
console.log(osoba1, osoba2);

// izrada kopije objekta, ali samih vrijednosti u heap memoriji. Ako su podatci višeslojeviti, ovaj pristup ce samo od top level podataka napraviti kopiju, ali ako ima ugnijezdeni ojekt unutar objekta i dalje ce biti referentna putanja na stari podobjekt. Takoder ista prica ako imamo listi unutar liste...


const user1 = {
    ime: "Darko",
    prezime: "Horvat",
    godine: 30,
    zanimanje: "postar",
    prijatelji: ["Luka", "Matija", "marko"],
};

const user2 = {
    ...user1,
    ime: "Marija",
    prezime: "Maric",
    };

// shift za brisanje nekoga iz liste
user1.prijatelji.shift();

console.table(user1);
console.table(user2);


const stariObjekt = {
    a: { b: 10 },
    c: 2,
};

/* const noviObjekt = {...stariObjekt};

stariObjekt.c = 5;
stariObjekt.a.b = 5;

console.table(noviObjekt);
console.table(stariObjekt); */

// od 2022. imamo meodu kojom mozemo napraviti DEEP COPY objekta pomocu structuredClone metode
//mijanjenje vrijednosti u jednom objektu, necemo promijeniti i u drugom
const noviObjekt = structuredClone(stariObjekt);

stariObjekt.c = 5;
stariObjekt.a.b = 5;

console.table(stariObjekt);
console.table(noviObjekt);

// funkacija unutar objektaa se zove objektna metoda

const osoba = {
    ime: "Darko",
    prezime: "Horvat",
    godrodenja: 1994,
    zanimanje: "postar",
    prijatelji: ["Luka","Marko","Ivica"],
    vozacka: true,
    starost: function(godrodenja){
        return 2024 - this.godrodenja;
    },
    provjera: function(){
        return `${this.ime} je ${this.starost()}-godišnji ${this.zanimanje} i ${this.vozacka ? "ima" : "nema"} vozacku dozvolu`;
    },
    // skraceni nacin definiranja funkcije kao clana objekta
    // this u ovom slucaju stavljamo umjesto "osoba", on ce vuci unutar tog objekta
    login(){
        console.log(this.ime, "je logiran");
    },
    logout(){
        console.log(this.ime, "se odlogirala");
    },
};

console.log(osoba.provjera())

// dot notacijom racunamo ovak
console.log(osoba.starost());

// bracket notacijom racunamo ovako
console.log(osoba["starost"]());

osoba.login();
osoba.logout();

/*----------------------------------------------------*/



