import React from "react";
import { EkipaProps } from "../../models/Ekipa";
import { useParams } from "react-router-dom";
import Info from "../Opozorila/Info";
import Opozorilo from "../Opozorila/Opozorilo";

interface PrikazEkipeProps {
  seznamEkip: EkipaProps[];
}

const PrikazEkipe: React.FC<PrikazEkipeProps> = ({ seznamEkip }) => {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  return (
    <>
      <h5>Podatki o ekipi:</h5>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Ime Ekipe</th>
            <th scope="col">Leto Ustanovitve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{seznamEkip[ekipaId].ime}</td>
            <td>{seznamEkip[ekipaId].letoUstanovitve}</td>
          </tr>
        </tbody>
      </table>
      <DisplayDirektor direktor={seznamEkip[ekipaId].direktor} />
      <DisplayTrener trener={seznamEkip[ekipaId].trener} />
      <DisplayIgralci igralci={seznamEkip[ekipaId].igralci} />
    </>
  );
};

export default PrikazEkipe;

export function DisplayDirektor({ direktor }: { direktor: any }) {
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
            <td>{direktor.id}</td>
            <td>{direktor.ime}</td>
            <td>{direktor.priimek}</td>
            <td>{direktor.vloga}</td>
            <td>{String(direktor.veljavnost)}</td>
            <td>{direktor.letoRojstva}</td>
            <td>{direktor.krajRojstva}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export function DisplayTrener({ trener }: { trener: any }) {
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
            <td>{trener.id}</td>
            <td>{trener.ime}</td>
            <td>{trener.priimek}</td>
            <td>{trener.vloga}</td>
            <td>{String(trener.veljavnost)}</td>
            <td>{trener.letoRojstva}</td>
            <td>{trener.krajRojstva}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export function DisplayIgralci({ igralci }: { igralci: any[] }) {
  return (
    <>
      <Opozorilo igralciCount={igralci.length} />
      <Info igralciCount={igralci.length} />
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
          {igralci.map((item, index) => (
            <tr key={item.id || index}>
              <td>{item.id}</td>
              <td>{item.ime}</td>
              <td>{item.priimek}</td>
              <td>{item.teza}</td>
              <td>{item.visina}</td>
              <td>{item.letoRojstva}</td>
              <td>{String(item.poskodovan)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
