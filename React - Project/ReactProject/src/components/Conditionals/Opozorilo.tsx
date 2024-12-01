import React from "react";

interface OpozoriloProps {
  igralciCount: number;
}

const Opozorilo: React.FC<OpozoriloProps> = ({ igralciCount }) => {
  return (
    <>
      {igralciCount < 11 && (
        <div className="opozorilo text-danger">
          <p>Opozorilo: Ekipa ima premalo igralcev!</p>
        </div>
      )}
    </>
  );
};

export default Opozorilo;
