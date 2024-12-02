import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SeznamEkip from "../DataDisplay/SeznamEkip";
import { EkipaProps } from "../../models/Ekipa";
import { IgralecProps } from "../../models/Igralec";
import PrikazEkipe from "../DataDisplay/PrikazEkipe";

interface TeloProps {
  seznamEkip: EkipaProps[];
}

const Telo: React.FC<TeloProps> = ({ seznamEkip }) => {
  const [igralci, setIgralci] = React.useState<IgralecProps[]>([]);

  React.useEffect(() => {
    setIgralci(seznamEkip[0].igralci);
  });
  console.log(igralci);

  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
};

export default Telo;
