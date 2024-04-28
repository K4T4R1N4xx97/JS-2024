"use strict";

class Zivotinja{
    constructor(ime){
        this.ime=ime;
    }

    kljun(){
        console.log("ima Crni kljun");
    }
}

class Ptica extends Zivotinja{
    constructor(ime){
        super(ime); // za naslijediti svojstvo iz paren klase u ovom slucaju this.ime= ime; 
    }

    kljun(){
        super.kljun();
        console.log("Ima zuti kljun");
    }
}

const zivina1 = new Zivotinja("Svraka");
const zivina2 = new Ptica("Papiga");
zivina1.kljun();
zivina2.kljun();

