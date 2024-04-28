"use strict";

/*
Promise (obecanje) je objekt koji ce rezultirati jednom vrijednosti koja moze biti ili rijesena ili nerjesena. Sastoji se od egzekutor funkcije koja mora napraviti provjeru resolve (uspjesno rjeseno) ili reject (neuspjesno rjeseno/odbaceno). Nakon toga sa .them mozemo definirati sto ce se dogoditi u oba slucaja.
*/

const obecanje = new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("Async zadatak je dovrsen");
        resolve();
    }, 1000);
});

obecanje.then(() =>{
    console.log("obecanje je dovrseno....");
});

console.log("pozz iz globalnog, sinkronog koda");

// Promise naravno mozemo pisati i kao anonimne funkcije.
new Promise ((resolve, reject) =>{
    setTimeout(()=>{
        resolve({ime:"igor", prezime:"jevremovic"})
    }, 1000);
}).then((osoba) => console.log(`${osoba.ime} ${osoba.prezime} je tu...`));


// Idemo jos vidjeti kako rijesiti reject situaciju

const dohvatiUsera = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let greska = false;

        if(!greska){
           resolve({ime:"igor", prezime:"jevremovic"});
        }else{
            reject ("nesto je poslo po krivu")
        }
    }, 1000);
});

/*
Kada definiramo sto ce se dogoditi sa resolve dijelom egzekutor funkcije, onda sa .then metodom na tom objektu mozemo definirati sto ce se dogadati nakon toga. A sa .catch metodom cemo vidjeti sto ce se dogadati ako se dogodi reject. .finally ce se odvriti bez obzira da li je objekt zavrsio sa resolve ili reject...
 */

dohvatiUsera.then((osoba) => console.log(`${osoba.ime} ${osoba.prezime} je tu...`)).catch((error) => console.log(error)).finally(()=> console.log("finally ne zanima da li je resolve ili reject, on se bude izvrsio."));

// PRAKTICAN PRIMJER - primjer sa callbackom kako smo vec radili.
/*const imena = [
    {ime:"Marija", prezime:"Maric"},
    {ime:"Iva", prezime:"Ivic"},
];

const kreirajIme = (ime, cb) =>{
    setTimeout(() =>{
        imena.push(ime);
        cb();
    }, 1000);
};

const getImena = () => {
    setTimeout(()=>{
        imena.forEach((osoba)=>{
            const div = document.createElement("div");
            div.innerHTML= `<p>${osoba.ime} ${osoba.prezime}</p>`;
            document.getElementById("imena").appendChild(div);
        });
    }, 1000);
};

kreirajIme({ime:"Ana", prezime:"Anic"}, getImena);
*/

// idemo isto ovo sloziti pomocu obecanja

const imena = [
    {ime:"Marija", prezime:"Maric"},
    {ime:"Iva", prezime:"Ivic"},
];

const kreirajIme = (ime) =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            let greska = false;
            if(!greska){
                imena.push(ime);
                resolve();
            }else{
                reject("nesto je poslo po krivu");
            }
        }, 1000);
    });
    };

const getImena = () => {
    setTimeout(()=>{
        imena.forEach((osoba)=>{
            const div = document.createElement("div");
            div.innerHTML= `<p>${osoba.ime} ${osoba.prezime}</p>`;
            document.getElementById("imena").appendChild(div);
        });
    }, 1000);
};

const pokaziGresku = (error) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${error}</strong>`;
    document.getElementById("imena").appendChild(p);
}

kreirajIme({ ime:"ana", prezime:"anic" }.then(getImena).catch(pokaziGresku));


