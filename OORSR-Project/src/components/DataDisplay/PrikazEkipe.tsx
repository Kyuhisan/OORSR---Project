import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PrikazDirektorjev from "./PrikazDirektorjev";
import PrikazIgralcev from "./PrikazIgralcev";
import PrikazTrenerjev from "./PrikazTrenerjev";

async function fetchEkipaFullData(id: number) {
  try {
    const ekipaResponse = await axios.get(`http://localhost:3001/ekipe/${id}`);
    const ekipa = ekipaResponse.data;

    const direktorji = ekipa.direktorji
      ? await Promise.all(
          ekipa.direktorji.map((id: number) =>
            axios.get(`http://localhost:3001/direktorji/${id}`)
          )
        ).then((res) => res.map((r) => r.data))
      : [];
    const trenerji = ekipa.trenerji
      ? await Promise.all(
          ekipa.trenerji.map((id: number) =>
            axios.get(`http://localhost:3001/trenerji/${id}`)
          )
        ).then((res) => res.map((r) => r.data))
      : [];
    const igralci = ekipa.igralci
      ? await Promise.all(
          ekipa.igralci.map((id: number) =>
            axios.get(`http://localhost:3001/igralci/${id}`)
          )
        ).then((res) => res.map((r) => r.data))
      : [];

    return { ekipa, direktorji, trenerji, igralci };
  } catch (error) {
    console.error("Error fetching ekipa full data:", error);
    return null;
  }
}

const PrikazEkipe: React.FC = () => {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  const [ekipaData, setEkipaData] = useState<any | null>(null);
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

  const { ekipa, direktorji, trenerji, igralci } = ekipaData;

  return (
    <>
      <div className="pb-5">
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
              <td>{ekipa.ime}</td>
              <td>{ekipa.letoUstanovitve}</td>
            </tr>
          </tbody>
        </table>
        <PrikazDirektorjev direktorji={direktorji} />
        <PrikazTrenerjev trenerji={trenerji} />
        <PrikazIgralcev igralci={igralci} />
      </div>
    </>
  );
};

export default PrikazEkipe;
