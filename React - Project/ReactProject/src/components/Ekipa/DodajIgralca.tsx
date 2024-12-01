import React, { useState } from "react";
import { IgralecProps } from "../Oseba/Igralec";

interface DodajIgralcaProps {
  onDodaj: (novIgralec: IgralecProps) => void;
}

const DodajIgralca: React.FC<DodajIgralcaProps> = ({ onDodaj }) => {
  const [novIgralec, setNovIgralec] = useState<Omit<IgralecProps, "id">>({
    ime: "",
    priimek: "",
    letoRojstva: 2000,
    krajRojstva: "",
    visina: 180,
    teza: 75,
    poskodovan: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const igralecZId = { ...novIgralec, id: Date.now() }; // Assign unique ID
    onDodaj(igralecZId);
    setNovIgralec({
      ime: "",
      priimek: "",
      letoRojstva: 2000,
      krajRojstva: "",
      visina: 180,
      teza: 75,
      poskodovan: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Dodaj novega igralca</h4>
      <input
        type="text"
        placeholder="Ime"
        value={novIgralec.ime}
        onChange={(e) => setNovIgralec({ ...novIgralec, ime: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Priimek"
        value={novIgralec.priimek}
        onChange={(e) =>
          setNovIgralec({ ...novIgralec, priimek: e.target.value })
        }
        required
      />
      <input
        type="number"
        placeholder="Leto rojstva"
        value={novIgralec.letoRojstva}
        onChange={(e) =>
          setNovIgralec({ ...novIgralec, letoRojstva: Number(e.target.value) })
        }
        required
      />
      <input
        type="text"
        placeholder="Kraj rojstva"
        value={novIgralec.krajRojstva}
        onChange={(e) =>
          setNovIgralec({ ...novIgralec, krajRojstva: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Višina (cm)"
        value={novIgralec.visina}
        onChange={(e) =>
          setNovIgralec({ ...novIgralec, visina: Number(e.target.value) })
        }
        required
      />
      <input
        type="number"
        placeholder="Teža (kg)"
        value={novIgralec.teza}
        onChange={(e) =>
          setNovIgralec({ ...novIgralec, teza: Number(e.target.value) })
        }
        required
      />
      <label>
        Poškodovan:
        <input
          type="checkbox"
          checked={novIgralec.poskodovan}
          onChange={(e) =>
            setNovIgralec({ ...novIgralec, poskodovan: e.target.checked })
          }
        />
      </label>
      <button type="submit">Dodaj igralca</button>
    </form>
  );
};

export default DodajIgralca;
