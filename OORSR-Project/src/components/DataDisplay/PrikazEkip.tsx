import React from "react";
import { EkipaProps } from "../../models/Ekipa";
import Info from "../Opozorila/Info";
import Opozorilo from "../Opozorila/Opozorilo";
import { Link } from "react-router-dom";

interface PrikazEkipProps {
  seznamEkip: EkipaProps[];
}

const PrikazEkip: React.FC<PrikazEkipProps> = ({ seznamEkip }) => {
  return (
    <>
      <div className="container">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Ime Ekipe</th>
              <th scope="col">Leto Ustanovitve</th>
              <th scope="col">Stevilo Igralcev</th>
            </tr>
          </thead>
          <tbody>
            {seznamEkip.map((ekipa) => (
              <tr key={ekipa.id}>
                <td>
                  <Link to={`/ekipa/${ekipa.id}`} className="no-style">
                    {ekipa.ime}
                  </Link>
                </td>
                <td>{ekipa.letoUstanovitve}</td>
                <td>
                  {
                    <>
                      <Opozorilo igralciCount={ekipa.igralci.length} />
                      <Info igralciCount={ekipa.igralci.length} />
                    </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PrikazEkip;
