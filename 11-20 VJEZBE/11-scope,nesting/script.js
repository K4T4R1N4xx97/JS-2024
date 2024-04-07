"use strict";

// idemo pogledati kako funkcionira scope i kada su nam odredene varijable dostupne ovismo o tome gdje se koriste

// u slucaju da zadamo varijablu izvan funkcijem a unutar funkcije ju pozovemo, funkcija ce traziti i izvan sebe tu varijablu

// const lopta = "nogometna";
// u slucaju da na kraju nakon toga dodam varijablu istog imena unutar nje povuci ce tu varijablu jer je unutar bloka unutar nje

/* const sport = () => {
    const lopta = "kosarkaska";
    const lopta2 = "rukometna";
    console.log(lopta, lopta2);
};

sport(); */

// AJMO ZA GORNJI PRIMJER UBACII PODFUNKCIJU

const lopta = "kosarkaska";

const sport = () => {
    const lopta2 = "nogometna";
    return {
        sport2: () => {
            return console.log(lopta, lopta2);
        },
    };
};

const noviSport = sport();
noviSport.sport2();

// još primjera - pozivanje druge funkcije unutar funkcije

function komadivoca(voce){
    return voce * 4
}

function nutriBullet(jabuke, kruske){
    const sokOdJabuke = komadivoca(jabuke);// primjer 1 kako mozemo pozvati
    const sokOdKurske = kruske * 4;// primjer 2 kako mozemo pozvati
    const sok = `Sok od ${sokOdJabuke} komada jabuka i ${sokOdKurske} komada kruske.`;
    return sok;
}

console.log(nutriBullet(2, 3));
