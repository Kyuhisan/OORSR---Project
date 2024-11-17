import { getEkipa } from "../Ekipa/Ekipa";

export function Opozorilo() {
  return (
    <div>
      {getEkipa.props.igralci.length < 11 && (
        <p className="text-danger">Ekipa nima dovolj igralcev.</p>
      )}
    </div>
  );
}

export default Opozorilo;
