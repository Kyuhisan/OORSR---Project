import React from "react";

interface OpozoriloProps {
  igralciCount: number;
}

const Opozorilo: React.FC<OpozoriloProps> = ({ igralciCount }) => {
  return (
    <>
      {igralciCount < 11 && (
        <div className="opozorilo text-danger">
          {igralciCount} Ekipa ima premalo igralcev!
        </div>
      )}
    </>
  );
};

export default Opozorilo;
