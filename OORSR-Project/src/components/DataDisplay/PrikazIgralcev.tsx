import React from "react";
import { IgralecProps } from "../../models/Igralec";
import Info from "../Opozorila/Info";
import Opozorilo from "../Opozorila/Opozorilo";

interface PrikazIgralcevProps {
  igralci: IgralecProps[];
}

const PrikazIgralcev: React.FC<PrikazIgralcevProps> = ({ igralci }) => {
  return (
    <>
      <div className="pb-5">
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
      </div>
    </>
  );
};

export default PrikazIgralcev;
