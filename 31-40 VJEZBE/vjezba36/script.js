"use strict";

document.getElementById("povuci_txt").addEventListener("click", povuciTekst);

function povuciTekst(){
    fetch("./uzorak.txt")
    .then((res) => res.text())
    .then((data)=> {
        document.querySelector("#ispisi").innerHTML = data; // idemo ispisati sadrzaj ovog fetcha unutar div elementa sa id-em "ispisi".
    })
    .catch((error) => console.log(error));
}

document.getElementById("lokalni_json").addEventListener("click", povuciJson);
function povuciJson (){
    fetch("./users.json")
    .then((res) => res.json())
    .then((data)=>{
        let ispis = `<h2>Korisnici</h2>`;

        data.forEach((user) => {
            ispis += `<ul>
            <li>ID: ${user.id}</li>
            <li>Ime: ${user.ime}</li>
            <li>Prezime: ${user.prezime}</li>
            </ul>`;
        });
        document.querySelector("#ispisi").innerHTML = ispis;
    })

    .catch ((error) => console.log(error));
}

/*ZADACA - isto ovo sto smo napravili sa buttonom lokalni json napravite sa fetchm sa adrese 
"https://jsonplaceholder.typicode.com/posts" i ispisite "title" i "body" u div elementu sa ID-em "ispisi"*/


