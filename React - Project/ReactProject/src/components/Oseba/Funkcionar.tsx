import { IOsebaProps } from "../Oseba/Oseba";

export interface IFunkcionarProps extends IOsebaProps {
  vloga: string;
  veljavnost: boolean;
}

export const setDirektor = {
  id: 1,
  ime: "Milan",
  priimek: "Jovanović",
  vloga: "Direktor",
  veljavnost: true,
  letoRojstva: 1970,
  krajRojstva: "Ljubljana",
};

export const setTrener = {
  id: 2,
  ime: "Igor",
  priimek: "Šarić",
  vloga: "Trener",
  veljavnost: true,
  letoRojstva: 1982,
  krajRojstva: "Maribor",
};

// Director
export const setDirektor2 = {
  id: 1,
  ime: "Slavko",
  priimek: "Mikulič",
  vloga: "Direktor",
  veljavnost: true,
  letoRojstva: 1970,
  krajRojstva: "Maribor",
};

// Trainer
export const setTrener2 = {
  id: 2,
  ime: "Žiga",
  priimek: "Kralj",
  vloga: "Trener",
  veljavnost: true,
  letoRojstva: 1983,
  krajRojstva: "Celje",
};

function Funkcionar(props: IFunkcionarProps) {
  return (
    <div>
      {props.id} {props.ime} {props.priimek} {props.letoRojstva}
      {props.krajRojstva} {props.vloga} {props.veljavnost}
    </div>
  );
}

export default Funkcionar;
