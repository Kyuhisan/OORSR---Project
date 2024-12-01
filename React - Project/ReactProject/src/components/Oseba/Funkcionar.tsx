import { OsebaProps } from "../Oseba/Oseba";

export interface FunkcionarProps extends OsebaProps {
  vloga: string;
  veljavnost: boolean;
}

const Funkcionar: React.FC<FunkcionarProps> = ({
  ime,
  priimek,
  letoRojstva,
  krajRojstva,
  vloga,
  veljavnost,
}) => {
  return (
    <div>
      <p>
        Ime: {ime} {priimek}
      </p>
      <p>Vloga: {vloga}</p>
      <p>Leto rojstva: {letoRojstva}</p>
      {krajRojstva && <p>Kraj rojstva: {krajRojstva}</p>}
      <p>Veljavnost: {veljavnost}</p>
    </div>
  );
};

export default Funkcionar;
