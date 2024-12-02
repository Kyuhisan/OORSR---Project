import React from "react";
import { FunkcionarProps } from "./Funkcionar";
import { IgralecProps } from "./Igralec";

export interface EkipaProps {
  id: number;
  ime: string;
  letoUstanovitve: number;
  direktor: FunkcionarProps;
  trener: FunkcionarProps;
  igralci: IgralecProps[];
}

const Ekipa: React.FC<EkipaProps> = ({
  id,
  ime,
  letoUstanovitve,
  direktor,
  trener,
  igralci,
}) => {
  return (
    <>
      {id}
      {ime}
      {letoUstanovitve}
      {direktor.ime}
      {trener.ime}
      {igralci.map((igralec) => igralec.ime)}
    </>
  );
};

export default Ekipa;
