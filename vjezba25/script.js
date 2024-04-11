"use strict";

/*
const inputKey = document.getElementById("zadatak-input");

const keyDown = (e) => {
    if(e.key === "Enter"){
        alert("stisnio si tipku enter");
    }

    if (e.repeat){
        alert("pusti tipku jebote");
    }
};

inputKey.addEventListener("keydown", keyDown);


const onKeyPress = (e) => {
    console.log("keypress");
   
};
const keyUp = () => {
    console.log("keyup");
};

inputKey.addEventListener("keypress", onKeyPress); // bilo sto da stisnete clg-at ce se
inputKey.addEventListener("keydown", keyDown); // cim stisnete enter, okinut ce alert
inputKey.addEventListener("keyup", keyUp); // clg ce se okinut tek kad stisnemo i maknemo prst sa tipke


// input events

const inputForma = document.getElementById("filter");
const naslov = document.querySelector("h2");

const onInput = (e) => {
    console.log(e.target.value); // value nam ispisuje u konzoli dosl sve sto mi upisemo u taj input
    naslov.textContent = e.target.value; // s ovime sto upisujemo u inputu se ispisuje na mjestu od H2, u real time-u
};

const onFocus = ( )=>{
console.log("input je u fokusu");
};

const onBlur = ( ) =>{
    console.log("input nije u fokusu");
};

inputForma.addEventListener("input", onInput); // input ce raditi isto sto i keydown ali ga je bolje upotrijebiti kad je input polje
inputForma.addEventListener("focus", onFocus); // provjerava da li smo kliknuli na input polje
inputForma.addEventListener("blur", onBlur); // provjerava jesmo li kliknuli izvan input polja
*/

const forma = document.getElementById("zadatak-forma");

const onSubmit = (e) => {
    e.preventDefault(); // ovo moramo dodati kako ne bi forma nestala nakon refresha, bez ovoga odmah nestaje
    const zadatak = document.getElementById("zadatak-input");
    if(zadatak.value===""){
        alert("Nisi nista napisala, napisi nesto");
        return;
    }
    console.log(zadatak.value);
};

forma.addEventListener("submit", onSubmit); 

// EVENT BUBBLING - dogada se kada postavimo vise event listenera na "isto" mjesto u HTMl-u...

const gumb = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

gumb.addEventListener("click", (e) => {
    alert("gumb je stisnut");
    e.stopPropagation(); // ovo dodajemo ako zelimo zaustaviti evente nakon ovog, odnosno kako bi sprijecili bubbling
});

div.addEventListener("click", () => {
    alert("div je stisnut");
});

form.addEventListener("click", () => {
    alert("forma je kliknuta");
});

// brisanje elementa iz HTML DOM-a

const lista = document.querySelector("#zadatak-list");

lista.addEventListener("click", (e) => {
    if(e.target.className === "pojedinacni-zadatak"){
        e.target.remove();
    }
});

lista.addEventListener("mouseover", (e) => {
    if (e.target.className === "pojedinacni-zadatak"){
        e.target.style.color = "#ff0000";
    }
});

