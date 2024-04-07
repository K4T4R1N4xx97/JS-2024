"use strict"

/*----------------ZADATAK-1----------------*/
const iznosRacuna = [125, 555, 44];
 
const izracunNapojnice = iznosRacuna.map(broj=> {
  if(50<=broj && broj<=300){
    return broj + (broj*0.15);
  }
  else if (broj > 300){
    return broj + (broj*0.20);
  }
  else{
    return broj;
  }
}
  );
 
const finalniIznos = izracunNapojnice;
console.log(finalniIznos);
 


/*----------------ZADATAK-2----------------*/
const objektITM = [
  {ime:"Marko", tezina:78, visina: 1.69},
  {ime:"Josip", tezina:92, visina:1.95},
  ];
 
const izracunITM = (osoba) => {
  return osoba.tezina/osoba.visina**2;
};

 objektITM.forEach((osoba)=>{
  const ITM = izracunITM(osoba);
  console.log(`${osoba.ime} ima ITM od ${ITM}`);
});

 

/*----------------ZADATAK-3----------------*/
const album = [ {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
 },
];

 const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["8T", "LP"],
};
 
album.splice(1, 0, noviAlbum);
console.log(album);
 


/*----------------ZADATAK-4----------------*/
const imena = ["Slavica", "Mario","Irena", "Katarina", "Tihomir"];

 for (let i = 0; i < imena.length; i++) {
  if (imena[i] === "Katarina"){
    console.log('Ime je super');
  } else{
    console.log (imena[i]);
  }
  };

 

/*----------------ZADATAK-4----------------*/







