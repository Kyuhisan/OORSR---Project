import React from "react";

interface InfoProps {
  igralciCount: number;
}

const Info: React.FC<InfoProps> = ({ igralciCount }) => {
  return (
    <>
      {igralciCount >= 11 && (
        <div className="info text-success">
          <p>Ekipa ima dovolj igralcev.</p>
        </div>
      )}
    </>
  );
};

export default Info;
