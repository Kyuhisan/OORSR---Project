import React, { useEffect, useState } from "react";
import { FunkcionarProps } from "../../models/Funkcionar";
import { IgralecProps } from "../../models/Igralec";
import { OsebaProps } from "../../models/Oseba";
import { useParams } from "react-router-dom";
import axios from "axios";

type OsebaType = "Igralec" | "Direktor" | "Trener";

interface State {
  osebe: (IgralecProps | FunkcionarProps)[];
}

async function fetchEkipaFullData(id: number) {
  try {
    const ekipaResponse = await axios.get(`http://localhost:3001/ekipe/${id}`);
    const ekipa = ekipaResponse.data;

    const direktorji = ekipa.direktorji
      ? await Promise.all(
          ekipa.direktorji.map((id: number) =>
            axios.get(`http://localhost:3001/direktorji/${id}`)
          )
        ).then((res) => res.map((r) => r.data))
      : [];
    const trenerji = ekipa.trenerji
      ? await Promise.all(
          ekipa.trenerji.map((id: number) =>
            axios.get(`http://localhost:3001/trenerji/${id}`)
          )
        ).then((res) => res.map((r) => r.data))
      : [];
    const igralci = ekipa.igralci
      ? await Promise.all(
          ekipa.igralci.map((id: number) =>
            axios.get(`http://localhost:3001/igralci/${id}`)
          )
        ).then((res) => res.map((r) => r.data))
      : [];

    return { ekipa, direktorji, trenerji, igralci };
  } catch (error) {
    console.error("Error fetching ekipa full data:", error);
    return null;
  }
}

const DodajOsebo: React.FC<{ onOsebaAdded: () => void }> = ({
  onOsebaAdded,
}) => {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  const [ekipaData, setEkipaData] = useState<any | null>(null);

  const [osebaType, setOsebaType] = useState<OsebaType>("Igralec");
  const [osebaData, setOsebaData] = useState<
    OsebaProps & Partial<IgralecProps & FunkcionarProps>
  >({
    id: 0,
    ime: "",
    priimek: "",
    letoRojstva: 0,
    krajRojstva: "",
  });

  const [osebe, setOsebe] = useState<State["osebe"]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEkipaFullData(ekipaId);
      if (data) {
        setEkipaData(data);
        setOsebe(data.igralci || []);
      }
    };
    fetchData();
  }, [ekipaId]);

  const playerCount = osebe.length;

  // Updates input fields in real time
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setOsebaData((prev) => ({
      ...prev,
      [name]: type === "number" ? +value : value,
    }));
  };
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setOsebaData((prev) => ({
      ...prev,
      [name]: value === "true",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let newOseba: IgralecProps | FunkcionarProps;
      let endpoint = "";
      let ekipaField = "";

      if (osebaType === "Igralec") {
        endpoint = `http://localhost:3001/igralci`;
        ekipaField = "igralci";
      } else {
        endpoint =
          osebaType === "Direktor"
            ? `http://localhost:3001/direktorji`
            : `http://localhost:3001/trenerji`;
        ekipaField = osebaType === "Direktor" ? "direktorji" : "trenerji";
      }

      const response = await axios.get(endpoint);
      const existingEntries = response.data;
      const maxId = existingEntries.reduce(
        (max: number, entry: { id: number }) => Math.max(max, entry.id),
        0
      );

      const newId = maxId + 1;

      if (osebaType === "Igralec") {
        newOseba = {
          ...(osebaData as IgralecProps),
          id: newId,
          visina: osebaData.visina || 0,
          teza: osebaData.teza || 0,
          poskodovan: osebaData.poskodovan || false,
        };
      } else {
        newOseba = {
          ...(osebaData as FunkcionarProps),
          id: newId,
          vloga: osebaType,
          veljavnost: osebaData.veljavnost || false,
        };
      }

      const createdResponse = await axios.post(endpoint, newOseba);
      const createdOseba = createdResponse.data;

      const updatedEkipa = {
        ...ekipaData.ekipa,
        [ekipaField]: [...ekipaData.ekipa[ekipaField], createdOseba.id],
      };

      await axios.put(`http://localhost:3001/ekipe/${ekipaId}`, updatedEkipa);

      setOsebe((prev) => [...prev, createdOseba]);
      setEkipaData((prev: any) => ({
        ...prev,
        ekipa: updatedEkipa,
      }));

      setOsebaData({
        id: 0,
        ime: "",
        priimek: "",
        letoRojstva: 0,
        krajRojstva: "",
      });

      onOsebaAdded();
    } catch (error) {
      console.error("Error adding person to ekipa:", error);
    }
  };

  return (
    <div className="container bg-dark text-light rounded pt-4">
      <h1 className="text-center">Dodaj Osebo</h1>
      <div className="text-center mb-3">
        <h4 className="text-center">Število Igralcev {playerCount}</h4>
      </div>
      <div className="d-flex justify-content-center">
        <div className="btn-group">
          <button
            type="button"
            className={`btn btn-outline-primary ${
              osebaType === "Igralec" ? "active" : ""
            }`}
            onClick={() => setOsebaType("Igralec")}
          >
            Igralec
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              osebaType === "Direktor" ? "active" : ""
            }`}
            onClick={() => setOsebaType("Direktor")}
          >
            Direktor
          </button>
          <button
            type="button"
            className={`btn btn-outline-primary ${
              osebaType === "Trener" ? "active" : ""
            }`}
            onClick={() => setOsebaType("Trener")}
          >
            Trener
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow">
        <div className="row mb-3">
          <label htmlFor="ime" className="col-sm-3 col-form-label">
            Ime:
          </label>
          <div className="col-sm-9">
            <input
              id="ime"
              name="ime"
              type="text"
              className="form-control"
              value={osebaData.ime}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="priimek" className="col-sm-3 col-form-label">
            Priimek:
          </label>
          <div className="col-sm-9">
            <input
              id="priimek"
              name="priimek"
              type="text"
              className="form-control"
              value={osebaData.priimek}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="letoRojstva" className="col-sm-5 col-form-label">
            Leto Rojstva:
          </label>
          <div className="col-sm-7">
            <input
              id="letoRojstva"
              name="letoRojstva"
              type="number"
              className="form-control"
              value={osebaData.letoRojstva}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="krajRojstva" className="col-sm-5 col-form-label">
            Kraj Rojstva:
          </label>
          <div className="col-sm-7">
            <input
              id="krajRojstva"
              name="krajRojstva"
              type="text"
              className="form-control"
              value={osebaData.krajRojstva || ""}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {osebaType === "Igralec" && (
          <>
            <div className="row mb-3">
              <label htmlFor="visina" className="col-sm-3 col-form-label">
                Višina:
              </label>
              <div className="col-sm-9">
                <input
                  id="visina"
                  name="visina"
                  type="number"
                  className="form-control"
                  value={osebaData.visina || 0}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="teza" className="col-sm-3 col-form-label">
                Teža:
              </label>
              <div className="col-sm-9">
                <input
                  id="teza"
                  name="teza"
                  type="number"
                  className="form-control"
                  value={osebaData.teza || 0}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="poskodovan" className="col-sm-4 col-form-label">
                Poškodovan:
              </label>
              <div className="col-sm-8 d-flex align-items-center">
                <input
                  id="poskodovan"
                  name="poskodovan"
                  type="checkbox"
                  className="form-check-input"
                  checked={osebaData.poskodovan || false}
                  onChange={(e) =>
                    setOsebaData((prev) => ({
                      ...prev,
                      poskodovan: e.target.checked,
                    }))
                  }
                />
              </div>
            </div>
          </>
        )}
        {osebaType !== "Igralec" && (
          <>
            <div className="row mb-3">
              <label htmlFor="vloga" className="col-sm-3 col-form-label">
                Vloga:
              </label>
              <div className="col-sm-9">
                <input
                  id="vloga"
                  name="vloga"
                  type="text"
                  className="form-control"
                  value={osebaType}
                  disabled
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="veljavnost" className="col-sm-4 col-form-label">
                Veljavnost:
              </label>
              <div className="col-sm-8">
                <select
                  id="veljavnost"
                  name="veljavnost"
                  className="form-select"
                  value={osebaData.veljavnost ? "true" : "false"}
                  onChange={handleDropdownChange}
                >
                  <option value="true">True</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
          </>
        )}
        <button type="submit" className="btn btn-primary">
          Dodaj
        </button>
      </form>
    </div>
  );
};

export default DodajOsebo;
