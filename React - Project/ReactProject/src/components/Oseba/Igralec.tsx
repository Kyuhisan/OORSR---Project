import { OsebaProps } from "../Oseba/Oseba";

export interface IgralecProps extends OsebaProps {
  visina: number;
  teza: number;
  poskodovan: boolean;
}

const Igralec: React.FC<IgralecProps> = ({
  ime,
  priimek,
  letoRojstva,
  krajRojstva,
  visina,
  teza,
  poskodovan,
}) => {
  return (
    <div className="igralec">
      <p>
        Ime: {ime} {priimek}
      </p>
      <p>Leto Rojstva: {letoRojstva}</p>
      <p>Kraj Rojstva: {krajRojstva}</p>
      <p>Višina: {visina} cm</p>
      <p>Teža: {teza} kg</p>
      <p>Poškodovan: {poskodovan ? "Da" : "Ne"}</p>
    </div>
  );
};

export default Igralec;
