"use strict";

 

const lovciHrvatska = 7900;

const brojLovaca1 = 3840;

const brojLovaca2 = 500;

const brojLovaca3 = 1440;

console.log(lovciHrvatska, brojLovaca1, brojLovaca2, brojLovaca3);

 

const prosjek1 = Math.round((brojLovaca1/lovciHrvatska)*100);
console.log(`${prosjek1}%`);

 

const prosjek2 = Math.round((brojLovaca2/lovciHrvatska)*100);
console.log(`${prosjek2}%`);

 

const prosjek3 = Math.round((brojLovaca3/lovciHrvatska)*100);
console.log(`${prosjek3}%`);

 

console.log(`Od ukupnog broja lovaca u Hrvatskoj koji iznosi ${lovciHrvatska}, prosjek od ${prosjek1}% odnosi se na središnju Hrvatsku, prosjek od ${prosjek2}% odnosi se na Istru, a prosjek od ${prosjek3}% odnosi se na Dalmaciju.`)

 

/*----------------------------------------------------------------------------*/

 

function stolniTenis(popSvijet, popHrvatska, popKina, popUsa) {

const postoHrvatska = (popHrvatska/popSvijet)*100;

const postoKina = Math.round((popKina/popSvijet)*100);

const postoUsa = Math.round((popUsa/popSvijet)*100);

console.log(`${postoHrvatska}%, ${postoKina}%, ${postoUsa}%`);

return postoHrvatska, postoKina, postoUsa;

}

stolniTenis(10000,10,3441,332);

 /*----------------------------------------------------------------------------*/

const golovi = (Barca, Real) => {

  const golBarca = Math.ceil((2+3+3+3+4+1)/Barca);

  const golReal = Math.ceil((1+4+1+5+0+5)/Real);

  if (golBarca < golReal){

    return `Real je u prosjeku zabio vise golova, ${golReal} gola, a Barcelona ${golBarca}.`

  } else if (golBarca > golReal){

    return `Real je u prosjeku zabio manje govola, ${golReal} gola, a Barcelona ${golBarca}.`

  } else {
    return `Real je u prosjeku zabio ${golReal} gola jednako kao i Barcelona ${golBarca}.`
  }

};

console.log(golovi(6,6));

 