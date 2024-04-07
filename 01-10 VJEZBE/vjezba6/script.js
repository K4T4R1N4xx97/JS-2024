// primjer1

/* const dan = prompt("Koji je danas dan?");
console.log(dan);

switch(dan){
    case "ponedjeljak": //ovaj case radi provjeru kao da sam upisao dan === ponedjeljak
        console.log("Danas je prvi dan tjedna.");
        console.log("Danas smo 4 dana udaljeni od vikenda.");
        break; // kada ovdje ne bi bilo breaka, kod ce ispisati i iduci dan, u biti sve dok ne naleti na prvi break
        case "utorak":
            console.log("Danas je drugi dan u tjednu.");
            break;
        
        case "srijeda":
            console.log("Sredina tjedna.");
            break;  

        case "cetvrtak":
            console.log("mali petak.");
            break;

        case "petak":
            console.log("Konacno je petak!");
            break;

        case "subota":
        case "nedjelja":
            console.log("Dobro dosli u vikend!");
            break;

        default:
            console.log("niste unijeli dan u tjednu.");
        }
       */
/*----------------------------------------------------------*/
//primjer do-while, while-do

let count = 0;
while ( count < 10){
    count++;
    console.log(count);
    }


let brojac = 0;
do {
    brojac++;
    console.log(brojac);
    } while ( brojac < 10);

// napisite while petlju koja ce ispisivati sve brojeve od 3 do 20

let primjer1 = 2;
while ( primjer1 < 20){
      primjer1++;
     console.log(primjer1);
}

// ispisite sve brojeve osim one koji sudjeljivi s 9


/*let brojka = 3;

while(brojka <= 20){
    if (brojka % 9 === 0);{
        console.log(brojka);
    }
}*/
