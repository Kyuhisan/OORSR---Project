import { IOsebaProps } from "../Oseba/Oseba";

export interface IFunkcionarProps extends IOsebaProps {
  vloga: string;
  veljavnost: number;
}

export const setDirektor = {
  id: 1,
  ime: "direktor",
  priimek: "direktor",
  vloga: "direktor",
  veljavnost: 31,
  letoRojstva: 1988,
  krajRojstva: "Slovenj Gradec",
};

export const setTrener = {
  id: 2,
  ime: "trener",
  priimek: "trener",
  vloga: "trener",
  veljavnost: 21,
  letoRojstva: 1958,
  krajRojstva: "Maribor",
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
