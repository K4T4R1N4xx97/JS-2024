"use script";

const iTunes = "./1.txt";

const dohvatiTunes = () => {
    fetch(iTunes)
    .then((res) => res.text())
    .then((data) =>{
        console.log(data)
        })
};

const noviTunes = (tune) => {
    const div = document.createElement ("div");
    div.classList.add("tune");
    const imeNaziv = `${tune.artistName} - ${tune.trackName}`
    div.appendChild(document.createTextNode(imeNaziv));
    div.setAttribute("data-id", tune.id);
    document.body.appendChild(div);
};

document.addEventListener("DOMContentLoaded", dohvatiTunes);