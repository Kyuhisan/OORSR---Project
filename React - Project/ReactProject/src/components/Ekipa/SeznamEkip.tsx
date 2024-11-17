import { BrowserRouter, Route, Routes } from "react-router-dom";
import Telo from "../Layout/Telo";
import Ekipa, {
  DisplayDirektor,
  DisplayEkipa,
  DisplayIgralci,
  DisplayTrener,
} from "./Ekipa";
import Menu from "../Layout/Menu";

export function SeznamEkip() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Telo />} />
          <Route
            path="/ekipa/:idEkipe"
            element={
              <div className="container">
                <Menu />
                <DisplayEkipa />
                <DisplayDirektor />
                <DisplayTrener />
                <DisplayIgralci />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default SeznamEkip;
