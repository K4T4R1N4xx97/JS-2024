"use strict";

/*  Getters and setters u klasama
Getteri nam sluze da dohvatimo svojstva iz klase
Setteri nam sluze da promijenimo svojstva iz klse (mijenjajuci svojstvo iz klase van klase)
*/
/* zašto to pisati umjesto metode?? Getteri su na neki način isto metode, ali ideja je da nam omogucavaju dohvacanje nekih informacija za objekte */
class User {
    constructor (id, ime, prezime) {
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
    }

    get punoIme(){
        return `${this.ime} ${this.prezime}`;
    }

    set punoIme(input){
    const listaOdInputa = input.split(" ");
    console.log(listaOdInputa);
    this.ime = listaOdInputa[0];
    this.prezime = listaOdInputa[1];
    }
    /* Recimo da zelimo dodati novo ime i zelimo promijeniti imamo li takvo ime vec kao objekt. Mozemo koristiti staticne metoce u klasama. Kada pozivamo staticne metode iz klasa, onda zovemo staticnu metodu direktno na klasi. 
    Staticne funkcije gledajte iskljucivo kao pomocne funkcije koje vam mogu odraditi odredene provjere...  */
    static provjera(x, y){
        return x.ime === y.ime && x.prezime === y.prezime;
    }
}

const user1 = new User(1, "Kaya", "Sokolic");
const user2 = new User(2,"maja", "majic");

user1.punoIme = "Ivan Ivić";

console.log(user1.punoIme);

console.log(user1.ime);
console.log(user2.ime);

console.log(User.provjera(user1, user2));




