
for (let ocjene = 1; ocjene <= 5; ocjene++){
    console.log(`ocjena je ${ocjene}`);
    }

const listaPredmeta = ["hrvatski", "engleski", "matematika", "fizika", "informatika"];
console.log(listaPredmeta);

for (let i = 0; i < listaPredmeta.length; i++){
    console.log(listaPredmeta[i])
}

/*------------------------------------------------------------*/

const motiviSkole = ["torba", "pernica", "ploca", "knjige"];

console.log(motiviSkole[0]);
console.log(motiviSkole[2]);
console.log(motiviSkole[3]);

console.log(motiviSkole.length);

console.log(motiviSkole[motiviSkole.length - 1]);

motiviSkole [2] = "plocica";
console.log(motiviSkole);