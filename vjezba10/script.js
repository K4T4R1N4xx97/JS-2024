// na ovaj nacin deklariramo funkciju i njen kod koji se izvrsava kada se funkcija pokrene
function ispis() {
    console.log("zovem se Katarina");
}
//funksija se pokrece na ovaj nacin (calling, running, invoking, executing a funkction)
//ako ju pozovem 5 puta onda ce se 5 puta i pozvati ta ista funkcija
ispis();
ispis();
ispis();
ispis();
ispis();

/* Kod deklaracije funkcije, moguce je napraviti inicjaliziranje u redovima prije funkcije, drugim rijecima mozemo ju hoistat iznad funkcije i sve ce raditi. 'Hoistanje znaci postavljanje iznad'*/
const test = nutriBullet(7,2);

function nutriBullet (jabuka, kruska){
    console.log(jabuka, kruska);
    const sok = `sok od ${jabuka} jabuke i ${kruska} kruske`;
    return sok;
    console.log("ovo se nece vrtiti jer dolazi nakon returna");
}

//da bismo ispisali "const = sok" moramo postaviti nove varijable izvan funkcije, jer se izvrsila prva funkcija vec
const sokOdJabuke = nutriBullet(5, 1);
const sokOdKruske = nutriBullet(2, 4);
console.log(sokOdJabuke, sokOdKruske, test);

// ARROW funkcija
// arrow funkcija ima jednostavniju sintaksu, ona se ne moze HOISTAT i ne mozemo naknadno napisati iznad nje.

const rodenje = function (godrodjenja){
    return 2024 - godrodjenja;
}

console.log(rodenje(2001));

// ista funkcija napisana arrow funkcijskom sintaksom
const arrowRodenje = (godrodjenja) => 2024 - godrodjenja;

//primjer arrow 
const funkcijaPrimjer = (godrodjenja) => {
    const izracun = 2021 - godrodjenja;
    return izracun;
}

console.log(arrowRodenje(2003));
console.log(arrowRodenje(2004));

// PRIMJER 2 ARROW FUNKCIJA

const godinaDoMirovine = (godRodenja, imePrezime) => {
const godine = 2024 - godRodenja;
const mirovina = 65 - godine;
if (mirovina > 0) {
    return `${imePrezime} ce se umiroviti za ${mirovina} godina/e`;
} else {
    return `${imePrezime} je vec u mirovini.`
}
};
console.log(godinaDoMirovine(2002, "Stjepan Stjepic"))

















