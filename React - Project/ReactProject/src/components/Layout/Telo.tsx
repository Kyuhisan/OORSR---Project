import {
  DisplayDirektor,
  DisplayIgralci,
  DisplayTrener,
  DisplayEkipa,
} from "../Ekipa/Ekipa";

function Telo() {
  return (
    <div className="container">
      <DisplayEkipa />
      <DisplayDirektor />
      <DisplayTrener />
      <DisplayIgralci />
    </div>
  );
}

export default Telo;
