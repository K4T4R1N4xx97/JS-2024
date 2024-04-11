/*U nasem browseru imamo lokalno i sesijsko spremanje podataka. Podaci se spremaju po principu kljuc-vrijednost i zapisani su kao string. 
Razlika je u tome da sesijsko spremanje traje sve dok ne zatvorimo stranicu, dok je lokalno zapisano u browseru i nece nestati nakon sto se stranica zatvori. Ovo je naravno individualno i bit ce zapisano samo u browseru kod klijenta. Ono sto je jos bitno je da s obzirom da metode za spremanje podataka ne mogu spremati objekte, moramo ih prvo stringify metodom pretvoriti (objekte) u stringove i onda tek mozemo spremiti u localStorage i kada dohvacamo iz localStoragea moramo pretvoriti stringove u objekt parse metodom.

localStorage.setItem("imeKljuca", "vrijednost koju spremamo"); // ovo sprema vrijednost sa kljucem
localStorage.getItem("imeKljuca"); // dohvaca vrijednost zapisanu na trazenom (upisanom) kljucu
localStorage.removeItem("imeKljuca") // brise kljuc i vrijednost na trazenom kljucu
localStorage.clear(); // Clear metoda brise sve zapisano u localStoreage-u
*/

"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// funkcija za povlacenje zadataka iz local spremista

const prikaziZadatkeLS = () => {
const zadaciSpremiste = dohvatiLocalStorage();
zadaciSpremiste.forEach((zadatak) => kreirajZadatak(zadatak))
provjeriListu();
}

// funkcija za kreiranje novog zadatka
const dodajZadatak = (e) => {
    e.preventDefault();

    const noviZadatak = zadatakInput.value.trim();

    if(zadatakInput.value === "" ){
        alert("Molimo unesite zadatak");
        return;
    } else {
        kreirajZadatak(noviZadatak);

        provjeriListu();

        // pozivanje funkcije za dodavanje novog zadatka u localStorage
        dodajLocalStorage(noviZadatak);
    
        zadatakInput.value ="";
    }
    
};

// funkcija za kreiranje zadatka
const kreirajZadatak = (noviZadatak)=>{
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(noviZadatak));
    console.log(li);

    const delGumb = document.createElement("button");
    delGumb.className = "ukloni-zadatak btn-link";

    const ikona = document.createElement("i");
    ikona.className ="fa-solid fa-xmark";

    delGumb.appendChild(ikona);
    li.appendChild(delGumb);
    listaZadataka.appendChild(li);
}

/*Funkcija za dodavanje podataka u localStorage. Prvo moramo provjeriti imammo li vec zadatke u localStoreage. ako nemamo (provjera sa if petljom), onda cemo definirati nasu varijablu kao praznu lstu, s druge strane ako imamo nesto onda cemo prvo spremiti ono sto se nalazi unutra u nasu varijablu. Ali s obzirom da localStoreagu imamo stringove(JSON format) moramo ih odmah parse metodom pretvoriti u objekt.*/

const dodajLocalStorage = (zadatakInput) => {
    
    const zadaciSpremiste = dohvatiLocalStorage();
    // push metodom cemo spremiti novi zadatak u nasu listu zadataka
    zadaciSpremiste.push(zadatakInput);

    // kada dodamo novi zadatak, onda ga trebamo spremiti pomocu nase liste u localStorage kao string, stoga koristimo stringify metodu.
    localStorage.setItem("kljuc", JSON.stringify(zadaciSpremiste));
};


// funkcija za sohvacanje iz localStoragea
const dohvatiLocalStorage = ( )=>{
    let zadaciSpremiste;

    if(localStorage.getItem("kljuc") === null){
        zadaciSpremiste = [];
    }else{
        zadaciSpremiste = JSON.parse(localStorage.getItem("kljuc"))
    }

    return zadaciSpremiste;
};

// funkcija za brisanje zadataka pojedinacno
const obrisiZadatak = (e) => {
    if (e.target.parentElement.classList.contains("ukloni-zadatak")){
        e.target.parentElement.parentElement.remove();
    }
    provjeriListu();
};

// funkcija za brisanje svih zadataka od jednom
const obrisiZadatke = () => {
    listaZadataka.innerHTML= "";
    provjeriListu();
}

// funkcija za filtriranje zadataka
const filtrirajZadatke = (e) =>{
    const zadaci = listaZadataka.querySelectorAll("li");
    const tekst = e.target.value.toLowerCase(); //to ce sve prebacivati u mala slova kad bude usporedivao
    
    zadaci.forEach((zadatak) =>{
        const imeZadatka =  zadatak.firstChild.textContent.toLowerCase();//to ce sve prebacivati u mala slova kad bude usporedivao
        console.log(imeZadatka);
        if (imeZadatka.indexOf(tekst) != -1) {
            zadatak.style.display="flex";
        } else {
            zadatak.style.display="none";
        }
    });
};



// funkcija za provjeru ima li elemenata u listi
const provjeriListu = () => {
    const zadaci = listaZadataka.querySelectorAll("li");
    if(zadaci.length === 0){
        filter.style.display= "none";
        brisiSve.style.display= "none";
    }else{
        filter.style.display ="block";
        brisiSve.style.display ="block";
    }
};

// event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);

/*Napravit cemo event Listener koji ce se okinuti kada se dokument ucitava i za event cemo postaviti trenutak kad se ucita DOM i definitrat cemo funkciju koja ce ispisati podatke iz lokalnog spremista. S obzirom da se to prvo u biti bude odradilo tu funkciju cemo postaviti kao prvu funkciju koja ce se pojaviti u nasoj skripti. Morat cemo takoder prebaciti kreiranje samog elementa iz funkcije dodajZadatak u ovu novu funkciju kako bi sprijecili duplo kreiranje zadatka na displayu, jer ubiti s ovom funkcijom dokhvacamo zadatke iz lokalnog spremista i kreiramo ih sa podacima zapisanima u lokalnom spremistu */
document.addEventListener("DOMContentLoaded", prikaziZadatkeLS);


provjeriListu();

