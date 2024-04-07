/*IF petlja ce odvrtiti kod koji se nalazi u bloku, ovisno o tome je li tvrdnja koju provjeravamo istinita ili lažna.*/

if (true) {
    console.log("Funkcioniram jer sam true");
}

if (false) {
    console.log("Ne funkcioniram jer sam false");
}

// prmijer iz prakse

const godina = 19;
const punoljetan = godina >= 18;

if (punoljetan){
    console.log("punoljetan si, možeš glasat.");
}

// isto kao;

if (godina >= 18){
    console.log("Punoljetan si, možeš glasat.");
}

// if-else petlja ce definirati sto ce se dogoditi ako je "IF" tvrdnja istinita a "ELSE" blok ako nije istinita

if (godina <= 18){
console.log("Rezultat provjere je false i ovo se nece izvrtitit.");
} else {
console.log("ovo će se ispisati jer je ovo sada rezultat if/else")
}

// Block scope...
/*definiranje varijavle putem const i let nacina unutar blocka IF nece moci dohvatiti izvan njega, samo unutar njega, medutim ako definiramo tu istu varijablu sa "var" onda se moze povuci izvan njega. */
/*Ali ako definiramo let ili const varijablu izvan IF blocka, ostavimo ju kao undefined, onda ju mozemo povuci u IF block, i ispisati izvan. */
const godRodenja = 1997;
let stoljece;

if (godRodenja > 2000){
    stoljece = 21;
} else {
    stoljece = 20;
}


console.log(stoljece);


/*TRUTHY i FALSY VALUES 
FALSY : 0, Null, undefined, "", Nan (Nisu netocne same po sebi, ali ako ih se pretvori u Boolean vrijednost onda postaju falsy)
TRUTHY : Svaki drugi broj
*/
console.log(Boolean(0)); // kada prebacimo nulu u boolean bit ce false, svi ostali brojevi true
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("")); // takoder prazan string u booleanu je false, ako ima nesto u sebi onda ce biti true
console.log(Boolean(NaN));
console.log(Boolean({}));


/*varijablu broj ce JS automatski probati pretvoriti u boolean vrijednost i nakon toga s njom ce se moci odraditi if/else provjera kao da se ubacila boolean vrijednost*/
const broj = 0;
if(broj){
    console.log("ispisuje se");
} else {
    console.log("ne ispisuje se";)
}





