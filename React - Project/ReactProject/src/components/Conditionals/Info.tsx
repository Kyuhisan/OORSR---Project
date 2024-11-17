import { getEkipa } from "../Ekipa/Ekipa";

export function Info() {
  return (
    <div>
      {getEkipa.props.igralci.length >= 11 && (
        <p className="text-success">Ekipa ima dovolj igralcev.</p>
      )}
    </div>
  );
}

export default Info;
