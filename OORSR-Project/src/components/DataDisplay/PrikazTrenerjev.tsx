import React from "react";
import { FunkcionarProps } from "../../models/Funkcionar";

interface PrikazTrenerjevProps {
  trenerji: FunkcionarProps[];
}

const PrikazTrenerjev: React.FC<PrikazTrenerjevProps> = ({ trenerji }) => {
  return (
    <>
      <div>
        <h5>Trenerji:</h5>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ime</th>
              <th scope="col">Priimek</th>
              <th scope="col">Kraj Rojstva</th>
              <th scope="col">Leto Rojstva</th>
              <th scope="col">Veljavnost</th>
              <th scope="col">Vloga</th>
            </tr>
          </thead>
          <tbody>
            {trenerji.map((item, index) => (
              <tr key={item.id || index}>
                <td>{item.id}</td>
                <td>{item.ime}</td>
                <td>{item.priimek}</td>
                <td>{item.krajRojstva}</td>
                <td>{item.letoRojstva}</td>
                <td>{String(item.veljavnost)}</td>
                <td>{item.vloga}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PrikazTrenerjev;
