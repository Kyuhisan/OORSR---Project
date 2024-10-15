import { Igralec, Funkcionar } from "./Oseba";

export class Ekipa {
    ime: string;
    letoUstanovitve: number;
    direktor: Funkcionar;
    trener: Funkcionar;
    igralci: Igralec[];

    constructor(ime: string, letoUstanovitve: number, direktor: Funkcionar, trener: Funkcionar) {
        this.ime = ime;
        this.letoUstanovitve = letoUstanovitve;
        this.direktor = direktor;
        this.trener = trener;
        this.igralci = [];
    } 

    dodajIgralca(igralec: Igralec): void {
        this.igralci.push(igralec);
    };

    najdiIgralca(id: number): Igralec | undefined {
        return this.igralci.find(igralec => igralec.id === id);
    }

    posodobiIgralca(posodobljenIgralec: Igralec): void {
        const index = this.igralci.findIndex(igralec => igralec.id === posodobljenIgralec.id);
        if (index !== -1) {
            this.igralci[index] = posodobljenIgralec;
        } else {
            console.log(`Igralec z id ${posodobljenIgralec.id} ni bil najden.`);
        }
    }

    odstraniIgralca(id: number): void {
        this.igralci = this.igralci.filter(igralec => igralec.id !== id);
    }

    izpisiPodatke(): string {
        return `\nEkipa: ${this.ime}, Leto ustanovitve: ${this.letoUstanovitve}\n` +
               `Direktor: ${this.direktor.ime} ${this.direktor.priimek}, Vloga: ${this.direktor.vloga}\n` +
               `Trener: ${this.trener.ime} ${this.trener.priimek}, Vloga: ${this.trener.vloga}\n` +
               `Igralci: ${this.igralci.map(igralec => igralec.ime + " " + igralec.priimek + " " + igralec.poskodovan)}`;
    }
}