"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ekipa = void 0;
var Ekipa = /** @class */ (function () {
    function Ekipa(ime, letoUstanovitve, direktor, trener) {
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.direktor = direktor;
        this.trener = trener;
        this.igralci = [];
    }
    Ekipa.prototype.dodajIgralca = function (igralec) {
        this.igralci.push(igralec);
    };
    ;
    Ekipa.prototype.najdiIgralca = function (id) {
        return this.igralci.find(function (igralec) { return igralec.id === id; });
    };
    Ekipa.prototype.posodobiIgralca = function (posodobljenIgralec) {
        var index = this.igralci.findIndex(function (igralec) { return igralec.id === posodobljenIgralec.id; });
        if (index !== -1) {
            this.igralci[index] = posodobljenIgralec;
        }
        else {
            console.log("Igralec z id ".concat(posodobljenIgralec.id, " ni bil najden."));
        }
    };
    Ekipa.prototype.odstraniIgralca = function (id) {
        this.igralci = this.igralci.filter(function (igralec) { return igralec.id !== id; });
    };
    Ekipa.prototype.izpisiPodatke = function () {
        return "\nEkipa: ".concat(this.ime, ", Leto ustanovitve: ").concat(this.letoUstanovitve, "\n") +
            "Direktor: ".concat(this.direktor.ime, " ").concat(this.direktor.priimek, ", Vloga: ").concat(this.direktor.vloga, "\n") +
            "Trener: ".concat(this.trener.ime, " ").concat(this.trener.priimek, ", Vloga: ").concat(this.trener.vloga, "\n") +
            "Igralci: ".concat(this.igralci.map(function (igralec) { return igralec.ime + " " + igralec.priimek + " " + igralec.poskodovan; }));
    };
    return Ekipa;
}());
exports.Ekipa = Ekipa;
