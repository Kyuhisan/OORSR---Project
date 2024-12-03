import React, { useEffect, useState } from "react";
import { FunkcionarProps } from "../../models/Funkcionar";
import { IgralecProps } from "../../models/Igralec";
import { OsebaProps } from "../../models/Oseba";
import { EkipaProps } from "../../models/Ekipa";
import { useParams } from "react-router-dom";

type OsebaType = "Igralec" | "Direktor" | "Trener";

interface State {
  osebe: (IgralecProps | FunkcionarProps)[];
}

interface DodajOseboProps {
  seznamEkip: EkipaProps[];
}

const DodajOsebo: React.FC<DodajOseboProps> = ({ seznamEkip }) => {
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

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

  const [osebe, setOsebe] = useState<State["osebe"]>(
    () => seznamEkip[ekipaId].igralci
  );

  const [playerCount, setPlayerCount] = useState(0);

  useEffect(() => {
    const count = osebe.filter((o) => "visina" in o && "teza" in o).length;
    setPlayerCount(count);
  }, [osebe]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setOsebaData((prev) => ({
      ...prev,
      [name]: type === "number" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newOseba: IgralecProps | FunkcionarProps | null = null;

    if (osebaType === "Igralec") {
      newOseba = {
        ...(osebaData as IgralecProps),
        visina: osebaData.visina || 0,
        teza: osebaData.teza || 0,
        poskodovan: osebaData.poskodovan || false,
      };

      // Add the new Igralec to seznamEkip[ekipaId].igralci
      seznamEkip[ekipaId].igralci.push(newOseba);
    } else if (osebaType === "Direktor") {
      newOseba = {
        ...(osebaData as FunkcionarProps),
        vloga: osebaType,
        veljavnost: osebaData.veljavnost || 0,
      };

      // Add the new Direktor to seznamEkip[ekipaId].direktorji
      if (!seznamEkip[ekipaId].direktorji) {
        seznamEkip[ekipaId].direktorji = [];
      }
      seznamEkip[ekipaId].direktorji.push(newOseba);
    } else if (osebaType === "Trener") {
      newOseba = {
        ...(osebaData as FunkcionarProps),
        vloga: osebaType,
        veljavnost: osebaData.veljavnost || 0,
      };

      // Add the new Trener to seznamEkip[ekipaId].trenerji
      if (!seznamEkip[ekipaId].trenerji) {
        seznamEkip[ekipaId].trenerji = [];
      }
      seznamEkip[ekipaId].trenerji.push(newOseba);
    }

    if (newOseba) {
      // Update the local state for rendering (if necessary)
      setOsebe((prev) => [...prev, newOseba]);
    }

    // Reset form
    setOsebaData({
      id: 0,
      ime: "",
      priimek: "",
      letoRojstva: 2000,
      krajRojstva: "",
    });
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
          <label htmlFor="id" className="col-sm-3 col-form-label">
            ID:
          </label>
          <div className="col-sm-9">
            <input
              id="id"
              name="id"
              type="number"
              className="form-control"
              value={osebaData.id}
              onChange={handleInputChange}
            />
          </div>
        </div>
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
              <div className="col-sm-6 d-flex align-items-center">
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
                <input
                  id="veljavnost"
                  name="veljavnost"
                  type="number"
                  className="form-control"
                  value={osebaData.veljavnost || 0}
                  onChange={handleInputChange}
                />
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
