"use strict";

const objekt1 = {
    a: 1,
    b: 2,
};

const objekt2 = {
    c: 3,
    d: 4,
};

// spread operator metoda kod objekata
const objekt3 = {...objekt1, ...objekt2};
console.log(objekt3);

// assign metoda kod objekata
const objekt4 = Object.assign({}, objekt1, objekt2);
console.log(objekt4);

const todos = [
    {id: 1, zadatak:"kupi kruh"},
    {id: 2, zadatak:"kupi mlijeko"},
    {id: 3, zadatak:"kupi mlijeko"},
]

console.log(todos[1].zadatak);

// pomocu keys metode na object svojstvu mozemo dohvatiti kljuceve clana liste (u ovom slucajju clana liste koji je objekt)

let x = Object.keys(todos[0]);
console.log(x);

console.log("2" + 2);
console.log(2 + "2")

