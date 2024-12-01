import Info from "../Conditionals/Info";
import Opozorilo from "../Conditionals/Opozorilo";
import { FunkcionarProps } from "../Oseba/Funkcionar";
import { IgralecProps } from "../Oseba/Igralec";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export interface IEkipaProps {
  ime: string;
  letoUstanovitve: number;
  direktor: FunkcionarProps;
  trener: FunkcionarProps;
  igralci: IgralecProps[];
}

async function fetchEkipaFullData(id: number) {
  try {
    const ekipaResponse = await axios.get(`http://localhost:3001/ekipe/${id}`);
    const ekipa = ekipaResponse.data;

    if (!ekipa) throw new Error("Ekipa not found!");

    const [direktorResponse, trenerResponse, igralciResponses] =
      await Promise.all([
        axios.get(`http://localhost:3001/direktorji/${ekipa.direktorId}`),
        axios.get(`http://localhost:3001/trenerji/${ekipa.trenerId}`),
        Promise.all(
          ekipa.igralciIds.map((id: number) =>
            axios.get(`http://localhost:3001/igralci/${id}`)
          )
        ),
      ]);

    const direktor = direktorResponse.data;
    const trener = trenerResponse.data;
    const igralci = igralciResponses.map((response) => response.data);

    return { ekipa, direktor, trener, igralci };
  } catch (error) {
    console.error("Error fetching ekipa full data:", error);
    return null;
  }
}

export function DisplayEkipa() {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  const [ekipaData, setEkipaData] = useState<any>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEkipaFullData(ekipaId);
      if (data) {
        setEkipaData(data);
      } else {
        setError(true);
      }
    };
    fetchData();
  }, [ekipaId]);

  if (error) {
    return <p>Error: Team not found!</p>;
  }
  if (!ekipaData) {
    return <p>Loading...</p>;
  }

  const { ekipa, direktor, trener, igralci } = ekipaData;

  return (
    <>
      <h4>Podatki o ekipi:</h4>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Ime Ekipe</th>
            <th scope="col">Leto Ustanovitve</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ekipa.ime}</td>
            <td>{ekipa.letoUstanovitve}</td>
          </tr>
        </tbody>
      </table>
      <DisplayDirektor direktor={direktor} />
      <DisplayTrener trener={trener} />
      <DisplayIgralci igralci={igralci} />
    </>
  );
}

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
