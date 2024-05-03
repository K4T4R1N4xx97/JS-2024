/*https://api.chucknorris.io/jokes/categories*/
"use strict";

const dohvatiChuck = async () => {
    try{
        const res = await fetch("https://api.chucknorris.io/jokes/categories");
        const data = await res.json();
        console.log(data);

        const kontejner = document.getElementById("kontejner");
        data.forEach((kategorija) => {
        const vicevi = document.createElement("div");
        vicevi.textContent = kategorija;
        kontejner.appendChild(vicevi);
        });
    } catch (error) {
        console.log("Ovaj kod ne valja", error);
        return;
    };    
};

dohvatiChuck();


