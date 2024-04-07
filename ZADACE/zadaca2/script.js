const europskeZemlje = 33e6;
const hrvatska = 3.8e6;
console.log(europskeZemlje, hrvatska);

const prosjek = hrvatska > europskeZemlje;
console.log(prosjek);

if(prosjek){
    const prosjek1 = `Prosjek populacije Hrvatske ${hrvatska} je veći od prosjeka populacije EU ${europskeZemlje}.`;
    console.log(prosjek1);
} else {
    const prosjek2 = `Prosjek populacije Hrvatske ${hrvatska} je manji od prosjeka populacije EU ${europskeZemlje}.`;
    console.log(prosjek2);
}

/*--------------------------------------------------------------------------*/

let tezinaMarko = 78;
const visinaMarko = 1.69;
console.log(tezinaMarko, visinaMarko);

let tezinaJosip = 92;
const visinaJosip = 1.95;
console.log(tezinaJosip, visinaJosip);

const itmMarko = tezinaMarko / visinaMarko **2;
console.log(itmMarko);

const itmJosip = tezinaJosip / visinaJosip **2;
console.log(itmJosip);

if (itmJosip > itmMarko){
    const koeficijentMarko = "Markov koeficijent mase je veći od Josipovog.";
    console.log(koeficijentMarko);
} else {
    const koeficijentJosip = "Josipov koeficijent mase je veći od Markovog.";
    console.log(koeficijentJosip);
}

/*--------------------------------------------------------------------------*/

const otok = false;
const kopno = true;
const engleskiJezik = true;
const hrvatskiJezik = false;
const populacija = hrvatska < 50e6;
console.log(populacija);

const drzavaHrvatska = kopno && hrvatskiJezik && populacija;
console.log(drzavaHrvatska);
const drugaDrzava = kopno || engleskiJezik || populacija;
console.log(drugaDrzava);


if(drzavaHrvatska){
    console.log("Zemlja u kojoj želite živjeti je Hrvatska.");
} else{
    console.log("Hrvatska nije za Vas.");
}

/*--------------------------------------------------------------------------*/

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);






