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
    console.log("Ovoce se ispisati.")
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










