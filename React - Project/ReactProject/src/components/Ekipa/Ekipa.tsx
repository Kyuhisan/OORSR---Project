import Igralec from "../Oseba/Igralec";
import Funkcionar from "../Oseba/Funkcionar";
import { getDirektor, getTrener } from "../Oseba/Funkcionar";
import { getIgralec } from "../Oseba/Igralec";

interface IEkipaProps {
  ime: string;
  letoUstanovitve: number;
  direktor: typeof Funkcionar;
  trener: typeof Funkcionar;
  igralci: (typeof Igralec)[];
}

export const getEkipa = (
  <Ekipa
    ime="Olimpija"
    letoUstanovitve={1977}
    direktor={getDirektor}
    trener={getTrener}
    igralci={[getIgralec, getIgralec, getIgralec, getIgralec, getIgralec]}
  />
);

function Ekipa(props: IEkipaProps) {
  return (
    <div>
      {props.ime} {props.letoUstanovitve}
    </div>
  );
}

export default Ekipa;
