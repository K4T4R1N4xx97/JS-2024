"use strict";

/*window objekt i sve metode koje mozemo primjeniti na window ovjektu*/
console.log(window);

/* Nas HTML dokument i prikaz njega u konzoli, mozemo ga napisati bez prefiksa window, jer je window top lvl ovjekta a document je njegov podobjekt.*/
console.log(window.document);

// sa innerHTML metodom mozemo dohvatiti HTML sadrzaj unutar naseg document objekta koji dolazi iz DOM-a, Obdje dohvacamo sadrzaj bodya.
console.log(document.body.innerHTML);

// sa innerText metodom mozemo dohvatiti sadrzaj unutar naseg body...
console.log(document.body.innerText);

// Ova prica nije samo read-only, mi mozemo mijenjati stvari na ovaj nacin, npr. izmjeniti sadrzaj bodya..
document.body.innerHTML = "<h1>Hello World</h1>"