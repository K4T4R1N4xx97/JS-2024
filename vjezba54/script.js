"use strict";

const gumb = document.querySelector("#gumb");
const ispis = document.querySelector("#ispis");


gumb.addEventListener("click", () => {
    debugger;
    if (gumb.innerText === "update"){
        gumb.innerText = "klikni me";
        ispis.innerText = "";
        return;
    }; 

    let tekst = "update";
    gumb.innerText = tekst;
    handleIspis
    nutriBUllet(4, 6);
    nutriBUllet(2, 3);
    nutriBUllet(5, 1);
});

function handleIspis() {
    debugger;
    let sadrzaj = "gumb je stisnut";
    ispis.innerText = sadrzaj;
};

function komadiVoca(voce){
    debugger;
    return voce *4;
};

function nutriBUllet(jabuke, narance){
    debugger;
    const komadiJabuke = komadiVoca(jabuke);
    const komadiNarance = komadiVoca(narance);
    const sok = `Sok od ${komadiJabuke} komada jabuka i ${komadiNarance} komada narance...`
    console.log(sok);
};

