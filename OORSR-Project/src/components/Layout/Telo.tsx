import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import SeznamEkip from "../DataDisplay/SeznamEkip";
import DodajOsebo from "../Forms/DodajOsebo";
import DodajEkipo from "../Forms/DodajEkipo";
import PrikazEkipe from "../DataDisplay/PrikazEkipe";
import { EkipaProps } from "../../models/Ekipa";
import { IgralecProps } from "../../models/Igralec";

interface TeloProps {
  seznamEkip: EkipaProps[];
}

const Telo: React.FC<TeloProps> = ({ seznamEkip }) => {
  const [ekipe, setEkipe] = useState<EkipaProps[]>(seznamEkip);
  const [igralci, setIgralci] = useState<IgralecProps[][]>([]);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (seznamEkip.length > 0) {
      setEkipe(seznamEkip);
      setIgralci(seznamEkip.map((ekipa) => ekipa.igralci));
    }
  }, [seznamEkip]);

  // Handler to add a new team
  const addEkipa = (newEkipa: EkipaProps) => {
    setEkipe((prevEkipe) => [...prevEkipe, newEkipa]);
  };

  const reloadPrikazEkipe = () => {
    setReloadKey((prev) => prev + 1);
  };

  return (
    <div className="row px-4">
      <div className="col-3">
        <Routes>
          <Route
            path="/dodajEkipo"
            element={<DodajEkipo seznamEkip={ekipe} onAddEkipa={addEkipa} />}
          />
          <Route
            path="/"
            element={
              <div className="container bg-dark text-light rounded p-4">
                <Link to={`/dodajEkipo`} className="no-style">
                  <h1 className="text-center no-style">Dodaj Ekipo</h1>
                </Link>
              </div>
            }
          />
          <Route
            path="/ekipa/:idEkipe"
            element={<DodajOsebo onOsebaAdded={reloadPrikazEkipe} />}
          />
        </Routes>
      </div>

      <div className="col-9">
        <Routes>
          <Route path="/" element={<SeznamEkip seznamEkip={ekipe} />} />
          <Route
            path="/dodajEkipo"
            element={<SeznamEkip seznamEkip={ekipe} />}
          />
          <Route
            path="/ekipa/:idEkipe"
            element={
              <div className="container">
                <PrikazEkipe key={reloadKey} />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Telo;
