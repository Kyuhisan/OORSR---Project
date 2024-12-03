import React from "react";
import { FunkcionarProps } from "../../models/Funkcionar";

interface PrikazDirektorjevProps {
  direktorji: FunkcionarProps[];
}

const PrikazDirektorjev: React.FC<PrikazDirektorjevProps> = ({
  direktorji,
}) => {
  return (
    <>
      <div className="pb-5">
        <h5>Direktorji:</h5>
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
            {direktorji.map((item, index) => (
              <tr key={item.id || index}>
                <td>{item.id}</td>
                <td>{item.ime}</td>
                <td>{item.priimek}</td>
                <td>{item.krajRojstva}</td>
                <td>{item.letoRojstva}</td>
                <td>{item.veljavnost}</td>
                <td>{item.vloga}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PrikazDirektorjev;
