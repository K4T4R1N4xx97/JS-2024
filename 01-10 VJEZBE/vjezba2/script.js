const ime = "Matko";
const zanimanje = "Profesor";
const godinaRod = 2004;
const trenutaGod = 2024;

/*string literal*/

const osoba = "Ja sam"+ " " + ime + "," + (trenutaGod - godinaRod) + "-godišnji" + " " + zanimanje + ".";
console.log(osoba);

/* Template literal */
/*varijable se pozivaju sa znbakom dolar i unutar viticastih zagrada*/ 

const osobaNovo = `Ja sam ${ime}, ${trenutaGod - godinaRod}-godišnji ${zanimanje}`;
console.log(osobaNovo);


// \n\ služi da prelamanje u drugi red poput <br> u HTML-u
console.log("String\n\ sa\n\ više\n\ linija");

// ZADATAK

const zemlja = "Hrvatska";
const kontinent = "Europi";
const populacija = 3.8e6;

const recenica = `${zemlja} ima ${populacija} stanovnika i nalazi se u ${kontinent}`;
console.log(recenica);

console.log(zemlja.length);

/*Matematicke metode sa brojevima i varijablama*/

let x;

// izracun korjena broja
// upise se Math. i onda on ponudi izracune
x = Math.sqrt(16); // korijen broja
x = Math.abs (5); // apsolutna vrijednost
x = Math.round (5.2); // zaokruživanje na puni broj
x = Math.ceil(5.2); // prisilno zaokruživanje na gore
x = Math.floor(5.9); // prisilno zaokruživanje na dolje
x = Math.trunc(4.4); // uklanjanje decimalne vrijednosti
x = Math.min(2, 5, 6, 7, 1) // minimalni broj iz niza brojeva
x = Math.max(2, 5, 6, 7, 1) // maksimalni broj iz niza brojeva
x = Math.random(); // dobivanje random broja između 0 i 1


console.log(x)

//ZADATAK

let randomBroj = Math.floor(Math.random() * 10 + 1);

randomBroj = Math.trunc(Math.random() * 10 + 1);
console.log(randomBroj);


// ZADATAK 2

let varijablaA = Math.trunc(Math.random() * 100 + 1); 
let varijablaB = Math.trunc(Math.random() * 50 + 1);
console.log(varijablaA, varijablaB);

const zbroj = varijablaA + varijablaB;
const oduzimanje = varijablaA - varijablaB;
console.log(zbroj, oduzimanje);

const primjer1 =`Zbroj varijable a i b je ${zbroj}`;
const primjer2 =`Razlika varijable a i b je ${oduzimanje}`

console.log(primjer1,'a', primjer2)





