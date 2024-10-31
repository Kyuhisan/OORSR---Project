import { getEkipa } from "../Ekipa/Ekipa";

function Menu() {
  return (
    <header className="container text-center">
      <h1>{getEkipa.props.ime}</h1>
    </header>
  );
}

export default Menu;
