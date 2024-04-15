"use strict";

const obecanje = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        let greska = false;

        if(!greska){
            resolve({ime:"Marko", prezime:"Markic"});
        }else{
            reject("Greska, nesto je poslo po krivu")
        }
    }, 1000);
});

/*Recimo da bi htjeli napraviti nesto sa podatcima nakon sto se odvrti prvi .then. Mozemo kao return proslijediti prema drugoj karici lanca podatke koje smo dobil u prvoj iteraciji. I onda naravno u drugoj iteraciji napraviti nesto sa tim podacima i opet kao return proslijediti na iducu kariku lanca odredene podatke. To se zove Promise chaning i osigurava nam da potake iz razlicitih izvora kao sto bi nam se moglo dogoditi sa npt. callback hellom, puno bolje i pregledije odradimo... */

obecanje
.then((korisnik) => {
    console.log(korisnik);
    return korisnik.ime;
})
.then((ime) => {
    console.log(ime);
    return ime.length;
}).
then((duzina) => {
    console.log(duzina);
})
.catch((greska) => {
    console.log(greska);
});

