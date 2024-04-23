"use strict";

/* Fetch je moderniji pristup HTTp requestovima. Za razliku od XMLHttpRequest-a, fetch sam po sebi vraca promise. Fetch je metoda koju imamo u samom window objeku.  

const odgovor = fetch("url iliti putanju dokumenta kojeg dohvacamo");
*/

function dohvatiPodatke(){
const response = fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => response.json())
.then((data) => console.log(data));
}

dohvatiPodatke();

fetch("./filmovi.json")
.then((response) => response.json())
.then((podaci)=> console.log(podaci));

fetch("./test.txt")
.then((response)=> response.text())
.then((data)=> console.log(data));

// primjer: dohvatite sa adrese todova fetchom podatke i zamijeni h1 DOM-u sadrzaja titlea u data response fetchu

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => res.json())
.then((data) => (document.querySelector("h1").textContent = data.title));


/*
Fetch po defaultu ima GET metodu u fetch requestu ali ako nesto zelimo poslati metodom POST, to moramo i napisati.
U svakom req se nalaze 2 stvari
1. method : HTTP metoda koju zelimo koristiti, po defaultu GET.
2. body : podaci koje zelimo poslati.
3. headers : bilo kakav HTTP header koji zelimo koristiti.
*/

/*Mozemo ikorisiti i dekonstruiranje i  umjesto posta kao porametra poslati title i body, a onda skraceno  i napisati u nasem bodyu title i body. U nasem headersu definiramo Content-Type kao application/json jer saljemo json podatke. Ako postoji potreba za prisutnim tokenmo saljemo i tkoen sa vrijednosti.*/
function kreirajPost({title, body}) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
headers:{
    "content-type": "application/json",
    token:"abc123",
},
        body: JSON.stringify({
            title,
            body,
        }),
      })
      .then((res) => res.json())
      .then((data) => console.log(data));
}

kreirajPost({title:"moj post", body: "ovo je moj post"});
