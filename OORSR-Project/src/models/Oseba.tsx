import React from "react";

export interface OsebaProps {
  id: number;
  ime: string;
  priimek: string;
  letoRojstva: number;
  krajRojstva?: string;
}

const Oseba: React.FC<OsebaProps> = ({
  id,
  ime,
  priimek,
  letoRojstva,
  krajRojstva,
}) => {
  return (
    <>
      {id}
      {ime}
      {priimek}
      {letoRojstva}
      {krajRojstva}
    </>
  );
};

export default Oseba;
