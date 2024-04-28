"use strict";

const obecanje = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({ime:"igor", prezime: "blabla"})
    }, 1000);
});

obecanje.then((data) => console.log(data));

/* Ovako nešto bi mogli napisati i koristeci async/await metodu */

async function cekajObecanje(){
    const odgovor = await obecanje;
    console.log(odgovor);
}
cekajObecanje();

/*Ajmo vidjeti kako bi koristili async/await metodu za dohvacanje sa API-a
prvo definiramo da je funkcija asinkrona sa Async funkcijom, nakon toga res spremamo pomocu fetcha ali na nacin da upotrijebimo await ili ti cekanje da se fetch odvrti i rezultat spremi. I naravno onda taj response spremamo u varijablu data takoder pomocu awaita koji je asinkroni task response...
*/

async function dohvatiUsera() {
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
console.log(data);
};
dohvatiUsera();


function useriA() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data);
    });
};
useriA();

// isti task napisan sa Async/Await arrow funkcijom

const dohvatiUsera2 = async () =>{
const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();
console.log(data);
};
dohvatiUsera2();

/*
Idemo probati vidjeti kako koristiti try/catch koji ce nam pomoci da rijesimo errore...0
*/

const useri = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
};