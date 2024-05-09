const suma = require("./testovi");

test("Zbroji 2 i 2 da budu 4", () => {
    expect(suma.add(2, 2)).toBe(4);
});

test("Zbroji 2 i 2 da nije 5", () => {
    expect(suma.add(2, 2)).not.toBe(5);
});

test("Trebao bi biti null", () => {
    expect(suma.isNUll()).toBeNull();
});


/* toBeFalsy - proci ce test, jer ocekuje falsy value */
test("Trebalo bi biti falsy", () => {
    expect(suma.provjeri(0)).toBeFalsy();
});

test("osoba bi trebala biti I.H.", () => {
    expect(suma.kreiraj()).toEqual({
        ime: "Ivan",
        prezime: "Horvat",
    });
});

test("Suma je manja od 10", () => {
    const a = 4;
    const b = 5;
    expect(a + b).toBeLessThan(10);
});

test("Maja mora biti u listi", () => {
    const listaImena = ["Marija", "Maja", "Stjepan"];
    expect(listaImena).toContain("Maja");
});

test("Korisnik mora biti Leanne Graham", () => {
    expect.assertions(1);
    return suma.fetchOsoba().then((data) => {
        expect(data.name).toEqual("Leanne Graham");
    });
});

// Async await

test("Korisnik mora biti Leanne Graham", async () => {
    expect.assertions(1);
    const data = await suma.fetchOsoba();
    expect(data.name).toEqual("Leanne Graham");
});

