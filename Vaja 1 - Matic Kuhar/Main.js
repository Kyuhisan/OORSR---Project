"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Ekipa_1 = require("./Ekipa");
var direktor1 = {
    ime: "Matic",
    priimek: "Kuhar",
    letoRojstva: 1999,
    krajRojstva: "Slovenj Gradec",
    id: 0,
    vloga: "Direktor",
    veljavnost: 2030
};
var trener1 = {
    ime: "Janez",
    priimek: "Golišnik",
    letoRojstva: 1988,
    id: 1,
    vloga: "Trener",
    veljavnost: 2027
};
var ekipa = new Ekipa_1.Ekipa("Nogometasi Olimpija", 1977, direktor1, trener1);
var igralec1 = {
    ime: "Jaka",
    priimek: "Pečnik",
    letoRojstva: 2005,
    krajRojstva: "Ljubljana",
    id: 3,
    visina: 170,
    teza: 65,
    poskodovan: false
};
var igralec2 = {
    ime: "Peter",
    priimek: "Klepec",
    letoRojstva: 1995,
    krajRojstva: "Velenje",
    id: 4,
    visina: 177,
    teza: 74,
    poskodovan: true
};
var igralec3 = {
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
var izbranIgralec = ekipa.najdiIgralca(4);
if (izbranIgralec) {
    var posodobljenIgralec = __assign(__assign({}, izbranIgralec), { poskodovan: false });
    ekipa.posodobiIgralca(posodobljenIgralec);
}
// Display Data & Remove User
console.log(ekipa.izpisiPodatke());
ekipa.odstraniIgralca(5);
console.log(ekipa.izpisiPodatke());
