"use strict";

// JSON FILE FORMAT
const post = {
    id:1,
    naslov:"prvi post",
    sadrzaj: "ovo je sadrzaj",
    autor:"igor",
};

// stringify pretvaramo objekt u JSON format (sve je string), osim brojeva, oni uvijek ostaju brojevi
const jsonFile = JSON.stringify(post);
console.log(jsonFile);

// nece funkcionirat da dohvati id jer nije objekt
console.log(jsonFile.id);

// parse metodom pretvaramo JSON format nazad u objekt
const objectFile  = JSON.parse(jsonFile);
console.log(objectFile);

// sad ce funkcionirat da dohvatim id jer je objekt
console.log(objectFile.id);

// ASINKRONI KOD

setTimeout (() =>{
    console.log("pozz iz setTimeouta")
}, 0);

console.log("pozdrav izvan setTimeouta")


const promijeniText = () => {
    document.getElementById("naslov").textContent ="pozz iz setTimeout callback funkcije"
}

const promjena = setTimeout(promijeniText, 5000);

document.getElementById("stop").addEventListener("click", () =>{
    clearTimeout(promjena);
    console.log("SetTimeout je otkazan");
});

// setInterval - primjer

const ispis = () =>{
    console.log("ispis");
};

const interval = setInterval(ispis, 1000);

document.getElementById("stop1").addEventListener("click", () =>{
    clearInterval(interval);
});

// primjer intervala

let = intervalBoja;

const promjenaBoja = () => {
    if(document.body.style.backgroundcolor !== "black"){
        document.body.style.backgroundcolor = "black"
        document.body.style.color = "white";
    }else{
        document.body.style.backgroundcolor = "white";
        document.body.style.color = "black";
    }
};

document.getElementById("pokreni").addEventListener("click",() => {
    intervalBoja = setInterval(promjenaBoja, 1000);
} );

document.getElementById("stop1").addEventListener("click", () => {
    clearInterval(intervalBoja);
    intervalBoja = undefined;
});

