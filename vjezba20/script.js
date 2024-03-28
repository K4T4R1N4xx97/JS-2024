"use strict";

let x = new Date();
console.log(x);

x = new Date("2000-01-01T10:00:00");
let y = new Date("01/10/2000 10:00:00")
console.log(x, y);

// toString - prebacivanje objekta u string
x = y.toString();
console.log(x);

// getFullYear metoda dohvaca samo godinu
x = y.getFullYear();
console.log(x);

//getMonth dohvaca samo mjesec
x=y.getMonth() + 1;
console.log(x);

// getDay ako zelimo samo dan (krece od nedjelje sto je 0, a subota je 6)
x=y.getDay();
console.log(x);

// getHours ako zelimo samo sat
x=y.getHours();
console.log(x);

//getMinutes ako zelimo samo minute
x=y.getMinutes();
console.log(x);

// kako dohvatiti datum ali da je na hrvatskom
x=Intl.DateTimeFormat("hr-HR").format(y);
console.log(x);


