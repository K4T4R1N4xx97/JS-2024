"use strict";


// ako zelimo, mozemo definirati vrijednosti izvan ovjekta i povuci ga unutar njega.
const ime = "Darko";
const prezime = "Horvat";
const godine = 30;

// ako nam je ime svojstva objekta jednako varijbli pomocu koje dodjeljujemo vrijednost, mozemo skraceno napisati u jednom redu, ne moramp nabrajati
const osoba = {
    // ime: ime,
    // prezime: prezime,
    // godine: godine,
     ime, prezime, godine
    };
console.log(osoba);

/*------------------------------------------------------------------*/

// DEKONSTRUIRANJE OBJEKTA/LISTI

// 1. dekonstruiranje liste
const brojevi = [1, 2, 3, 4, 5, 6];
// uz pomoc SPREAD operatora ... mozemo ostatak liste ispisati (i onda ce biti lista u listi);
const [broj1, broj2, ...ostatakListe] = brojevi;
console.log(broj1, broj2, ostatakListe);

// s praznim razmakom izmedu zareza, preskacemo stavku unutar liste
const [num1, ,num3] = brojevi;
console.log(num1, num3);

/*-----------------------------------------------------------------*/
// 2. dekonstruiranje objekta
const todo = {
    id: 1,
    zadatak: "kupi kruh",
    adresa: {
        ulica: "trg trgovine",
        grad: "sisak",
    },
};
/*
// dohvacanje jedne stavke iz objekta prvo se imenuje objekt stavi se točka i onda stavka
const id = todo.id;
console.log(id);*/

const {id, zadatak, adresa} = todo;
console.log(id, zadatak);

// ovako se izvlaci svojstvo iz podovjekta unutar objekta
const {
    adresa: {ulica},
} = todo;
console.log(ulica);

// ovako se također izvlaci svojstvo
const grad = todo.adresa.grad;
console.log(grad);

/*-------------------------------------------------------------------*/





