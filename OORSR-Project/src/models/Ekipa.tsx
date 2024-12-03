import React from "react";
import { FunkcionarProps } from "./Funkcionar";
import { IgralecProps } from "./Igralec";

export interface EkipaProps {
  id: number;
  ime: string;
  letoUstanovitve: number;
  direktorji: FunkcionarProps[];
  trenerji: FunkcionarProps[];
  igralci: IgralecProps[];
}

const Ekipa: React.FC<EkipaProps> = ({
  id,
  ime,
  letoUstanovitve,
  direktorji,
  trenerji,
  igralci,
}) => {
  return (
    <>
      {id}
      {ime}
      {letoUstanovitve}
      {direktorji.map((direktor) => direktor.ime)}
      {trenerji.map((trener) => trener.ime)}
      {igralci.map((igralec) => igralec.ime)}
    </>
  );
};

export default Ekipa;
