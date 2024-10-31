import "./App.css";

import Menu from "./components/Layout/Menu";
import Telo from "./components/Layout/Telo";
import Noga from "./components/Layout/Noga";

export default function App() {
  return (
    <>
      <div id="Root">
        <div id="Menu">
          <Menu />
        </div>
        <div id="Telo">
          <Telo />
        </div>
        <div id="Noga">
          <Noga />
        </div>
      </div>
    </>
  );
}
