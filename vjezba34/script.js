"use strict";

/*
Recimo da zelimo napraviti vise asinkronih poziva jer imamo podatke koji dolaze iz razlicitih izvora i koji se moraju ucitati u ispravnom redoslijedu.  To bi mogli napraviti koristeci callback funkcije, medutim velika kolicina takvih poziva rezultira callback Hell-om iliti ovako ugnijezdenim pozivima funkcija koji se onda butu zahvaljujuci tom ugnijezdivanju izvodili u redoslijedu kako bi mi htjeli. 
*/

/*S obzirom da je callback hell bio problem dugo vremena, uvodenje promise rjesenje je malo pobolsalo pricu...*/

function getData(putanja) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open("GET", putanja);
  
      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.response));
          } else {
            reject("Dogodila se greška...");
          }
        }
      };
  
      setTimeout(() => {
        xhr.send();
      }, Math.floor(Math.random() * 2000) + 100);
    });
  }
  
  getData("./filmovi.json")
    .then((filmovi) => {
      console.log(filmovi);
      return getData("./glumci.json")
    })
   .then((glumci)=>{
    console.log(glumci);
    return getData("./redatelji.json");
   })
   .then((redatelji)=>{
    console.log(redatelji);
   })
   .catch((greska)=>{
    console.log(greska);
   });