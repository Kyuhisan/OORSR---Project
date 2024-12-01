import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DodajEkipo from "../Ekipa/DodajEkipo";

export interface IEkipaProps {
  id: number;
  ime: string;
  letoUstanovitve: number;
}

function Telo() {
  const [ekipe, setEkipe] = useState<IEkipaProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchEkipe = async () => {
    try {
      const response = await fetch("http://localhost:3001/ekipe");
      if (!response.ok) {
        throw new Error("Failed to fetch teams");
      }
      const data = await response.json();
      setEkipe(data);
    } catch {}
  };

  useEffect(() => {
    fetchEkipe();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (ekipe.length === 0) {
    return <p>Loading teams...</p>;
  }

  return (
    <div className="container">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Ime Ekipe</th>
            <th scope="col">Leto Ustanovitve</th>
          </tr>
        </thead>
        <tbody>
          {ekipe.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/ekipa/${item.id}`} className="no-style">
                  {item.ime}
                </Link>
              </td>
              <td>
                <Link to={`/ekipa/${item.id}`} className="no-style">
                  {item.letoUstanovitve}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={`/dodaj-ekipo`} className="no-style">
        <DodajEkipo />
      </Link>
    </div>
  );
}

export default Telo;
