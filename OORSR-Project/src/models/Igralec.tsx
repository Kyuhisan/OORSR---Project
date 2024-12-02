import React from "react";
import { OsebaProps } from ".././models/Oseba";

export interface IgralecProps extends OsebaProps {
  visina: number;
  teza: number;
  poskodovan: boolean;
}

const Igralec: React.FC<IgralecProps> = ({
  id,
  ime,
  priimek,
  letoRojstva,
  krajRojstva,
  visina,
  teza,
  poskodovan,
}) => {
  return (
    <>
      {id}
      {ime}
      {priimek}
      {letoRojstva}
      {krajRojstva}
      {visina}
      {teza}
      {poskodovan}
    </>
  );
};

export default Igralec;
