"use strict";

const countrySearch = async () => {
    try{
        const linkToFetch = await fetch("https://restcountries.com/v3.1/name/eesti");
        const data = await linkToFetch.json();
        console.log(data);

        const kontejner = document.getElementById("kontejner");
        data.forEach((drzava) => {
            const drzave = document.createElement("div");
            drzave.textContent = `${drzava.capital}`;
            kontejner.appendChild(drzave);
        });
    } catch (error){
        console.log("Ovo ne valja", error);
        return;
    };
};

countrySearch();



