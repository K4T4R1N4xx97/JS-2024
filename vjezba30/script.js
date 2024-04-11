"use strict";

const izmjena = (e) => {
    e.target.classList.toggle("crvena");
};

document.querySelector("button").addEventListener("click", izmjena);


// idemo simulirati API poziv koji dohvaca listu imena
const imena = [
    {ime:"ivan", prezime:"horvat"},
    {ime:"jura", prezime:"juric"},
];

const kreirajIme = (ime, cb)=>{
    setTimeout(()=>{
        imena.push(ime);
        cb();
    },2000);
};

const getImena = () =>{
    setTimeout(()=>{
        imena.forEach((e)=>{
            const div = document.createElement("div");
            div.innerHTML = `<strong>${e.ime} ${e.prezime}</strong>`
            document.getElementById("imena").appendChild(div);
        });        
    },1000)
    };

   
    kreirajIme({ime:"maja", prezime:"majic"}, getImena);
