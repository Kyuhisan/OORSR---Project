import { getEkipa } from "../Ekipa/Ekipa";
import Igralec from "../Oseba/Igralec";

function Telo() {
  return (
    <div>
      {getEkipa.props.ime} {getEkipa.props.letoUstanovitve}
      {getEkipa.props.direktor()}
      {getEkipa.props.trener()}
      {getEkipa.props.igralci.map((player, index) => (
        <Igralec
          visina={0}
          teza={0}
          poskodovan={false}
          id={0}
          ime={player.ime}
          priimek={""}
          letoRojstva={0}
          key={index}
          {...Igralec}
        />
      ))}
    </div>
  );
}

export default Telo;
