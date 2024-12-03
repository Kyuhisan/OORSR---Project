import React from "react";

interface DodajEkipoProps {}

const DodajEkipo: React.FC<DodajEkipoProps> = ({}) => {
  return (
    <div className="container bg-dark text-light rounded pt-4">
      <h1 className="text-center">Dodaj Ekipo</h1>
      <div className="d-flex justify-content-center">
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            Dodaj
          </button>
        </div>
      </div>
    </div>
  );
};

export default DodajEkipo;
