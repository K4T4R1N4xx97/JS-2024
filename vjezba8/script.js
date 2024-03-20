// 2 + 2 je npr. expression je ce proizvesti novu vrijednost
// 2000 je takoder expression jer je to odredena vrijednost
// true, false takoder jer je odredena vrijednost
// if else i switch SU STATEMENTI iliti DEKLARACIJE, ONI NISU EXPRESSION
// deklaracije mozete gledati kao nekakve kompletne recenice, expressioni bi bili rijeci koje cine tu recenicu
// STATEMENTI (deklaracije) su u biti sekvence akcija

const godine = 23;
if (godine >= 18){
    console.log("punoljetan si");
    } else {
        console.log("maloljetan si");
    }

    //trojni operator (ternary operator) mozete gledati kao drugaciji nacin pisanja if else deklaracije.
    godine >= 18 ? console.log("Moze") : console.log("Ne Moze");
    
    // za razliku od IF i ELSE on se moze zapisati direktno u varijablu(const, let)
    const punoljetan = godine >= 18 ? "Moze" : "Ne Moze";
    console.log(punoljetan);

    console.log(`${godine >= 18 ? "moze" : "ne moze"}`);

    // PRAKTICAN PRIMJER

    const auth = true;
    let redirect;

    /*if(auth){
        alert("autorizacija je prosla");
        redirect = "/dashboard";
    } else {
        alert("Autorizacija nije prosla");
        redirect = "/login";
    }*/

    redirect = auth ? (alert("autorizacija je prosla"),redirect = "/dashboard") : (alert("Autorizacija nije prosla",redirect = "/login"));

    auth && console.log("autorizacija je prosla");


    