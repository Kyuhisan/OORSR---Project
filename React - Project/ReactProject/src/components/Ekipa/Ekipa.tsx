import Igralec, {
  IIgralecProps,
  setIgralec21,
  setIgralec22,
  setIgralec23,
  setIgralec24,
  setIgralec25,
  setIgralec26,
  setIgralec27,
  setIgralec28,
  setIgralec29,
  setIgralec30,
  setIgralec31,
  setIgralec32,
  setIgralec33,
  setIgralec34,
  setIgralec35,
  setIgralec36,
  setIgralec37,
  setIgralec38,
  setIgralec39,
  setIgralec40,
} from "../Oseba/Igralec";
import Funkcionar, { IFunkcionarProps } from "../Oseba/Funkcionar";
import {
  setDirektor,
  setTrener,
  setDirektor2,
  setTrener2,
} from "../Oseba/Funkcionar";
import {
  setIgralec1,
  setIgralec2,
  setIgralec3,
  setIgralec4,
  setIgralec5,
  setIgralec6,
  setIgralec7,
  setIgralec8,
  setIgralec9,
  setIgralec10,
  setIgralec11,
  setIgralec12,
  setIgralec13,
  setIgralec14,
  setIgralec15,
  setIgralec16,
  setIgralec17,
  setIgralec18,
  setIgralec19,
  setIgralec20,
} from "../Oseba/Igralec";

import Info from "../Conditionals/Info";
import Opozorilo from "../Conditionals/Opozorilo";
import SeznamEkip from "./seznamEkip";
import { useParams } from "react-router";

export interface IEkipaProps {
  ime: string;
  letoUstanovitve: number;
  direktor: IFunkcionarProps;
  trener: IFunkcionarProps;
  igralci: IIgralecProps[];
}

export const getEkipa = (
  <Ekipa
    ime="Olimpija"
    letoUstanovitve={1977}
    direktor={setDirektor}
    trener={setTrener}
    igralci={[
      setIgralec1,
      setIgralec2,
      setIgralec3,
      setIgralec4,
      setIgralec5,
      setIgralec6,
      setIgralec7,
      setIgralec8,
      setIgralec9,
      setIgralec10,
      setIgralec11,
      setIgralec12,
      setIgralec13,
      setIgralec14,
      setIgralec15,
      setIgralec16,
      setIgralec17,
      setIgralec18,
      setIgralec19,
      setIgralec20,
    ]}
  />
);

export const getEkipa2 = (
  <Ekipa
    ime="Maribor"
    letoUstanovitve={1960}
    direktor={setDirektor2}
    trener={setTrener2}
    igralci={[
      setIgralec21,
      setIgralec22,
      setIgralec23,
      setIgralec24,
      setIgralec25,
      setIgralec26,
      setIgralec27,
      setIgralec28,
      setIgralec29,
      setIgralec30,
      setIgralec31,
      setIgralec32,
      setIgralec33,
      setIgralec34,
      setIgralec35,
      setIgralec36,
      setIgralec37,
      setIgralec38,
      setIgralec39,
      setIgralec40,
    ]}
  />
);

export const seznamEkip = [getEkipa.props, getEkipa2.props];
// const ekipaId = 0;

export function DisplayEkipa() {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  if (!seznamEkip[ekipaId]) {
    return <p>Error: Team not found!</p>;
  }

  return (
    <>
      <h4> Podatki o ekipi:</h4>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Ime Ekipe</th>
            <th scope="col">Leto Ustanovitve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{seznamEkip[ekipaId]?.ime}</td>
            <td>{seznamEkip[ekipaId]?.letoUstanovitve}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export function DisplayDirektor() {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  if (!seznamEkip[ekipaId]) {
    return <p>Error: Team not found!</p>;
  }

  return (
    <>
      <h5> Direktor:</h5>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ime</th>
            <th scope="col">Priimek</th>
            <th scope="col">Vloga</th>
            <th scope="col">Veljavnost</th>
            <th scope="col">Leto Rojstva</th>
            <th scope="col">Kraj Rojstva</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{seznamEkip[ekipaId]?.direktor.id}</td>
            <td>{seznamEkip[ekipaId]?.direktor.ime}</td>
            <td>{seznamEkip[ekipaId]?.direktor.priimek}</td>
            <td>{seznamEkip[ekipaId]?.direktor.vloga}</td>
            <td>{String(seznamEkip[ekipaId]?.direktor.veljavnost)}</td>
            <td>{seznamEkip[ekipaId]?.direktor.letoRojstva}</td>
            <td>{seznamEkip[ekipaId]?.direktor.krajRojstva}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export function DisplayTrener() {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  if (!seznamEkip[ekipaId]) {
    return <p>Error: Team not found!</p>;
  }

  return (
    <>
      <h5> Trener:</h5>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Ime</th>
            <th scope="col">Priimek</th>
            <th scope="col">Vloga</th>
            <th scope="col">Veljavnost</th>
            <th scope="col">Leto Rojstva</th>
            <th scope="col">Kraj Rojstva</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{seznamEkip[ekipaId]?.trener.id}</td>
            <td>{seznamEkip[ekipaId]?.trener.ime}</td>
            <td>{seznamEkip[ekipaId]?.trener.priimek}</td>
            <td>{seznamEkip[ekipaId]?.trener.vloga}</td>
            <td>{String(seznamEkip[ekipaId]?.trener.veljavnost)}</td>
            <td>{seznamEkip[ekipaId]?.trener.letoRojstva}</td>
            <td>{seznamEkip[ekipaId]?.trener.krajRojstva}</td>
          </tr>
        </tbody>
      </table>
      {/* <ul>
        {Object.entries(seznamEkip[ekipaId]?.trener).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {String(value)}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export function DisplayIgralci() {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  if (!seznamEkip[ekipaId]) {
    return <p>Error: Team not found!</p>;
  }

  return (
    <>
      <h5>Igralci:</h5>
      <Opozorilo />
      <Info />

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
          {seznamEkip[ekipaId]?.igralci.map(
            (item: IIgralecProps, index: number) => (
              <tr key={item.id || index}>
                <td>{item.id}</td>
                <td>{item.ime}</td>
                <td>{item.priimek}</td>
                <td>{item.teza}</td>
                <td>{item.visina}</td>
                <td>{item.letoRojstva}</td>
                <td>{String(item.poskodovan)}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}

function Ekipa(props: IEkipaProps) {
  return (
    <div>
      {props.ime} {props.letoUstanovitve} <Funkcionar {...props.direktor} />{" "}
      <Funkcionar {...props.trener} />{" "}
      <Igralec
        visina={0}
        teza={0}
        poskodovan={false}
        id={0}
        ime={""}
        priimek={""}
        letoRojstva={0}
        {...props.igralci}
      />
    </div>
  );
}

export default Ekipa;
