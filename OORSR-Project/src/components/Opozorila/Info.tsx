import React from "react";

interface InfoProps {
  igralciCount: number;
}

const Info: React.FC<InfoProps> = ({ igralciCount }) => {
  return (
    <>
      {igralciCount >= 11 && (
        <div className="info text-success">
          {igralciCount} Ekipa ima dovolj igralcev.
        </div>
      )}
    </>
  );
};

export default Info;
