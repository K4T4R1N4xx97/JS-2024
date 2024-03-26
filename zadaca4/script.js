/*ZADATAK 1*/

const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

const zadatak1 = (postotak) => (postotak/7900) * 100;

const postotakLovaca1 = zadatak1(brojLovaca1);
const postotakLovaca2 = zadatak1(brojLovaca2);
const postotakLovaca3 = zadatak1(brojLovaca3);

console.log(postotakLovaca1, postotakLovaca2, postotakLovaca3);

/*ZADATAK 2*/

function postotakSvijeta(populacija){
    return (populacija/10000) * 100;
}

function opisZemlje (zemlja, populacija){
    const postotak = postotakSvijeta(populacija);
}



