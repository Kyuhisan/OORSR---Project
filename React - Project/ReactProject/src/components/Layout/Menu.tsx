import { setEkipa } from "../Ekipa/Ekipa";

function Menu() {
  return (
    <header className="container text-center">
      <h1>{setEkipa.props.ime}</h1>
    </header>
  );
}

export default Menu;
