import { Igralec, Funkcionar } from "./Oseba";
import { Ekipa } from "./Ekipa";

const direktor1: Funkcionar = {
    ime: "Matic",
    priimek: "Kuhar",
    letoRojstva: 1999,
    krajRojstva: "Slovenj Gradec",
    id: 0,
    vloga: "Direktor",
    veljavnost: 2030
}

const trener1: Funkcionar = {
    ime: "Janez",
    priimek: "Golišnik",
    letoRojstva: 1988,
    id: 1,
    vloga: "Trener",
    veljavnost: 2027
}

const ekipa = new Ekipa("Nogometasi Olimpija", 1977, direktor1, trener1);

const igralec1: Igralec = {
    ime: "Jaka",
    priimek: "Pečnik",
    letoRojstva: 2005,
    krajRojstva: "Ljubljana",
    id: 3,
    visina: 170,
    teza: 65,
    poskodovan: false
};

const igralec2: Igralec = {
    ime: "Peter",
    priimek: "Klepec",
    letoRojstva: 1995,
    krajRojstva: "Velenje",
    id: 4,
    visina: 177,
    teza: 74,
    poskodovan: true
};

const igralec3: Igralec = {
    ime: "Igor",
    priimek: "Tenež",
    letoRojstva: 2002,
    krajRojstva: "Muta",
    id: 5,
    visina: 195,
    teza: 84,
    poskodovan: true
};

// Add User
ekipa.dodajIgralca(igralec1);
ekipa.dodajIgralca(igralec2);
ekipa.dodajIgralca(igralec3);

// Update User By ID
const izbranIgralec = ekipa.najdiIgralca(4);

if (izbranIgralec) {
    const posodobljenIgralec: Igralec = { ...izbranIgralec, poskodovan: false };
    ekipa.posodobiIgralca(posodobljenIgralec);
}

// Display Data & Remove User
console.log(ekipa.izpisiPodatke());
ekipa.odstraniIgralca(5);
console.log(ekipa.izpisiPodatke());