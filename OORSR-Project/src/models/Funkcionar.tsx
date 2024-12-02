import React from "react";
import { OsebaProps } from ".././models/Oseba";

export interface FunkcionarProps extends OsebaProps {
  vloga: string;
  veljavnost: number;
}

const Funkcionar: React.FC<FunkcionarProps> = ({
  id,
  ime,
  priimek,
  letoRojstva,
  krajRojstva,
  vloga,
  veljavnost,
}) => {
  return (
    <>
      {id}
      {ime}
      {priimek}
      {letoRojstva}
      {krajRojstva}
      {vloga}
      {veljavnost}
    </>
  );
};

export default Funkcionar;
