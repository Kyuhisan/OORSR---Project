import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SeznamEkip from "../DataDisplay/SeznamEkip";
import { EkipaProps } from "../../models/Ekipa";
import PrikazEkipe from "../DataDisplay/PrikazEkipe";
import DodajOsebo from "../Forms/DodajOsebo";
import DodajEkipo from "../Forms/DodajEkipo";

interface TeloProps {
  seznamEkip: EkipaProps[];
}

const Telo: React.FC<TeloProps> = ({ seznamEkip }) => {
  return (
    <div className="row px-4">
      <div className="col-3">
        <Routes>
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
          <Route path="/dodajEkipo" element={<DodajEkipo />} />
          <Route
            path="/ekipa/:idEkipe"
            element={<DodajOsebo seznamEkip={seznamEkip} />}
          />
        </Routes>
      </div>
      <div className="col-9">
        <Routes>
          <Route path="/" element={<SeznamEkip seznamEkip={seznamEkip} />} />
          <Route
            path="/ekipa/:idEkipe"
            element={
              <div className="container">
                <PrikazEkipe seznamEkip={seznamEkip} />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Telo;
