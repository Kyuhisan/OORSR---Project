import axios from "axios";
import React, { useEffect, useState } from "react";
import { EkipaProps } from "../../models/Ekipa";

interface DodajEkipoProps {
  seznamEkip: EkipaProps[];
  onAddEkipa: (newEkipa: any) => void;
}

const DodajEkipo: React.FC<DodajEkipoProps> = ({ seznamEkip, onAddEkipa }) => {
  // State of ekipe
  const [ekipe, setEkipe] = useState<EkipaProps[]>(seznamEkip);

  useEffect(() => {
    if (seznamEkip.length > 0) {
      setEkipe(seznamEkip);
    }
  }, [seznamEkip]);

  // Initial State of Form
  const [ekipaData, setEkipaData] = useState({
    id: "",
    ime: "",
    letoUstanovitve: new Date().getFullYear(),
    direktorji: "",
    trenerji: "",
    igralci: "",
  });

  // Updates input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEkipaData((prev) => ({
      ...prev,
      [name]: name === "letoUstanovitve" ? +value : value,
    }));
  };
  const handleArrayInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: "direktorji" | "trenerji" | "igralci"
  ) => {
    const { value } = e.target;
    setEkipaData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Executes on submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Updates igralci, direktorji, trenerji columns in ekipa
      const parsedEkipaData = {
        ...ekipaData,
        direktorji: ekipaData.direktorji
          .split(",")
          .map((id) => parseInt(id.trim()))
          .filter((id) => !isNaN(id)),
        trenerji: ekipaData.trenerji
          .split(",")
          .map((id) => parseInt(id.trim()))
          .filter((id) => !isNaN(id)),
        igralci: ekipaData.igralci
          .split(",")
          .map((id) => parseInt(id.trim()))
          .filter((id) => !isNaN(id)),
      };

      const response = await axios.get("http://localhost:3001/ekipe");
      const existingTeams = response.data;

      const maxId = existingTeams.reduce(
        (max: number, team: { id: number }) => Math.max(max, team.id),
        0
      );

      const newId = maxId + 1;
      const newTeam = { ...parsedEkipaData, id: newId };

      onAddEkipa(newTeam);

      // Creates new team
      await axios.post("http://localhost:3001/ekipe", newTeam);

      setEkipaData({
        id: "",
        ime: "",
        letoUstanovitve: new Date().getFullYear(),
        direktorji: "",
        trenerji: "",
        igralci: "",
      });
    } catch (error) {
      console.error("Error adding ekipa:", error);
    }
  };

  return (
    <div className="container text-center bg-dark text-light rounded p-4">
      <h1 className="text-center">Dodaj Ekipo</h1>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow">
        <div className="mb-3">
          <label htmlFor="ime" className="form-label">
            Ime ekipe:
          </label>
          <input
            id="ime"
            name="ime"
            type="text"
            className="form-control"
            value={ekipaData.ime}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="letoUstanovitve" className="form-label">
            Leto ustanovitve:
          </label>
          <input
            id="letoUstanovitve"
            name="letoUstanovitve"
            type="number"
            className="form-control"
            value={ekipaData.letoUstanovitve}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direktorji" className="form-label">
            ID-ji direktorjev (ločeni z vejico):
          </label>
          <input
            id="direktorji"
            type="text"
            className="form-control"
            value={ekipaData.direktorji}
            onChange={(e) => handleArrayInputChange(e, "direktorji")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="trenerji" className="form-label">
            ID-ji trenerjev (ločeni z vejico):
          </label>
          <input
            id="trenerji"
            type="text"
            className="form-control"
            value={ekipaData.trenerji}
            onChange={(e) => handleArrayInputChange(e, "trenerji")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="igralci" className="form-label">
            ID-ji igralcev (ločeni z vejico):
          </label>
          <input
            id="igralci"
            type="text"
            className="form-control"
            value={ekipaData.igralci}
            onChange={(e) => handleArrayInputChange(e, "igralci")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Dodaj ekipo
        </button>
      </form>
    </div>
  );
};

export default DodajEkipo;
