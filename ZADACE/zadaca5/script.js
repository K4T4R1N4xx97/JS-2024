"use strict"

/*----------------ZADATAK-1----------------*/
/*Zadatak 1 (Vježba sa funkcijama i listama)
Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..
Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.
Napravite Listu koja će koristiti testne podatke dolje.
Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste
dobili koristeći funkciju za izračun napojnica (ona prva gore).
Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).
Tip : svaka lista treba vrijednosti na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možete samo nazvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti napojnice u
posebne varijable prvo nego direktno u novu listu
testni podaci:
račun 125
račun 555
račun 44*/
const iznosRacuna = [125, 555, 44];
 
const izracunNapojnice = iznosRacuna.map(broj=> {
  if(50<=broj && broj<=300){
    return broj + (broj*0.15);
  }
  else if (broj > 300){
    return broj + (broj*0.20);
  }
  else{
    return broj;
  }
}
  );
 
const finalniIznos = izracunNapojnice;
console.log(finalniIznos);
 


/*----------------ZADATAK-2----------------*/
/*Idemo opet do Marka i Josipa i njihovog ITM-a.
Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije.
Zapamtite: ITM = masa/visina ** 2
Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina.
Kreiraj calcITM metodu na svakom objektu koja će izračunati ITM (ista metoda na oba).
Spremi ITM izračun u vrijednost objekta i vrati ga iz metode (return) ime
logiraj u konzolu tko ima viši ITM, skupa sa imenom i ITM vrijednosti
NPR: Josipov ITM (28.3) je veći od Markovog (23.9)!
Test data:
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm*/
const objektITM = [
  {ime:"Marko", tezina:78, visina: 1.69},
  {ime:"Josip", tezina:92, visina:1.95},
  ];
 
const izracunITM = (osoba) => {
  return osoba.tezina/osoba.visina**2;
};

 objektITM.forEach((osoba)=>{
  const ITM = izracunITM(osoba);
  console.log(`${osoba.ime} ima ITM od ${ITM}`);
});

 

/*----------------ZADATAK-3----------------*/
/*Imamo objekt album. Napravi novi objekt (noviAlbum) i dodaj ga na u prvi objekt kao drugog člana liste
(ali isto kao objekt).*/
const album = [ {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
 },
];

 const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["8T", "LP"],
};
 
album.splice(1, 0, noviAlbum);
console.log(album);
 


/*----------------ZADATAK-4----------------*/
/*Napravite listu imena (do 5 komada), neka jedno ime bude vaše ime. napravite for petlju koja će kada
naleti na vaše ime ispisati "Ime je super" dok će ostala imena samo ispisat.*/
const imena = ["Slavica", "Mario","Irena", "Katarina", "Tihomir"];

 for (let i = 0; i < imena.length; i++) {
  if (imena[i] === "Katarina"){
    console.log('Ime je super');
  } else{
    console.log (imena[i]);
  }
  };

 

/*----------------ZADATAK-5----------------*/
/*Zadatak 5
Napravite pomoću while petlje rješenje za primjer bacanja kocke dok ne dobijemo 6. Znači ne znamo
kada ćemo prekinuti loop.
Pomoć: Kada koristimo Math.random to će biti broj između 0 i 1, doslovno decimalni broj stoga morate
tome doskočiti. Kako bi maknuli decimalu pišemo Math.trunc ili Math.floor.*/

let kockica;
while ((kockica = Math.floor(Math.random() * 6) + 1) === 6) {
  console.log("Nisam dobila 6, dobila sam:", kockica);
}
console.log(`Dobila sam 6.`);



/*----------------ZADATAK-6----------------*/
/*Idemo opet nazad do Jože i njegovog kalkulatora napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..
1) napravi listu racuni koja sadrži 10 vrijednosti između 1 i 400.
2) napravi prazne liste za napojnice i totale (racun + napojnica)
3)Vaš zadatak je izračunati napojnicu ovisno o veličini računa.Ovo smo već izračunali,
koristimo istu funkciju koju smo koristili zadnji put.
Onda upotrijebite for petlju kako bi napravili 10 kalkulacija.
tip: pozovite napojnica varijablu iz točke 3 unutar petlje i upotrijebite push metodu kako
bi dodali vrijednosti napojnici i ukupnim listama.
savjet : prvo zbrojite sve vrijednosti u listi.
Za dio sa zbrajanjem krenite sa kreiranjem varijable sum koja kreće sa početnom vrijednosti 0.
U svakoj iteraciji dodajte trenutnu vrijednost liste u sum varijablu.
savjet 2 : za izračun prosjeka, podijelite sumu koju ste dobili sa brojem članova liste.
savjet 3 : pozovite funkciju sa (racun + napojnica) listom*/



