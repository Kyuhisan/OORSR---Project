import { useParams } from "react-router-dom";
import { seznamEkip } from "../Ekipa/Ekipa";

function Menu() {
  const ekipe = seznamEkip;
  const { idEkipe } = useParams<{ idEkipe: string }>();
  const ekipaId = parseInt(idEkipe || "0", 10);

  if (!idEkipe) {
    return (
      <header className="container text-center">
        <h1>Seznam Ekip</h1>
      </header>
    );
  } else {
    return (
      <header className="container text-center">
        <h1>{ekipe[ekipaId]?.ime}</h1>
      </header>
    );
  }
}

export default Menu;
