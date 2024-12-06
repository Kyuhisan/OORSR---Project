import React, { useEffect, useState } from "react";
import Noga from "./components/Layout/Noga";
import Menu from "./components/Layout/Menu";
import Telo from "./components/Layout/Telo";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import axios from "axios";
import { EkipaProps } from "./models/Ekipa";

// nodemon --watch db.json --exec json-server -- db.json --port 3001

async function getEkipaIme(id: number) {
  try {
    const ekipaResponse = await axios.get(`http://localhost:3001/ekipe/${id}`);
    const ekipa = ekipaResponse.data;
    return ekipa;
  } catch (error) {
    console.error("Error fetching ekipa full data:", error);
    return null;
  }
}

async function getEkipe() {
  const ekipaResponse = await axios.get(`http://localhost:3001/ekipe/`);
  const ekipe = ekipaResponse.data;
  return ekipe;
}

const App: React.FC = () => {
  const [seznamEkip, setEkipe] = useState<EkipaProps[]>([]);

  const DynamicMenu = () => {
    const { idEkipe } = useParams<{ idEkipe: string }>();
    const ekipaId = parseInt(idEkipe || "", 10);
    const [ekipaData, setEkipaData] = useState<any | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        const data = await getEkipaIme(ekipaId);
        if (data) {
          setEkipaData(data);
        }
      };
      fetchData();
    }, [ekipaId]);

    return <Menu imeEkipe={ekipaData ? ekipaData.ime : "Ekipa ne obstaja"} />;
  };

  useEffect(() => {
    getEkipe()
      .then((data) => setEkipe(data))
      .catch((error) => console.error("Error fetching ekipe:", error));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/dodajEkipo" element={<Menu />} />
          <Route path="/ekipa/:idEkipe" element={<DynamicMenu />} />
        </Routes>
        <Telo seznamEkip={seznamEkip} />
        <Noga />
      </BrowserRouter>
    </>
  );
};

export default App;
