/* shift + alt + a je shortcut za umetnit komentar */

const js = "JS je suuuuper"; //const se odmah mora inicijalizirati i ne moze se mijenjat

/* let nacin definiranja varijabli se moze deklarirati i naknadno inicijalizirati te mijenjati vrijednosti */
// let js2;
js2 = "blabla";

var varijablaX = 5;

console.log(js);
console.log(js2, varijablaX);

//brojevi
const dob = 26;

//teskst - string (uvijek u navodnike, svejedno koje)
const imePrezime = "Katarina Sokolić";

//boolean moze biti samo true ili false
const polaznik = true;

//undefined npr. varijabla kojoj nismo dodijelili vrijednost (ne moze se koristit const)
let brojPrisutnih;

//postoji i null, ali o tome kasnije....

console.log(dob, imePrezime, polaznik, brojPrisutnih);
console.log(typeof dob, typeof imePrezime, typeof polaznik, typeof brojPrisutnih);

brojPrisutnih = 23;
console.log(brojPrisutnih, typeof brojPrisutnih);


// matematički operateri

const godineStarostiJosip = 2024 - 1994;
console.log(godineStarostiJosip);

const trenutnaGod = 2024;
const godineStarostiJura = trenutnaGod - 2003;
const godineStarostSara = trenutnaGod - 2001;

console.log(godineStarostSara, godineStarostiJura);
console.log(godineStarostSara * 2, godineStarostiJosip / 2);

let x = 10 + 5;
// x = x + 10;
x +=10;
x *=4;
x = x + 1;
//uvecacanje i umanjenje varijabli za 1
x++;
x--;

console.log(x);

// usporedni operateri >, <, <=, =>, BOOLEAN uvijek true ili false
console.log(godineStarostSara > godineStarostiJura);

const punoljetan = godineStarostiJura >= 18;
console.log(punoljetan);

// kombiniranje matematickih i usporednih operatera

console.log(trenutnaGod - 1991 > trenutnaGod - 1988);

// spajanje vrijednosti

const ime = "Ivan";
const prezime = "Ivanic";
console.log(ime," ",prezime);


let y, z;
y = z = 25 -10 - 5;

console.log(y, z);

// ZADATAK

const name = "Katarina";
const surname = "Sokolić";
let years = 26;
const birthday = true;
console.log(name, surname, years, birthday);





