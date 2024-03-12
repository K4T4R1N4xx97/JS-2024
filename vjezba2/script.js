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