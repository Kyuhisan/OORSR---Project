import React from "react";
import { EkipaProps } from "../../models/Ekipa";
import { useParams } from "react-router-dom";
import PrikazIgralcev from "./PrikazIgralcev";
import PrikazDirektorjev from "./PrikazDirektorjev";
import PrikazTrenerjev from "./PrikazTrenerjev";

interface PrikazEkipeProps {
  seznamEkip: EkipaProps[];
}

const PrikazEkipe: React.FC<PrikazEkipeProps> = ({ seznamEkip }) => {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

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
              <td>{seznamEkip[ekipaId].ime}</td>
              <td>{seznamEkip[ekipaId].letoUstanovitve}</td>
            </tr>
          </tbody>
        </table>
        <PrikazDirektorjev direktorji={seznamEkip[ekipaId].direktorji} />
        <PrikazTrenerjev trenerji={seznamEkip[ekipaId].trenerji} />
        <PrikazIgralcev igralci={seznamEkip[ekipaId].igralci} />
      </div>
    </>
  );
};

export default PrikazEkipe;
