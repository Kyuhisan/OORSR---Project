import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SeznamEkip from "../DataDisplay/SeznamEkip";
import DodajOsebo from "../Forms/DodajOsebo";
import DodajEkipo from "../Forms/DodajEkipo";
import PrikazEkipe from "../DataDisplay/PrikazEkipe";

const Telo: React.FC = ({}) => {
  
  return (
    <div className="row px-4">
      <div className="col-3">
        <Routes>          
          <Route path="/dodajEkipo" element={<DodajEkipo />} />
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
          <Route path="/ekipa/:idEkipe" element={<DodajOsebo />} />
        </Routes>
      </div>
      
      <div className="col-9">
        <Routes>
          <Route path="/" element={<SeznamEkip />} />
          <Route path="/dodajEkipo" element={<SeznamEkip />} />
          <Route
            path="/ekipa/:idEkipe"
            element={
              <div className="container">
                <PrikazEkipe />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Telo;
