// KONVERZIJE VRSTA PODATAKA - TYPE CONVERSION

const inputGodina = "2000";

// parseInt je za pretvaranje stringa u broj
const godina1 = parseInt(inputGodina);


// Number je za pretvaranje stringa u broj
const godina2 = Number(inputGodina);


// dodavanje plusa + ispred stringa pretvara ga u broj
const godina3 = +inputGodina;


// konvertiranje broja u string
const stringGodina = String(godina1);


console.log(typeof stringGodina, stringGodina);
console.log(stringGodina + 18);

const decBroj = "10.5";

const stringdecBroj1 = parseInt(decBroj);
// parseFloat da pretvorimo u broj ali da nam ostane decimalan broj
const stringdecBroj2 = parseFloat(decBroj);

console.log(stringdecBroj2);

console.log(Number("katarina"));
console.log(String(23));

/*-----------------------------------------------------------*/

//PRISILNA- AUTOMATSKA KONCERZIJA VRSTE PODATAKA - TYPE COERCION

console.log("ja imam " + 1 + " auto");

// ovo funkcionira jer oduzimanje u ovoj varijani JS prepoznaje i pretvara sve u brojeve
console.log("23" - "10" - 3);

/* ovdje ne funkcionira odmah na isti nacin jer se prvo "kontateniraju" u string "2310" i nakon toga pretvaraju sve u broj*/
console.log("23" + "10" - 3);

// zbrajanje s boolean vrijednostima true pretvara u broj 1, a false u broj 0
console.log(5 + true);
console.log(5 + false);

// Ako zbrojimo s undefined dobijemo "Nun - not a number" jer ne znamo koji je ovo broj.
console.log(5 + undefined);

/*Kod brojeva, ako radimo matematičke operacije s brojevima "+, -. *, /", zbarjanje moze dovesti do kontatenacije stringova, ako je samo jedan od 2 broja u obliku stringa*/
/*Sve osim plusa ce raditi normalno.*/
console.log("24" / "2");
console.log("25" + "10" - 5);

console.log(100 + 24 + "12" + 2 + 3 + 4);





