"use strict";


// idemo definirati funkciju unutar funkcije

function vanjskaFunkcija(){
    function pomnoziFunkcija(broj){
        return broj * 2;
    }
    return pomnoziFunkcija;
}

const pomnozi = vanjskaFunkcija();
console.log(pomnozi);

const rezultat = pomnozi(4);
console.log(rezultat);


/* Napravili smo funkciju unutar funkcije i za return smo vratili instrukcije iz unutrasnje funkcije i spremili u varijablu pomnoozi, ali ju nismo pokrenuli. Nakon toga smo pomocu druge varijable pokrenuli tu unutarnju funkciju cija je instrukcija funkcije zapisana u varijabli pomnozi. */


/*-------------------------------------------------------------------------------------------------------------------------*/

/* Ovisno o tome gdje smo definirali nasu funkciju odlucujemo koje su varijable dostupne kada pozovete funkciju koristeci slosure ova varijabla brojac i njena vrijednost ce ostati zapisani u definiciji/instrukciji varijable "brojacVarijabla" i vrijednost ove varijable "brojac" ce ostati memorirana u definiciiji te funkcije. Nasa vanjskaFUnkcija2 u biti ce dobiti malu cache memoriju zahvaljujuci ovome. */
/* Kada bi napravili drugu varijablu i u nju spremili opet vanjskaFUnkcija2 ona bi kreirala novi closure. 
Prednosti: vrijednost unutar instrukcije funkcije se pamti, ne moze se mijenjati niti pristupiti toj varijabli iz globalnog scopea.

*/

function vanjskaFunkcija2 () {
    let brojac = 0;
    function suma(){
        brojac++;
        console.log(brojac);
    }
    return suma;
}

const brojacVarijabla = vanjskaFunkcija2();
console.log(brojacVarijabla);
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();
brojacVarijabla();


/*-------------------------------------------------------------- */

let vanjskiBroj = 10;

function dodaj(){

    const unutarnjiBroja = 5;
    return vanjskiBroj + unutarnjiBroja;
}
console.log(dodaj());

vanjskiBroj = 20;
console.log(dodaj());

/*Umjesto ovoga ako ne zelimo globalne varijable... Idemo napraviti closure... */

function dodajVanjska(broj1){
    function dodajUnutarnja(broj2){
        return broj1 + broj2;
    }
    return dodajUnutarnja;
}

const zbrajanje = dodajVanjska(10);
console.log(zbrajanje);

console.log(zbrajanje(5));
console.log(zbrajanje(10));


/*----------------------------------------------------------------------------------------------------------------*/

/* updateKlik returna reportKLik funkciju. reportKLik ima svoj scope i ima pristup lokalnim varijablama svoje parent funkcije updateKlik. Inace kada se dunkcija returna tj. kada se dovrsi njezino izvodenje sve njene varijable se brisu i nisu vise dostupne. Ali zato sto updateklik vraca referencu na unutarnju funkciju reportKLik koja ima pristup njezinim (updateKlik) lokalnim vrijednostima, kada se updateKLik returna njene reference su sacuvane u cache memoriji. 


Te reference na varijable koje funkcija returna u formi brojKlikova funkcije es zove "closure". Klikovi su nam i dalje dostupni ali samo putem brojKlikova varijable. 
*/

function updateKlik (){
    let klikovi = {};
    let button;
        
    function reportKlik(klik){
        button = klik.id;
        klikovi[button] = klikovi[button] + 1 || 1;
        console.log(button, klikovi);
    }
    return reportKlik;
}

const brojKLikova = updateKlik();

document.querySelectorAll(".klikovi").forEach((e)=>{
e.addEventListener("click", (event) => {
    brojKLikova(event.target)
    });
});
