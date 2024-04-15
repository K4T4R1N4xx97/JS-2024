"use strict";


/*hyperText transfer protocol je protokol za slanje i primanje podataka na webu. Zahtjev inicijalizirate vi (klijent), a server ce reagirati sa odgovora. Odogovor moze sadrzavati HTML/CSS/JS filove, slike ili druge resurse

najcesce dohvacamo, podatke i ispisujemo ih putem DOM manipulacije, ili updateamo odredene podatke.

imamo GET, POST, PUT&PATCH (EDIT), DELETE zahtjeve.

GET - trazi podatke sa servera.
POST - salje podatke na server.
PUT&PATCH - brise podatke sa servera.
DELETE - brise podatke sa servera.

HTTP satus kodovi:

100 - continue

200 - uspjeh
201 - uspjeh (nesto je kreirano)
204 - uspjeh (nema sadrzaja)

300 - redirecti
301 - trajni redirect
302 - privremeni redirect

400 - error kod klijenta (bad request)
401 - neautoriziran zahtjev
403 - zabranjeni zahtjev
404 - zahtjev za necim sto nepostoji (server ne moze naci)

500 - greska na serveru
*/
/*https://httpstat.us/  - stranica s popisom statusa*/

/*XMLHttpRequest je objekt ugraden u nasem browseru koji nam omogucava da radimo zahtjeve prema serveru bez refresha. To nam omogucava dinamicko ponasanje stranice.
*/

/*Moramo definirati nas XMLHttpeRequest kao novi objekt koji ce sadrzavati nase podatke, mmoramo definirati metodu i moramo deinirati url...*/
const xhr = new XMLHttpRequest();
const metoda = "GET";
const url ="./imena.json";

// open metoda na nasem XMLHttpRequestu inicijalizira HTTP zahtjev  i zaprima 2 parametra, metodu i adresu
xhr.open(metoda, url);

/*Nakon inicijaliziranja HTTP zahtjeva mozemo sa event handlerom na nasem objektu koji se zove onreadystatechange upravljati nasim readyState svojstvom. Readystate sadrzi stanje/status u kojem se nas XMLHttpRequest klijent nalazi...*/
xhr.onreadystatechange = function (){
console.log(this.readyState);
console.log(this.status);
};

// nakon svega jos moramo i poslati nas HTTP zahtjev a to radimo sa SEND metodom na nasem XMLHttpRequestu.
xhr.send();

/*
Postoji 5 mogucih rjesenja za nas readyState:
0 - zahtjev nije inicijaliziran
1 - server konekcija je uspostavljena
2 - zahtjev je zaprimljen
3 - procesuiranje zahtjeva
4 - zahtjev je zavrsio i odgovor je spreman
*/

const xhr2 = new XMLHttpRequest();

xhr2.open(metoda, url);

xhr2.onreadystatechange = function (){
  if(this.readyState === 4 && this.status === 200)  {
    const data = JSON.parse(this.response);
    data.forEach ((osoba) =>{
        const li = document.createElement("li");
        li.innerHTML = `${osoba.ime} ${osoba.prezime} ima ${osoba.godina} godina/e.`
        document.getElementById("imena").appendChild(li);
    });
  }
};

xhr2.send();

// primjer dohvacanja usera s githuba
const xhr3 = new XMLHttpRequest();
xhr3.open("GET", "https://api.github.com/users");

xhr3.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.response);
        data.forEach((user) =>{
            const li = document.createElement("li");
            li.innerHTML = `${user.login} je github korisnik`;
            document.getElementById("useri").appendChild("li");
        })
    }
};

xhr3.send();


