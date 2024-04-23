"use strict";

/*
Kompletan poziv u kojem prvenstveno koristimo .then metodu gdje cemo se pobrinuti za sve errore. Catch error ce nam javiti ako ima problema sa podacima na serveru ili server nije dostupan, a na pocetku cemo provjeriti da li nam je status ok iliti da li je response 200 kako bi sprijecili 404, 500 ili ostale errore da nam odmah jave gresku..
*/

const dohvatiUsere = () =>{
    fetch("https://jsonplaceholder.typicode.com/users").then((res)=> {
        if(!res.ok){
            console.log("ne mozemo dohvatiti podatke");
            return;
        }
        return res.json();
    }).then((data) =>{
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    });
};

dohvatiUsere();

/*ista stvar koristeci Async/Await metodu*/

const dohvatiUsere1 = async () => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        if(!res.ok){
            console.log("Ne mozemo dohvatiti podatke");
            return;
        }
        console.log(data);
    } catch(error){
        console.log(error);
    }
}; 

dohvatiUsere1();

/*
 Idemo jos vidjeti kako bi npr. sa POST metodom dodali novog clan usera
 */


 const noviUser = {
    name: "igor",
    email:"email@email.com",
 };

 const dohvatiUsera2 = async () => {
    try{
        const res = await fetch ("https://jsonplaceholder.typicode.com/users",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(noviUser)
        });
        const data = await res.json();
        if(!res.ok){
            console.log("Nesto ne valja bajo moj");
            return;
        }
        console.log(data);
    } catch(error){
        console.log(error);
    }
 };

 dohvatiUsera2();