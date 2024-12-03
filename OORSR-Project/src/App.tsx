import React from "react";
import Noga from "./components/Layout/Noga";
import Menu from "./components/Layout/Menu";
import Telo from "./components/Layout/Telo";
import { EkipaProps } from "./models/Ekipa";
import { FunkcionarProps } from "./models/Funkcionar";
import { IgralecProps } from "./models/Igralec";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

const direktorji: FunkcionarProps[] = [
  {
    id: 1,
    ime: "Janez",
    priimek: "Novak",
    letoRojstva: 1975,
    krajRojstva: "Ljubljana",
    vloga: "Direktor",
    veljavnost: 2025,
  },
];

const trenerji: FunkcionarProps[] = [
  {
    id: 2,
    ime: "Marko",
    priimek: "Kranjc",
    letoRojstva: 1980,
    krajRojstva: "Maribor",
    vloga: "Trener",
    veljavnost: 2024,
  },
  {
    id: 1,
    ime: "Matic",
    priimek: "Keglič",
    letoRojstva: 1950,
    krajRojstva: "Maribor",
    vloga: "Trener",
    veljavnost: 2024,
  },
];

const igralci: IgralecProps[] = [
  {
    id: 1,
    ime: "Luka",
    priimek: "Novak",
    teza: 85,
    visina: 195,
    letoRojstva: 1998,
    poskodovan: false,
  },
  {
    id: 2,
    ime: "Marko",
    priimek: "Kranjc",
    teza: 90,
    visina: 188,
    letoRojstva: 2000,
    poskodovan: false,
  },
  {
    id: 3,
    ime: "Jure",
    priimek: "Zupan",
    teza: 78,
    visina: 182,
    letoRojstva: 1997,
    poskodovan: true,
  },
  {
    id: 4,
    ime: "Anže",
    priimek: "Mlakar",
    teza: 87,
    visina: 190,
    letoRojstva: 1996,
    poskodovan: false,
  },
  {
    id: 5,
    ime: "Tomaž",
    priimek: "Hribar",
    teza: 92,
    visina: 200,
    letoRojstva: 1995,
    poskodovan: true,
  },
  {
    id: 6,
    ime: "Aleks",
    priimek: "Petrov",
    teza: 83,
    visina: 178,
    letoRojstva: 2001,
    poskodovan: false,
  },
  {
    id: 7,
    ime: "Nik",
    priimek: "Cerar",
    teza: 76,
    visina: 185,
    letoRojstva: 1999,
    poskodovan: true,
  },
  {
    id: 8,
    ime: "Simon",
    priimek: "Dolinar",
    teza: 88,
    visina: 192,
    letoRojstva: 1998,
    poskodovan: false,
  },
  {
    id: 9,
    ime: "Urban",
    priimek: "Pavlin",
    teza: 80,
    visina: 183,
    letoRojstva: 1994,
    poskodovan: true,
  },
  {
    id: 10,
    ime: "Žan",
    priimek: "Kosi",
    teza: 95,
    visina: 198,
    letoRojstva: 2002,
    poskodovan: false,
  },
  {
    id: 11,
    ime: "Filip",
    priimek: "Medved",
    teza: 82,
    visina: 186,
    letoRojstva: 1996,
    poskodovan: true,
  },
  {
    id: 12,
    ime: "Miha",
    priimek: "Rupnik",
    teza: 89,
    visina: 180,
    letoRojstva: 1995,
    poskodovan: false,
  },
  {
    id: 13,
    ime: "Gregor",
    priimek: "Logar",
    teza: 94,
    visina: 199,
    letoRojstva: 1993,
    poskodovan: true,
  },
  {
    id: 14,
    ime: "David",
    priimek: "Jaklič",
    teza: 77,
    visina: 177,
    letoRojstva: 1999,
    poskodovan: false,
  },
  {
    id: 15,
    ime: "Matej",
    priimek: "Vidmar",
    teza: 84,
    visina: 184,
    letoRojstva: 2001,
    poskodovan: false,
  },
  {
    id: 16,
    ime: "Aljaž",
    priimek: "Vrhovec",
    teza: 86,
    visina: 191,
    letoRojstva: 1998,
    poskodovan: true,
  },
  {
    id: 17,
    ime: "Tim",
    priimek: "Rozman",
    teza: 75,
    visina: 176,
    letoRojstva: 2003,
    poskodovan: false,
  },
  {
    id: 18,
    ime: "Vid",
    priimek: "Škof",
    teza: 88,
    visina: 187,
    letoRojstva: 1994,
    poskodovan: false,
  },
  {
    id: 19,
    ime: "Nejc",
    priimek: "Kovač",
    teza: 93,
    visina: 196,
    letoRojstva: 1997,
    poskodovan: true,
  },
  {
    id: 20,
    ime: "Rok",
    priimek: "Trček",
    teza: 79,
    visina: 179,
    letoRojstva: 2000,
    poskodovan: false,
  },
];

const igralci2: IgralecProps[] = [
  {
    id: 1,
    ime: "Luka",
    priimek: "Novak",
    teza: 85,
    visina: 195,
    letoRojstva: 1998,
    poskodovan: false,
  },
  {
    id: 2,
    ime: "Marko",
    priimek: "Kranjc",
    teza: 90,
    visina: 188,
    letoRojstva: 2000,
    poskodovan: false,
  },
  {
    id: 3,
    ime: "Jure",
    priimek: "Zupan",
    teza: 78,
    visina: 182,
    letoRojstva: 1997,
    poskodovan: true,
  },
  {
    id: 4,
    ime: "Anže",
    priimek: "Mlakar",
    teza: 87,
    visina: 190,
    letoRojstva: 1996,
    poskodovan: false,
  },
  {
    id: 5,
    ime: "Tomaž",
    priimek: "Hribar",
    teza: 92,
    visina: 200,
    letoRojstva: 1995,
    poskodovan: true,
  },
  {
    id: 6,
    ime: "Aleks",
    priimek: "Petrov",
    teza: 83,
    visina: 178,
    letoRojstva: 2001,
    poskodovan: false,
  },
  {
    id: 7,
    ime: "Nik",
    priimek: "Cerar",
    teza: 76,
    visina: 185,
    letoRojstva: 1999,
    poskodovan: true,
  },
  {
    id: 8,
    ime: "Simon",
    priimek: "Dolinar",
    teza: 88,
    visina: 192,
    letoRojstva: 1998,
    poskodovan: false,
  },
  {
    id: 9,
    ime: "Urban",
    priimek: "Pavlin",
    teza: 80,
    visina: 183,
    letoRojstva: 1994,
    poskodovan: true,
  },
];

const ekipe: EkipaProps[] = [
  {
    id: 0,
    ime: "Ljubljana",
    letoUstanovitve: 1987,
    direktorji: direktorji,
    trenerji: trenerji,
    igralci: igralci2,
  },
  {
    id: 1,
    ime: "Maribor",
    letoUstanovitve: 1960,
    direktorji: direktorji,
    trenerji: trenerji,
    igralci: igralci,
  },
];

const App: React.FC = () => {
  // QUESTION
  const DynamicMenu = () => {
    const { idEkipe } = useParams<{ idEkipe: string }>();
    const team = ekipe.find(
      (ekipa) => ekipa.id === parseInt(idEkipe || "", 10)
    );
    return <Menu imeEkipe={team ? team.ime : "Ekipa ne obstaja"} />;
  };
  // QUESTION

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/ekipa/:idEkipe" element={<DynamicMenu />} />
        </Routes>
        <Telo seznamEkip={ekipe} />
        <Noga />
      </BrowserRouter>
    </>
  );
};

export default App;
