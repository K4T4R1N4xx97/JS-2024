const godina = 18;

/*Ovo ce se ispisati jer stroga (strict) provjera ce provjeriti vrijednost podataka i tipove podataka, i ako se oboje slaze, onda ce to biti true*/
if(godina === 18){
    console.log("Punoljetni ste.")
}

// ovo se nece ispisati, vrijednost je jednaka, ali tipovi nisu string nije jednak broju.
if("18" === 18){
    console.log("Ovo se nece ispisati");
}

// ovo ce se ispisati jer nije stroga provjera, provjerava samo vrijednost, a tipove vrijednosti ne provjerava
if("18" == 18){
    console.log("Ovo ce se ispisati.")
}

// Prakticni primjer
/*
 const broj = Number(prompt("Koji ti je najdrazi broj?"));
 console.log(broj, typeof broj);

 if(broj === 1){
    console.log("Broj 1 je top.")
 } else {
    console.log("1 je zakon broj zasto ga niste upisali")
 }
*/
 
// i / ili operateri


const istina = true;
const laz = false;

// svi moraju biti true, da bi na kraju bio rezultat TRUE, ako je samo jedan FALSE, svi ce biti
console.log(istina && laz && true);

// dovoljno je da je samo jedan true i svi ce biti TRUE
console.log(istina || laz || false);



// not operator
const punoljetan = true;
// usklicnik na pocetku odredene varijable pretvara tu istu u suprotnu vrijednost true - false 
if (istina && !punoljetan){
    console.log("ovo je istinita tvrdnja i ispisati ce se.")
}

/* Nullish coalescing operator (nulti operator spajanja) - logicki operator koji ce vratiti operand sa desne strane ako je sa lijeve strane vrijednost operanda null ili undefined, inace ce vratiti lijevog operanda (za razliku od truthy i falsy koji ce vratiti i 0 i prazan string)*/

let nullish;

nullish = 10 ?? 20;
nullish = "lijeva" ?? "desna";
nullish = "" ?? "desna";
nullish = 0 ?? "desna";
nullish = null ?? "desna";

console.log(nullish);


/* %% ce vratiti prvu falsy vrijednost ili zadnju trthuy vrijednost*/
let x;
x = 10 && 20 && 30;
x = 10 && 20;
x = 10 && "" && 0 && 20;

console.log(x)

let lista = [];
console.log(lista[0]);

// primjer: lista.lenght nije veca od nule, samim time se nece odvrtiti console.log desno od $$ operanda
lista.length > 0 && console.log(lista[0]);

// ovdje imamo clanove linste, samim time je duzina liste veca od 0 i console.log ce se ispisati
lista = [1, 2];
lista.length > 0 && console.log(lista[0]);

/* || ce vratiti prvu truthy vrijednost ili zadnju falsy vrijednost*/
 let y;

 y = 10 || 20;

 console.log(y);

/*par primjera primjene ovakve sintakse prilikom definiranja vrijednosti varijable*/

let a = false;

/*if (!a){
  a = 10;
}*/

// osta stvar koristeci || operator

a = a || 10;
console.log(a);

// kraci nacin

a ||= 10;
console.log(a);

/*---------------------------------------------------*/

let b = 20;
if(b){
    b = 30;
}

/*---------------------------------------------------*/

b = b && 40;
b &&= 50;

console.log(b);

/*---------------------------------------------------*/
// ista stvar kuristeci ?? operator (nullish)

let c = undefined;

if (c === undefined){
    c = 20;
}

c = c ?? 20;
c ??= 20;

console.log(c);



















