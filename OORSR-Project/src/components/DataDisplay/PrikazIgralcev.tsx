import React from "react";
import Igralec from "../../models/Igralec";

const igralciDB = [
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
  {
    id: 21,
    ime: "Andrej",
    priimek: "Pavličič",
    teza: 85,
    visina: 191,
    letoRojstva: 1996,
    poskodovan: false,
  },
  {
    id: 22,
    ime: "Matic",
    priimek: "Jelen",
    teza: 90,
    visina: 193,
    letoRojstva: 1999,
    poskodovan: false,
  },
  {
    id: 23,
    ime: "Tomaž",
    priimek: "Zupančič",
    teza: 77,
    visina: 182,
    letoRojstva: 1995,
    poskodovan: true,
  },
  {
    id: 24,
    ime: "Luka",
    priimek: "Dimić",
    teza: 80,
    visina: 184,
    letoRojstva: 1997,
    poskodovan: false,
  },
  {
    id: 25,
    ime: "Žan",
    priimek: "Galič",
    teza: 88,
    visina: 188,
    letoRojstva: 1998,
    poskodovan: true,
  },
  {
    id: 26,
    ime: "Gregor",
    priimek: "Rodič",
    teza: 83,
    visina: 179,
    letoRojstva: 2000,
    poskodovan: false,
  },
  {
    id: 27,
    ime: "Nik",
    priimek: "Pavlović",
    teza: 85,
    visina: 190,
    letoRojstva: 1998,
    poskodovan: false,
  },
  {
    id: 28,
    ime: "Aljaž",
    priimek: "Vovk",
    teza: 77,
    visina: 180,
    letoRojstva: 1996,
    poskodovan: true,
  },
  {
    id: 29,
    ime: "Marko",
    priimek: "Hribar",
    teza: 92,
    visina: 198,
    letoRojstva: 1995,
    poskodovan: false,
  },
  {
    id: 30,
    ime: "Aleksander",
    priimek: "Pavli",
    teza: 86,
    visina: 190,
    letoRojstva: 1999,
    poskodovan: true,
  },
  {
    id: 31,
    ime: "Tim",
    priimek: "Zajc",
    teza: 89,
    visina: 187,
    letoRojstva: 1997,
    poskodovan: false,
  },
  {
    id: 32,
    ime: "Urban",
    priimek: "Mavrič",
    teza: 80,
    visina: 185,
    letoRojstva: 2000,
    poskodovan: true,
  },
  {
    id: 33,
    ime: "David",
    priimek: "Pecar",
    teza: 84,
    visina: 181,
    letoRojstva: 1996,
    poskodovan: false,
  },
  {
    id: 34,
    ime: "Matevž",
    priimek: "Urbanič",
    teza: 79,
    visina: 178,
    letoRojstva: 1998,
    poskodovan: false,
  },
  {
    id: 35,
    ime: "Mark",
    priimek: "Vuk",
    teza: 81,
    visina: 185,
    letoRojstva: 1999,
    poskodovan: true,
  },
  {
    id: 36,
    ime: "Luka",
    priimek: "Grega",
    teza: 90,
    visina: 193,
    letoRojstva: 1994,
    poskodovan: false,
  },
  {
    id: 37,
    ime: "Miha",
    priimek: "Bečaj",
    teza: 86,
    visina: 180,
    letoRojstva: 2001,
    poskodovan: false,
  },
  {
    id: 38,
    ime: "Timotej",
    priimek: "Barič",
    teza: 80,
    visina: 183,
    letoRojstva: 1998,
    poskodovan: false,
  },
  {
    id: 39,
    ime: "Rok",
    priimek: "Vračko",
    teza: 75,
    visina: 177,
    letoRojstva: 1997,
    poskodovan: true,
  },
  {
    id: 40,
    ime: "Matic",
    priimek: "Kolar",
    teza: 82,
    visina: 186,
    letoRojstva: 1999,
    poskodovan: false,
  },
];

const igralci = igralciDB.map((igralec) => (
  <Igralec
    key={igralec.id}
    visina={igralec.visina}
    teza={igralec.teza}
    poskodovan={igralec.poskodovan}
    id={igralec.id}
    ime={igralec.ime}
    priimek={igralec.priimek}
    letoRojstva={igralec.letoRojstva}
  />
));

const PrikazIgralcev: React.FC = ({}) => {
  return (
    <div className="container">
      <h5>Igralci:</h5>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ime</th>
            <th scope="col">Priimek</th>
            <th scope="col">Teza</th>
            <th scope="col">Visina</th>
            <th scope="col">Leto Rojstva</th>
            <th scope="col">Poskodba</th>
          </tr>
        </thead>
        <tbody>
          {igralci.map((igralec) => (
            <tr key={igralec.props.id}>
              <td>{igralec.props.id}</td>
              <td>{igralec.props.ime}</td>
              <td>{igralec.props.priimek}</td>
              <td>{igralec.props.teza}</td>
              <td>{igralec.props.visina}</td>
              <td>{igralec.props.letoRojstva}</td>
              <td>{String(igralec.props.poskodovan)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PrikazIgralcev;
