import React from "react";
import { Routes, Route } from "react-router-dom";
import SeznamEkip from "../DataDisplay/SeznamEkip";
import { EkipaProps } from "../../models/Ekipa";
import { IgralecProps } from "../../models/Igralec";
import PrikazEkipe from "../DataDisplay/PrikazEkipe";
import DodajOsebo from "../Forms/DodajOsebo";
import DodajEkipo from "../Forms/DodajEkipo";

interface TeloProps {
  seznamEkip: EkipaProps[];
}

const Telo: React.FC<TeloProps> = ({ seznamEkip }) => {
  const [igralci, setIgralci] = React.useState<IgralecProps[]>([]);

  React.useEffect(() => {
    if (seznamEkip.length > 0) {
      setIgralci(seznamEkip[1].igralci);
    }
  }, [seznamEkip]);

  return (
    <div className="row px-4">
      <div className="col-3">
        <Routes>
          <Route path="/" element={<DodajEkipo />} />
          <Route
            path="/ekipa/:idEkipe"
            element={<DodajOsebo seznamIgralcev={igralci} />}
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
