import "./App.css";

import Menu from "./components/Layout/Menu";
import Noga from "./components/Layout/Noga";
import SeznamEkip from "./components/Ekipa/SeznamEkip";

export default function App() {
  return (
    <>
      <div id="Root">
        <div id="Menu">
          <Menu />
        </div>
        <div id="Telo">
          <SeznamEkip />
        </div>
        <div id="Noga">
          <Noga />
        </div>
      </div>
    </>
  );
}
