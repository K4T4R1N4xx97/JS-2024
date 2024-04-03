/*console.log("gol 1");
console.log("gol 2");
console.log("gol 3");
console.log("gol 4");
console.log("gol 5");
console.log("gol 6");
console.log("gol 7");
console.log("gol 8");
console.log("gol 9");
console.log("gol 10");
UMJESTO OVOGA KORISTITI "FOR"
*/

for (let ponavljanje = 1; ponavljanje <= 10; ponavljanje++){
    console.log(`gol ${ponavljanje}`);
}

const lista = ["stol", "stolica", "stoljnjak", "vaza"];

for (let i = 0; i < lista.length; i++) { 
    console.log(lista[i]);
}

// lista, nizovi, array - ovjektni tip podatka

const prijatelj1 = "Luka";
const prijatelj2 = "Ivan";
const prijatelj3 = "Hrvoja";

const prijatelji = ["Luka", "Hrvoje", "Ivan"];

//ispisati prvog clana liste
console.log(prijatelji[0]);

//za provjeriti koliko je stavki u listi
console.log(prijatelji.length);

//kako ispisati zadnju stavku unutar liste ako nisi siguran koliko stvki ima u listi
console.log( prijatelji[prijatelji.length - 1]);

prijatelji[2] = "Stjepan";
console.log(prijatelji);

/*----------------------------------------------------*/
/*vrijednost const varijable se ne moze mijanjeti na primitivnim vrijednostima. Lista nije primitivna vrijednost, stoga mozemo s obziom da se zapisuje u drugu vrstu memorije mijanjati njezine vrijednosti*/

/*
OVAKVO REDEFINIRANJE NIJE MOGUCE KOD LISTI
const prijatelji = ["nova lista"];
prijatelji = ["nova lista"];
*/

// jednostavne metode listi

//dodavanje nove stavke na pocetak liste
prijatelji.unshift("Barbara");
console.log(prijatelji);

//dodavanje nove stavke na kraj liste
prijatelji.push("Maja");
console.log(prijatelji);

prijatelji.shift(); // micanje prvog clana iz liste
console.log(prijatelji);

prijatelji.pop(); // micanje zadnjeg clana iz liste
console.log(prijatelji);

prijatelji.reverse(); // mijenjamo slijed liste
console.log(prijatelji);

// jednostavne metode na brojevnim listama

const godine = new Array(24, 28, 32, 36, 42, 58);

let x;

x = godine.includes(28); // provjeravanje imali te vrijednosti unutar liste, boolean
x = godine.indexOf(28); // provjera na kojem mjestu se nalazi trazena vrijednost
x = godine.indexOf(35); // ako stavimo neku stavku koja ne postoji unutar liste dobijemo -1

x = godine.slice(1); // slice metoda sluzi da maknemo odredeni broj clanova s pocetka liste
x = godine.slice(1, 5); // od kojeg do kojeg clana kiste zelimo izvuci 

x = godine.splice(4, 2); /*Splice metodom razbijam postojecu listu na 2 liste, prvi parametar definiram od kojeg do kojeg clana liste krecem. A drugi parametar definira koliko clanova liste uzimam i spremam u novu listu. Clanovi automatski prestaju biti clanovi originalne liste*/
console.log(godine, x);




