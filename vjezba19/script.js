"use strict";

// MAP metoda
const listaBrojeva = [1,4,8,17];

// prodi listu brojeva, svakog pomnozi s 2 i spremi rezultate u novu listu
const pomnozeno = listaBrojeva.map((mnozi) => mnozi * 2);
console.log(pomnozeno);

// kako bi dodali string na nase rezultate koristeci coercion
const mapa = listaBrojeva.map((broj)=> "broj" + broj *2);
console.log(mapa);

// ajde umnozak napravite s forEach metodom
const brojevi2 = [];
listaBrojeva.forEach((broj) => {
  brojevi2.push(broj * 2);
}); 
console.log(brojevi2);

/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
// koristeci primjer iz prosle vjezbe kreirati listu marki auta

const auti = [
    { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2015 },
    { ime: "Audi", kategorija: "limuzina", godinaProizvodnje: 2017 },
    { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2016 },
    { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2021 },
    { ime: "BMW", kategorija: "cabriolet", godinaProizvodnje: 2019 },
  ]; 

  const marka = auti.map((marke) => marke.ime);
  console.log(marka);

  // kreirajte koristeci map metodu objekt koji ce imati samo marku i kategoriju
 const markaKateg = auti.map((auto)=> {
    return {marka: auto.ime, kategorija: auto.kategorija};
 });
 console.log(markaKateg);

 // Npr. trebate napraviti vise od jedne metode na odredenoj listi kako bi dobili zeljeni rezultat. I za to koristimo CHAIN methods.

// primjer s arrow 
 const rezultat =  listaBrojeva.map((broj)=> Math.sqrt(broj)).map((broj) => broj * 2);
 console.log(rezultat);

//primjer s funkcijom
 const rezultat2 = listaBrojeva.map(function(broj){
    return Math.sqrt(broj);
 })
 .map(function(broj){
    return (broj * 2);
 });
 console.log(rezultat2);

 // kombiniranje reazlicitih metoda

 const brojevi = [1,2,3,4,5,6,7,8,9,10];
 const rezultat3 = brojevi.filter((broj) => broj % 2 === 0).map((broj) => broj * 2);
 console.log(rezultat3);


/*-------------------------------------------------------------------------------------------*/
//REDUCE metoda - ona izvrsava "reducer" callback funkciju kojoj je svrha da sve clanove lsite svede i zapise u jednu vrijednost.

//npr. zamislite primjer sa kosaricom proizvoda, svaki proizvod ima svoju vrijednost a nas recimo zanima suma svih tih stavki (a ne znamo koliko ih ima).

const lista = [1,2,3,4,5,6,7,8,9,10];

const pocetnaVrijednost = 0;

// idemo sad napraviti reduce metodu

const suma = lista.reduce(function(prijasnjaVrijednost, trenutnaVrijednost) {
    return prijasnjaVrijednost + trenutnaVrijednost;
}, pocetnaVrijednost);

console.log(suma);

/*----drugi-primjer-----*/
const suma2 = lista.reduce((prije, sad) => prije + sad, 0);
console.log(suma2);


// ajmo napisati isto ovo koriste for petlju, NIJE BAŠ OPTIMALAN NAČIN, BOLJE JE KORISTITI REDUCE
const sumaa3 = () => {
    let prije = 0;
    for (const broj of lista){
        prije+= broj;
    }
    return prije;
};
console.log(sumaa3());

/*-------------------------------PRIMJER--------------------------------------------*/

// idemo sad napraviti nasu kosaricu
const kosarica = [
    {id:1, proizvod:"kruh", cijena: 1.5},
    {id:2, proizvod:"mlijeko", cijena: 2},
    {id:3, proizvod:"salama", cijena: 5},
    {id:4, proizvod:"sapun", cijena: 4},
    {id:5, proizvod:"cips", cijena: 3},
];
const zbroj = kosarica.reduce((prije, sad) => {
    return prije + sad.cijena;
},0);
console.log(zbroj);













