import React, { useState, useEffect } from "react";
import Info from "../Opozorila/Info";
import Opozorilo from "../Opozorila/Opozorilo";
import { Link } from "react-router-dom";
import axios from "axios";
import { EkipaProps } from "../../models/Ekipa";

async function getEkipe() {
  const ekipaResponse = await axios.get(`http://localhost:3001/ekipe/`);
  const ekipe = ekipaResponse.data;
  return ekipe;
}

const SeznamEkip: React.FC = () => {
  const [ekipe, setEkipe] = useState<EkipaProps[]>([]);

  useEffect(() => {
    getEkipe()
      .then((data) => setEkipe(data))
      .catch((error) => console.error("Error fetching ekipe:", error));
  }, []);

  return (
    <>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Ime Ekipe</th>
            <th scope="col">Leto Ustanovitve</th>
            <th scope="col">Stevilo Igralcev</th>
          </tr>
        </thead>
        <tbody>
          {ekipe.map((ekipa) => (
            <tr key={ekipa.id}>
              <td>
                <Link to={`/ekipa/${ekipa.id}`} className="no-style">
                  {ekipa.ime}
                </Link>
              </td>
              <td>{ekipa.letoUstanovitve}</td>
              <td>
                <Opozorilo igralciCount={ekipa.igralci.length} />
                <Info igralciCount={ekipa.igralci.length} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SeznamEkip;
