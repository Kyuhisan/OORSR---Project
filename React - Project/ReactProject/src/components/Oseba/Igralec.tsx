import { IOsebaProps } from "../Oseba/Oseba";

export interface IIgralecProps extends IOsebaProps {
  visina: number;
  teza: number;
  poskodovan: boolean;
}

export const getIgralec = () => (
  <Igralec
    id={0}
    ime="Matic"
    priimek="Kuhar"
    teza={100}
    visina={180}
    letoRojstva={1999}
    poskodovan
  />
);

function Igralec(props: IIgralecProps) {
  return (
    <div>
      {props.id} {props.ime} {props.priimek} {props.letoRojstva}
      {props.krajRojstva} {props.visina} {props.teza} {props.poskodovan}
    </div>
  );
}

export default Igralec;
